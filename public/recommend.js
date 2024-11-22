// public/recommend.js

// Function to add a memo to the memos div
function addMemo(transcription, time, location) {
    const memoDiv = document.createElement('div');
    memoDiv.className = 'memo';
    memoDiv.textContent = `${transcription} - ${time} at ${location}`;
    document.getElementById('memos').appendChild(memoDiv);
    respond(transcription);
}

// Respond function to handle user input
function respond(transcription) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            showPosition(position, transcription);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Callback function to get user's position
function showPosition(position, transcription) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    getRestaurants(lat, lon, transcription);
}

// Function to identify user's intent
async function identifyIntentFirst(transcription) {
    try {
        const response = await fetch('https://noggin.rea.gent/desperate-echidna-9253', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer rg_v1_ikqio64in5964woesbbzllecm42kyxvyz1ry_ngk',
            },
            body: JSON.stringify({
                "user_input": transcription,
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
async function getRestaurants(lat, lon, transcription) {
    // Implement API call to Yelp or other service to fetch restaurants based on transcription
    // Example:
    try {
        const response = await fetch(`https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${lon}&categories=restaurants&term=${encodeURIComponent(transcription)}`, {
            headers: {
                Authorization: `Bearer YOUR_YELP_API_KEY`,
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