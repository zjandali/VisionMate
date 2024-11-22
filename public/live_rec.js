// public/live_rec.js

// Ensure API keys are securely stored and not exposed to the client-side
const yelpApiKey = ''; // Insert your Yelp API Key here
const googleApiKey = ''; // Insert your Google API Key here

// Main function to handle user response
function respond(userInput) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            showPosition(position, userInput);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Callback function to get user's position
function showPosition(position, userInput) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    getRestaurants(lat, lon, userInput);
}

// Function to identify user's intent
async function identifyIntentFirst(userInput) {
    try {
        const response = await fetch('https://noggin.rea.gent/desperate-echidna-9253', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer rg_v1_ikqio64in5964woesbbzllecm42kyxvyz1ry_ngk',
            },
            body: JSON.stringify({
                "user_input": userInput,
            }),
        });

        const data = await response.text();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error identifying intent:', error);
        return null;
    }
}

// Placeholder for getRestaurants function
async function getRestaurants(lat, lon, userInput) {
    // Implement API call to Yelp or other service to fetch restaurants based on userInput
    // Example:
    try {
        const response = await fetch(`https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${lon}&categories=restaurants&term=${encodeURIComponent(userInput)}`, {
            headers: {
                Authorization: `Bearer ${yelpApiKey}`,
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        displayRestaurants(data.businesses);
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        alert('Sorry, unable to fetch restaurants at this time.');
    }
}

// Function to display restaurants on the page
function displayRestaurants(restaurants) {
    const restaurantDiv = document.getElementById('restaurants');
    restaurantDiv.innerHTML = '';

    restaurants.forEach((restaurant) => {
        const restaurantElement = document.createElement('div');
        restaurantElement.innerHTML = `
            <h2>${restaurant.name}</h2>
            <p><a href="${restaurant.url}" target="_blank">View on Yelp</a></p>
            <p>${restaurant.location.address1}, ${restaurant.location.city}</p>
            <p>Rating: ${restaurant.rating}</p>
            <p>Review Count: ${restaurant.review_count}</p>
        `;
        restaurantDiv.appendChild(restaurantElement);
    });
}