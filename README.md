# ForexExchange

Build a responsive web application which shows the historical and current rate for an FX pair.

[a relative link](src/assets/design.png)

The app must:
Utilise the data from https://tradermade.com/ to display:

1.	A dropdown of exchanges
2.	Two dropdowns containing the available symbols so that the user can compare two given symbols.
3.	A chart showing the current selected symbol (currency pair). The chart should show
  a.	The flags of the current pair. Use the flags from https://github.com/transferwise/currency-flags
  b.	The exchange
  c.	The symbol for the current currency pair
  d.	The current price
  e.	The difference between the starting price and the ending price of the current time selection
  f.	A chart displaying the historical close prices. Any Charting library of your choice can be utilised.
  g.	Tabbing functionality which changes the chart plot. On change the difference between the starting and ending  price needs to be recalculated.

It would be nice to have 
a.	A responsive mobile design
b.	Live pricing using socket communication

API Details

1.	Create a free account on https://tradermade.com/
  a.	REST API Documentation: https://tradermade.com/docs/restful-api
  b.	Web Socket Documentation: https://tradermade.com/docs/streaming-data-api
2.	Note that with a free account you will be allowed:
  a.	1000 REST API calls per month
  b.	14 days of utilising the streaming capabilities (for live data via WebSocket)
  c.	Suggestion: Only enable the web socket key when you are about to start developing the WebSocket part
3.	To get the currencies use the Live Currencies List REST API call (live_currencies_list)
4.	To get the chart data use the Timeseries REST API call (timeseries)
5.	To connect to the WebSocket follow instructions given here: https://tradermade.com/docs/streaming-data-api

*For install and run please read [a relative link](Install.md)
