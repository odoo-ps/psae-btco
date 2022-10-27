# Sally's Flower Shop - Part 1

The first step is to create a new module inside of the project folder. To do this, create a new folder for the module
and ensure that it contains `__init__.py` and `__manifest__.py`. Alternatively, we can use
the [scaffolder](https://www.odoo.com/documentation/15.0/developer/cli.html#scaffolding)
to automate the creation of the module.

We shall name our module `the_flower_app`.

Next, we will create a Python model to represent flowers called `flower.py`. All Python models should be
placed inside `models` folder and the model files must be imported in `__init__.py` in the same folder. Moreover, the
entirety of `models` folder has to be imported in the module-level `__init__.py` file. Therefore, we get the following
file structure in our project so far:

```text
the_flower_app
├── models
│   ├── flower.py
│   └── __init__.py
├── __init__.py
└── __manifest__.py
```

In `flower.py`, we will define the model with the necessary attributes. Odoo provides a variety
of [fields](https://www.odoo.com/documentation/16.0/developer/reference/backend/orm.html#fields).


<p>
One of the attributes is <i>Season</i>. We can define a flower's season by specifying a start date and an end date. Hence,
two date fields are needed to track seasons.
<GitHubButton link="https://www.odoo.com/documentation/16.0/developer/reference/backend/orm.html#fields"></GitHubButton>
</p>

Often it is helpful to provide tooltips especially if the field's label is not very obvious. This is achieved by using
the `help` field attribute. We will use this for the model attribute _Watering frequency_.

### Work in Progress...