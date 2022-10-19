# Sally's Flower Shop - Part 6

Sally finds the watering record system could be further improved.

#### To-Do's:

- Only users with the group "gardener" should be able to water the plants
- If a plant has serials that need watering, the `product.template` form view should display a red ribbon _NEEDS WATERING_
- The serial number of flowers should be drawn from a sequence stored on the product record itself
- Add a many-to-many field on `product.product` pointing `to res.users` to be able to assign gardeners to a specific serial-numbered flower
- If gardeners are assigned, then only the assigned gardeners can view the flower product, otherwise any gardener can view it
