# Sally's Flower Shop - Part 2

[View the commit for this solution](https://github.com/odoo-ps/psae-btco/commit/bfc90b73ec1030971c4b4350c8ae35f9284b3036)

In this case study, we are going to add a relation between two models: `flower.flower` and `product.product`. There are
a few judgement calls to be made before relating the two models.

#### What relational field should I use?

What we need is a one-to-one mapping between a product and a flower. However, Odoo does not provide such a relation,
instead we will be using a `Many2one` relational field to achieve this mapping.

#### In which model should I place the field?

This is where we have to beg the question: "Do we need a reference to the product record from the flower record, or is
it the other way round?". The answer is that we need a reference to the flower record from the product record. This is
because in sale order lines we choose products not flowers, and a product may or may not be a flower.

#### What would be the consequence of placing the field in the other model?

The consequence would be doing a lot of search queries. Every time we would want to get a reference to the flower of a
product in a sale order line, it would require us to search through all the flower records where the product field
matches the product of the sale order line. On the other hand, following the other approach means getting the flower
record in the sale order line would be as simple as `product_id.flower_id`!

```python
class Product(models.Model):
    _inherit = "product.product"

    is_flower = fields.Boolean("Is Flower Product?")
    flower_id = fields.Many2one("flower.flower")
```

<GitHubButton link="https://github.com/odoo-ps/psae-btco/blob/6adc65ac5398ed486c352d4f6dec770467a4f36e/flower_shop/models/product.py#L10"></GitHubButton>
