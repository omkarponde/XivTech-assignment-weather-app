# Backend Assessment: Real-Time Weather API

This project is a node.js server that fetches real-time weather data for multiple cities using weather APIs and responds with the weather results.


## How to Run

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Set up environment variables for API keys (if necessary).
4. Run the server using `npm start`.
5. Access the API at http://localhost:3000/getWeather.
 
## API Endpoint

### POST /getWeather

Accepts an array of city names as POST body params and returns real-time weather data for each city.

Example Input:
{ "cities": [ "toronto", "mumbai", "london" ] }

Example Output:
{
  "weather": {
    "toronto": "24C",
    "mumbai": "34C",
    "london": "14C"
  }
}

## Bonus: UI App

A simple UI app has been created to accept city names as input and display real-time weather data from the API endpoint.

### How to Run UI App

1. Navigate to the `ui-app` directory.
2. Open `index.html` in a web browser.
3. Enter city names in the text box and click the "Get Weather" button.

