
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



async function getAccessToken() {
  const res = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: '4KmCNpLicyCKAhCZ17mSMUMiGnf40oEj',
      client_secret: 'L83oxPF8Aa2bTJ8B'
    })
  });
  const data = await res.json();
  console.log('Access Token:', data.access_token);
  return data.access_token;
}
// Generating a new access token

const Barc = async () => {
    await fetch('https://test.api.amadeus.com/v1/shopping/activities/by-square?north=13.023577&west=77.536856&south=12.923210&east=77.642256', {
        method: "GET",
        headers: {
            "Authorization": "Bearer"+ " " + await getAccessToken(),
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
       console.log(random.data[0].pictures[1]);
       document.querySelector('#results1 img').src = random.data[0].pictures[0];
       document.querySelector('#results1 h1').innerText = random.data[0].name;
        document.querySelector('#results1 p').innerText = random.data[0].description;
        
        document.querySelector('#results2 img').src = random.data[1].pictures[0];
        document.querySelector('#results2 h1').innerText = random.data[1].name;
        document.querySelector('#results2 p').innerText = random.data[1].description;

        document.querySelector('#results3 img').src = random.data[2].pictures[0];
        document.querySelector('#results3 h1').innerText = random.data[2].name;
        document.querySelector('#results3 p').innerText = random.data[2].description;
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