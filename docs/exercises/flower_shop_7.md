# Sally's Flower Shop - Part 7

Sally wishes to expand her business across multiple warehouses.
She wants to fetch and maintain daily weather updates at the location of each warehouse.

As part of this case study, we will be using [Open Weather Map API](https://openweathermap.org/) to get the weather data.

Note: the free API provides only 2 types of call - current weather data and 5-day forecasts with a step of 3 hours. Also,
we can only make up to 60 API calls per minute.

#### To-Do's:
- Create a new model `stock.warehouse.weather` and add a relation with `stock.warehouse` such that a warehouse record can have multiple weather records
- Add a system parameter to store the API key
- Add a button on `stock.warehouse` to fetch the current weather data based on the location of the warehouse
- Furthermore, create a scheduled action to get every warehouse's weather data hourly
- To save on Sally's expenses, create a scheduled action to get a forecast everyday and if the current day contains
rain volume > 0.2 mm between 9 AM and 6 PM, then automatically water all the flowers in that warehouse

The new model `stock.warehouse.weather` should have the following attributes:
- Temperature
- Pressure
- Humidity
- Wind speed
- Rain volume (for the past hour in mm)
- Description
- Capture Time