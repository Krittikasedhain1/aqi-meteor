# Air Quality Index App with Next.js

## Introduction

This project aims to create an Air Quality Index (AQI) app using Next.js, a React-based framework for building web applications. The app will provide users with real-time information about air quality in different locations, helping them make informed decisions about their outdoor activities.

## Why React and Next.js?

### React

React is a JavaScript library for building user interfaces, developed and maintained by Facebook. It is widely used in the industry for its component-based architecture, which promotes code reusability, maintainability, and a more structured development approach. React's virtual DOM efficiently updates the UI, ensuring optimal performance.

Key advantages of using React for this project:

- **Component-based Architecture**: Organizing UI elements into components makes it easy to manage and maintain code.
- **Virtual DOM**: React's virtual DOM optimizes updates, improving the app's performance and providing a smoother user experience.

- **Large Ecosystem**: A vast collection of libraries, tools, and resources are available within the React ecosystem, facilitating development.

## Motivation for Using Next.js

While React provides a solid foundation for building dynamic user interfaces, the decision to incorporate Next.js into this project offers several key advantages:

### 1. **Server-Side Rendering (SSR)**

Next.js provides built-in support for Server-Side Rendering (SSR), which is crucial for improving the initial load times of the application. SSR renders pages on the server, delivering HTML to the client, and thus contributes to better SEO and a faster perceived page load speed.

### 2. **Automatic Code Splitting**

Next.js offers automatic code splitting out of the box. This feature helps reduce the initial bundle size by only loading the JavaScript that is necessary for the current page. It optimizes the loading performance, especially beneficial for users on slower network connections.

### 3. **Improved Page Performance**

The combination of React and Next.js enhances overall page performance. With features like prefetching and optimized client-side navigation, users experience a smoother and more responsive application.

### 4. **Simplified Deployment**

Deploying React applications can sometimes be a complex process. Next.js simplifies this with easy deployment options to platforms like Vercel, Netlify, and others. This streamlined deployment process allows for faster iterations and updates.

### 5. **Built-in API Routes**

Next.js introduces a simple way to create API routes within the same project. This can be advantageous for fetching data or handling server-side logic without the need for a separate backend server. It keeps the project structure clean and cohesive.

### 6. **Rich Ecosystem**

By choosing Next.js, you benefit from a rich ecosystem of plugins, tools, and community support. This can significantly speed up development, provide solutions to common challenges, and ensure the project stays up-to-date with best practices.

In summary, the decision to use Next.js alongside React for this Air Quality Index app is motivated by the desire to enhance performance, simplify development and deployment, and take advantage of the additional features that Next.js brings to the table.

## Air Quality Data and WAQI API Integration

This Air Quality Index (AQI) app relies on the World Air Quality Index (WAQI) API to obtain real-time air quality data. The WAQI API provides a comprehensive dataset, including AQI values, pollutants concentrations, and other relevant information for different locations.

### Using WAQI API

To integrate the WAQI API into the app, follow these steps:

1. **Obtain API Key**: Sign up on the [WAQI website](https://waqi.info/) to obtain an API key. This key is essential for making requests to the WAQI API.

2. **API Requests**: Utilize the WAQI API to fetch air quality data based on the user's selected location or predefined locations. Example API request:

   ```javascript
   // Example API Request
   const apiKey = process.env.WAQI_TOKEN;
   const location = "latitude;longitude";

   const response = await fetch(
     `https://api.waqi.info/feed/geo:${location}/?token=${apiKey}`
   );
   const data = await response.json();
   ```

   Place WAQI_TOKEN in .env using actual API key obtained from WAQI.

## Let's get started

Follow these steps to set up the development environment:

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

4. **Build the App**:

   ```bash
   npm run build
   ```

5. **Start the App on prod**:

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

- /pages # React components for each page
- /components # Reusable React components
- /styles # Styling for the app
- /public # Static assets (images, icons, etc.)

## Additional Configuration

Customize the app by configuring environmental variables, API keys, and other settings. Refer to the documentation for specific details.

## License

This project is licensed under the [MIT License](LICENSE).
