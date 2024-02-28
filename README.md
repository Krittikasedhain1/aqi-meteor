# Air Quality Index App with Next.js

## Introduction

This project aims to create an Air Quality Index (AQI) app using Next.js, a React-based framework for building web applications. The app will provide users with real-time information about air quality in different locations, helping them make informed decisions about their outdoor activities.

## Motivation for Using Next.js

### Secure Token Handling with Next.js SSR

One of the key reasons for choosing Next.js in this project is to implement server-side rendering (SSR) for enhanced security, especially when handling sensitive information like API tokens. In the context of this Air Quality Index (AQI) app, the World Air Quality Index (WAQI) API requires an API key for data retrieval.By utilizing Next.js and SSR, we ensure that the API requests are made on the server, preventing the exposure of tokens in the client-side code.

## Air Quality Data and WAQI API Integration

This Air Quality Index (AQI) app relies on the World Air Quality Index (WAQI) API to obtain real-time air quality data. The WAQI API provides a comprehensive dataset, including AQI values, pollutants concentrations, and other relevant information for different locations.

### Using WAQI API

To integrate the WAQI API into the app, follow these steps:

- **Obtain API Key**: Sign up on the [WAQI website](https://aqicn.org/data-platform/token/) to obtain an API key. This key is essential for making requests to the WAQI API.

### Setting up API Token in a `.env` File

To securely store your API token and sensitive information, you can use a `.env` file in your Next.js project. Follow these steps:

#### 1. Create a `.env` File from the .env.example file

In the root of your project, create a file named `.env`. This file will store your environment variables or copy .env.example as `.env`

#### 2. Add API Token to `.env`

Open the `.env` file and add your WAQI API key like this:

```plaintext
WAQI_API_KEY=your-api-key-here
```

- **API Requests**: Utilize the WAQI API to fetch air quality data based on the user's selected location or predefined locations. Example API request:

  ```javascript
  // Example API Request
  const apiKey = process.env.WAQI_TOKEN;
  const location = "latitude;longitude";

  const response = await fetch(
    `https://api.waqi.info/feed/geo:${location}/?token=${apiKey}`
  );
  const data = await response.json();
  ```

## Running the Application

### Follow these steps to set up the development environment:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/air-quality-app.git
   cd air-quality-app
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the App on dev**:

   ```bash
   npm run dev
   ```

   The app will be accessible at `http://localhost:3000`.

### Follow these steps to set up the production environment:

1. **Build the App**:

   ```bash
   npm run build
   ```

2. **Start the App on prod**:

   ```bash
   npm run start
   ```

The app will be accessible at `http://localhost:3000`.

### User Location via Navigator

In addition to fetching predefined locations, the app can also use the user's navigator to obtain their current latitude and longitude. This information can be utilized to provide air quality data for the user's immediate location.

1. **Obtaining User Location**:

   ```javascript
   // Example code to obtain user location
   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition((position) => {
       const userLatitude = position.coords.latitude;
       const userLongitude = position.coords.longitude;

       // Use userLatitude and userLongitude to fetch air quality data
     });
   } else {
     console.error("Geolocation is not supported by this browser.");
   }
   ```

2. **Integrating with WAQI API**:

   Use the obtained latitude and longitude to make requests to the WAQI API for real-time air quality data specific to the user's location.

## Project Structure

The project structure follows a standard Next.js layout:

- /app # React components for each page
- /components # Reusable React components
- /types # Types for the app data
- /hooks # Custom hooks used within
- /utils # Utility functions used in project
- /public # Static assets (images, icons, etc.)

## Contact

Krittika Sedhain - krittikasedhain11@gmail.com
