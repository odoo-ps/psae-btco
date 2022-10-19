# Sally's Flower Shop - Part 4

Sally has an additional request. Her business has been more successful than ever
and consequently she's been running out of stock more frequently.

Therefore, she decided to start planting more flowers. This made it difficult for her to keep track of
watering times. Sally now wants to track every flower she has planted using **serial numbers**. Additionally,
she wants to have a list tracking all the watering she has done.

#### To-Do's:
- Create a new model for tracking watering times (example: `flower.water`)
- Add a button on `stock.production.lot` to create and link a new record of `flower.water`
- Add a constraint on `stock.production.lot` to prevent the user from watering before they're supposed to
(i.e. compare the _last watering date_ with the _watering frequency_)
- For more convenience, add a server action that automatically attempts to water all the selected plants from the `stock.production.lot` list view
