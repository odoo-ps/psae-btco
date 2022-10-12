from collections import defaultdict

from odoo import models, fields, api, _


class School(models.Model):
    _name = "school.school"
    _description = "School"

    name = fields.Char(required=True)
    establishment_date = fields.Date(required=True)
    street_1 = fields.Text(required=True)
    street_2 = fields.Text()
    city = fields.Char(required=True)
    state_id = fields.Many2one("res.country.state", domain="[('country_id', '=', country_id)]")
    country_id = fields.Many2one("res.country", required=True)
    zip_code = fields.Char()
    member_ids = fields.One2many("res.partner", "school_id")
    classroom_ids = fields.One2many("school.classroom", "school_id")
    subject_ids = fields.One2many("school.subject", "school_id")
    session_ids = fields.One2many("school.session", "school_id")
    faculty_count = fields.Integer(compute="_compute_member_count")
    student_count = fields.Integer(compute="_compute_member_count")
    classroom_count = fields.Integer(compute="_compute_classroom_count")
    subject_count = fields.Integer(compute="_compute_subject_count")
    session_count = fields.Integer(compute="_compute_session_count")


    @api.depends("member_ids")
    def _compute_member_count(self):
        data = self.env["res.partner"].read_group(
            domain=[("id", "in", self.member_ids.ids), ("member_type", "!=", False)],
            fields=["school_id", "member_type"],
            groupby=["school_id", "member_type"],
            lazy=False,
        )
        member_vals = defaultdict(lambda: {"faculty": 0, "student": 0})
        for item in data:
            member_vals[item["school_id"][0]][item["member_type"]] = item["__count"]
        for record in self:
            record.faculty_count = member_vals[record.id]["faculty"]
            record.student_count = member_vals[record.id]["student"]

    @api.depends("classroom_ids")
    def _compute_classroom_count(self):
        for record in self:
            record.classroom_count = len(record.classroom_ids)

    @api.depends("subject_ids")
    def _compute_subject_count(self):
        for record in self:
            record.subject_count = len(record.subject_ids)

    @api.depends("session_ids")
    def _compute_session_count(self):
        for record in self:
            record.session_count = len(record.session_ids)

    def action_view_classrooms(self):
        self.ensure_one()
        return {
            "type": "ir.actions.act_window",
            "name": _("Available Classrooms"),
            "view_mode": "tree,form",
            "res_model": "school.classroom",
            "domain": [("id", "in", self.classroom_ids.ids)],
            "context": {
                "default_school_id": self.id,
            },
        }

    def action_view_subjects(self):
        self.ensure_one()
        return {
            "type": "ir.actions.act_window",
            "name": _("Offered Subjects"),
            "view_mode": "tree,form",
            "res_model": "school.subject",
            "domain": [("id", "in", self.subject_ids.ids)],
            "context": {
                "default_school_id": self.id,
            },
        }

    def action_view_sessions(self):
        self.ensure_one()
        today = fields.Date.today()
        return {
            "type": "ir.actions.act_window",
            "name": _("Active Sessions"),
            "view_mode": "tree,form",
            "res_model": "school.session",
            "domain": [("id", "in", self.session_ids.ids), ("start_date", "<=", today), ("end_date", ">=", today)],
            "context": {
                "default_school_id": self.id,
            },
        }

    def action_view_members(self):
        self.ensure_one()
        return {
            "type": "ir.actions.act_window",
            "name": _("Faculty Members"),
            "view_mode": "tree,form",
            "res_model": "res.partner",
            "domain": [("id", "in", self.member_ids.ids), ("member_type", "=", "faculty")],
            "context": {
                "default_school_id": self.id,
                "default_member_type": "faculty",
            },
        }

    def action_view_students(self):
        self.ensure_one()
        return {
            "type": "ir.actions.act_window",
            "name": _("Students"),
            "view_mode": "tree,form",
            "res_model": "res.partner",
            "domain": [("id", "in", self.member_ids.ids), ("member_type", "=", "student")],
            "context": {
                "default_school_id": self.id,
                "default_member_type": "student",
            },
        }