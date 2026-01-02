# Main Idea
This app will monitor the price of different markets/coins on binance using public and free endpoints 
given by binance itself.
The app will alert the user when a target price(given by user) is crossed by market. 
The alert will be like a call ring which will keep ringing until user turns it off by clicking on notification.
The app will display a add button and a list of current remainders on first tab.
There will be the current price of different coins(which are currently chosen for remainder) also be shown on screen.
The target price will be also shown. There will be a edit button and delete button with every remainder in remainders list.
The settings tab will show the options to choose different ringtone and the ringing volume.
Binance websocket api will be used to continuously monitor different coins at same time.
Example Usage in python is given below:
```
import websocket
import json

def on_message(ws, message):
    data = json.loads(message)
    # When using 'combined' streams, the data is wrapped in a 'data' key
    price_data = data['data']
    print(f"{price_data['s']}: ${price_data['p']}")

# Note: We use /stream?streams= and lowercase names
assets = ["btcusdt", "ethusdt", "solusdt"]
streams = "/".join([f"{a}@aggTrade" for a in assets])
url = f"wss://fstream.binance.com/stream?streams={streams}"

ws = websocket.WebSocketApp(url, on_message=on_message)
ws.run_forever()
```

When a coin reaches a target value set by user, the app will alert the user through ringtone.

The app is built in react native so it can be fastly developed and will work across all platforms.
The UI will be simple and minimalistic and the app must not consume battery a lot because it will be used at night.
If there are some network issues, then it will try connecting again after 30 seconds, and also notify the user.
The android requirements will be Android 6 or higher. Make sure the app doesn't get closed by android and keeps running behind.

The add button on remainder screen will show the list of all coins and a search bar.
The coin list will be get through this api:
USD-M Futures Market:

    Endpoint: GET /fapi/v1/exchangeInfo

    Full URL: https://fapi.binance.com/fapi/v1/exchangeInfo

    Note: The response is quite large. To get just the symbols, you will need to parse the symbols array in the JSON response.

When user clicks upon the desired coin, it will show a popup to set a remainder which will show a target value field to be filled by user. Add remainder button will add a remainder and return to remainder screen and show the current remainders.

THe user must be able to add multiple coins.



