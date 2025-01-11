from fastapi import FastAPI, Request
import json

app = FastAPI()

@app.post("https://in.tradingview.com/chart/ZYmX4lAC/?symbol=BITSTAMP%3ABTCUSD")
async def webhook_listener(request: Request):
   
    try:
        data = await request.json()
        print("Webhook received:", data)
        
        
        ticker = data.get("ticker", "N/A")
        alert_message = data.get("message", "No message provided")
        timestamp = data.get("time", "No time provided")

        
        print(f"Alert for {ticker}: {alert_message} at {timestamp}")
        
        
        return {"status": "success", "message": "Webhook processed successfully"}
    except Exception as e:
        print(f"Error processing webhook: {e}")
        return {"status": "error", "message": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)