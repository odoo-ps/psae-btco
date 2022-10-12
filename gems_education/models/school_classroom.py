from collections import defaultdict

from odoo import models, fields, api, _


class SchoolClassroom(models.Model):
    _name = "school.classroom"
    _description = "School Classroom"

    _sql_constraints = [
        ("uniq_name_school_id", "unique(name, school_id)", "This classroom name already exists for this school."),
    ]

    name = fields.Char(required=True)
    capacity = fields.Integer(required=True, default=5)
    has_projector = fields.Boolean()
    has_smart_board = fields.Boolean()
    school_id = fields.Many2one("school.school")
    session_count = fields.Integer(compute="_compute_session_count")

    @api.depends("school_id.session_ids")
    def _compute_session_count(self):
        today = fields.Date.today()
        data = self.env["school.session"].read_group(
            domain=[("classroom_id", "in", self.ids), ("start_date", "<=", today), ("end_date", ">=", today)],
            fields=["classroom_id"],
            groupby=["classroom_id"],
        )
        session_vals = defaultdict(int)
        for item in data:
            session_vals[item["classroom_id"][0]] = item["classroom_id_count"]
        for record in self:
            record.session_count = session_vals[record.id]

    def action_view_sessions(self):
        self.ensure_one()
        today = fields.Date.today()
        return {
            "type": "ir.actions.act_window",
            "name": _("Active Sessions"),
            "view_mode": "tree,form",
            "res_model": "school.session",
            "domain": [("classroom_id", "=", self.id), ("start_date", "<=", today), ("end_date", ">=", today)],
            "context": {
                "default_classroom_id": self.id,
                "default_school_id": self.school_id.id,
            },
        }
