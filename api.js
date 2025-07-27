
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



const Bangalore = async () => {
  document.querySelector('.Bangalore').classList.add('bg-red-600');
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
       document.querySelector('#results1').classList.add('bg-[#0e2525]/80')
       document.querySelector('#results1 img').src = random.data[0].pictures[0];
       document.querySelector('#results1 h1').innerText = random.data[0].name;
        document.querySelector('#results1 p').innerText = random.data[0].description
         ? random.data[0].description.substring(0, 335) + (random.data[1].description.length > 400 ? '' : ''):
          '';
        

        document.querySelector('#results2').classList.add('bg-[#0e2525]/80')
        document.querySelector('#results2 img').src = random.data[1].pictures[0];
        document.querySelector('#results2 h1').innerText = random.data[1].name;
        document.querySelector('#results2 p').innerText = random.data[1].description
    ? random.data[1].description.substring(0, 271) + (random.data[1].description.length > 400 ?'' : ''):
    '';

        document.querySelector('#results3').classList.add('bg-[#0e2525]/80')
        document.querySelector('#results3 img').src = random.data[2].pictures[0];
        document.querySelector('#results3 h1').innerText = random.data[2].name;
        document.querySelector('#results3 p').innerText = random.data[2].description
         ? random.data[2].description.substring(0, 127) + (random.data[2].description.length > 400 ? '' : '')
         : '';


    });
    document.querySelector('.Bangalore').classList.remove('bg-red-600');
    
}
// End of Bangalore function



const London = async () => {
  document.querySelector('.London').classList.add('bg-red-600');
    await fetch('https://test.api.amadeus.com/v1/shopping/activities/by-square?north=51.520180&west=-0.169882&south=51.484703&east=-0.061048', {
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
       document.querySelector('#results1').classList.add('bg-[#0e2525]/80')
       document.querySelector('#results1 img').src = random.data[0].pictures[0];
       document.querySelector('#results1 h1').innerText = random.data[0].name;
        document.querySelector('#results1 p').innerText = random.data[0].description
         ? random.data[0].description.substring(0, 335) + (random.data[1].description.length > 400 ? '' : ''):
          '';
        

        document.querySelector('#results2').classList.add('bg-[#0e2525]/80')
        document.querySelector('#results2 img').src = random.data[1].pictures[0];
        document.querySelector('#results2 h1').innerText = random.data[1].name;
        document.querySelector('#results2 p').innerText = random.data[1].description
    ? random.data[1].description.substring(0, 271) + (random.data[1].description.length > 400 ?'' : ''):
    '';

        document.querySelector('#results3').classList.add('bg-[#0e2525]/80')
        document.querySelector('#results3 img').src = random.data[2].pictures[0];
        document.querySelector('#results3 h1').innerText = random.data[2].name;
        document.querySelector('#results3 p').innerText = random.data[2].description
         ? random.data[2].description.substring(0, 127) + (random.data[2].description.length > 400 ? '' : '')
         : '';


    });
    document.querySelector('.London').classList.remove('bg-red-600');
    
}
// End of London function



const Paris = async () => {
  document.querySelector('.Paris').classList.add('bg-red-600');
    await fetch('https://test.api.amadeus.com/v1/shopping/activities/by-square?north=48.91&west=2.25&south=48.80&east=2.46', {
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
       document.querySelector('#results1').classList.add('bg-[#0e2525]/80')
       document.querySelector('#results1 img').src = random.data[0].pictures[0];
       document.querySelector('#results1 h1').innerText = random.data[0].name;
        document.querySelector('#results1 p').innerText = random.data[0].description
         ? random.data[0].description.substring(0, 335) + (random.data[1].description.length > 400 ? '' : ''):
          '';
        

        document.querySelector('#results2').classList.add('bg-[#0e2525]/80')
        document.querySelector('#results2 img').src = random.data[1].pictures[0];
        document.querySelector('#results2 h1').innerText = random.data[1].name;
        document.querySelector('#results2 p').innerText = random.data[1].description
    ? random.data[1].description.substring(0, 271) + (random.data[1].description.length > 400 ?'' : ''):
    '';

        document.querySelector('#results3').classList.add('bg-[#0e2525]/80')
        document.querySelector('#results3 img').src = random.data[2].pictures[0];
        document.querySelector('#results3 h1').innerText = random.data[2].name;
        document.querySelector('#results3 p').innerText = random.data[2].description
         ? random.data[2].description.substring(0, 127) + (random.data[2].description.length > 400 ? '' : '')
         : '';


    });
    document.querySelector('.Paris').classList.remove('bg-red-600');
    
}

// End of Paris function





const Berlin = async () => {
  document.querySelector('.Berlin').classList.add('bg-red-600');
    await fetch('https://test.api.amadeus.com/v1/shopping/activities/by-square?north=52.541755&west=13.354201&south=52.490569&east=13.457198', {
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
       document.querySelector('#results1').classList.add('bg-[#0e2525]/80')
       document.querySelector('#results1 img').src = random.data[0].pictures[0];
       document.querySelector('#results1 h1').innerText = random.data[0].name;
        document.querySelector('#results1 p').innerText = random.data[0].description
         ? random.data[0].description.substring(0, 335) + (random.data[1].description.length > 400 ? '' : ''):
          '';
        

        document.querySelector('#results2').classList.add('bg-[#0e2525]/80')
        document.querySelector('#results2 img').src = random.data[1].pictures[0];
        document.querySelector('#results2 h1').innerText = random.data[1].name;
        document.querySelector('#results2 p').innerText = random.data[1].description
    ? random.data[1].description.substring(0, 271) + (random.data[1].description.length > 400 ?'' : ''):
    '';

        document.querySelector('#results3').classList.add('bg-[#0e2525]/80')
        document.querySelector('#results3 img').src = random.data[2].pictures[0];
        document.querySelector('#results3 h1').innerText = random.data[2].name;
        document.querySelector('#results3 p').innerText = random.data[2].description
         ? random.data[2].description.substring(0, 127) + (random.data[2].description.length > 400 ? '' : '')
         : '';


    });
    document.querySelector('.Berlin').classList.remove('bg-red-600');
    
}
// End of Berlin function


// Start of event listener and fight api calls


 

// ...existing code...
const getFlights = async () => {
  const first = document.getElementById('first').value;
  const second = document.getElementById('second').value;
  let third = document.getElementById('third').value;
  const people = document.getElementById('people').value;

  await fetch(`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${first}&destinationLocationCode=${second}&departureDate=${third}&adults=${people}&nonStop=false`, {
    method: "GET",
    headers: {
        "Authorization": "Bearer"+ " " + await getAccessToken(),
    },
  }).then(function (response) {
      if (response.ok) {
          console.log('Response is OK');
          console.log(response);
          return response.json();
      }
      else {
          const Data = response.json();
          console.log('Keep pushing');
      }
  })
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