
console.log('Hot dog!');

// If you choose to use the Curl command to authenticate
// fetch('https://test.api.amadeus.com/v1/shopping/activities?latitude=12.8797&longitude=121.7740&radius=10')
//     .then(function(response){
//         if(response.ok){
//             console.log('Response is OK');
//             return response.json();
//             }else{
//             throw new Error(error);
//             }
//             });

// If you want to pass your token directly in the request




const test = async () => {
    await fetch('https://test.api.amadeus.com/v1/shopping/activities/by-square?north=13.023577&west=77.536856&south=12.923210&east=77.642256', {
        method: "GET",
        headers: {
            "Authorization": "Bearer i7aa42fMvmSObqf8MAhJNWFm8VNZ",
        },
        mode: "cors",
        catch: "default"
    }).then(function (response) {
        if (response.ok) {
            console.log('Response is OK');
            return response.json();
        }
        else {
            const Data = response.json();
            console.log('Keep pushing');
        }
    }).then(random => {
       console.log(random.data[0].name);
    });
}










// FIGURE OUT WHY THIS WORKS 
// https://www.geeksforgeeks.org/javascript/how-to-use-the-javascript-fetch-api-to-get-data/
// Next steps
//  1. Get a fresh token from Amadeus
// 2. Save the response in a variable and console.log it
// 3. check the data structure of the response (is it JSON, or an object)
// 4. Use the data to display activities on your page


// curl -X 'GET' \
//   'https://test.api.amadeus.com/v1/shopping/activities?latitude=12.8797&longitude=121.7740&radius=10' \
//   -H 'accept: application/vnd.amadeus+json' \
//   -H 'Authorization: Bearer dKRyVT18FUrI1dd1J3YGkB5vKcTn'



// const TheData = async (userSearch) => {
//     try {
//         const response = await axios.get('https://test.api.amadeus.com/v1/', {
//             params: {
//                 s: userSearch
//             }
//         });
//         if (response.data.Error) {
//             return [];
//         }
//         // Return the Search results array
//         return response.data.Search || [];
//     } catch (error) {
//         console.error('API error:', error);
//         return [];
//     }
// };

// async function handleSearch() {
//     const userInput = document.getElementById('searchInput').value;
//     const results = await TheData(userInput);
//     const display = document.getElementById('results');
//     display.innerHTML = '';

//     if (results && results.length > 0) {
//         results.forEach(item => {
//             const div = document.createElement('div');
//             div.textContent = JSON.stringify(item);
//             display.appendChild(div);
//         });
//     } else {
//         display.textContent = 'No results found.';
//     }
// }