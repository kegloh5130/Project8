
async function getAccessToken() {
  const res = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: 'HCGEfSj1eX30jw5Va5yQY6Z6uf3f6mAj',
      client_secret: '0lCM8yMzNETlQCV9'
    })
  });
  const data = await res.json();
  console.log('Access Token:', data.access_token);
  return data.access_token;

}



// Generating a new access token


// start of Bangalore function
const Bangalore = async () => {
  document.querySelector('.Bangalore').classList.add('bg-red-600');
  document.querySelector('.Bangalore').innerText = 'Loading';
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

      const marble = ()=>{ 
        return `

      <section class="text-white text-3xl font-extrabold mb-5 mt-10">Search Flight</section>
      <form id="form2" class="flex flex-col items-start xl:flex-row justify-between xl:items-center p-10" onsubmit="return false" action="">

    <section class="form-group2">
    <label for="Departure">Departure</label>
    <input id="first" type="text">
    </section>

    <section class="form-group2">
    <label for="Arrival">Arrival</label>
    <input id="second" type="text" value="BLR">
    </section>

    <section class="form-group2">
    <label for="Date">Date</label>
    <input id="third" type="date">
    </section>

    <section class="form-group2">
    <label for="People">People</label>
    <input type="number" id="people" min="1" max="20" value="1">
    </section>

     
 </form> 
 <button onclick="getFlights1()" id="search" class="bg-[#0e2525]/60 mt-0 mb-5 pb-5 pt-5 font-bold  pr-10 pl-10 rounded-md  text-white hover:scale-110 transition-all ease-in delay-100">Search</button>
   `
      }
      document.getElementById('flightsearch').innerHTML = marble();
    });
    document.querySelector('.Bangalore').classList.remove('bg-red-600');
    document.querySelector('.Bangalore').innerText = 'Bangalore';
   


}

// End of Bangalore function


// start of London function
const London = async () => {
  document.querySelector('.London').classList.add('bg-red-600');
  document.querySelector('.London').innerText = 'Loading';
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

    
      const marble = ()=>{ 
        return `

      <section class="text-white text-3xl font-extrabold mb-5 mt-10">Search Flight</section>
      <form id="form2" class="flex flex-col items-start xl:flex-row justify-between xl:items-center p-10" onsubmit="return false" action="">

    <section class="form-group2">
    <label for="Departure">Departure</label>
    <input id="first" type="text">
    </section>

    <section class="form-group2">
    <label for="Arrival">Arrival</label>
    <input id="second" type="text" value="LON">
    </section>

    <section class="form-group2">
    <label for="Date">Date</label>
    <input id="third" type="date">
    </section>

    <section class="form-group2">
    <label for="People">People</label>
    <input type="number" id="people" min="1" max="20" value="1">
    </section>

     
 </form> 
 <button onclick="getFlights2()" id="search" class="bg-[#0e2525]/60 mt-0 mb-5 pb-5 pt-5 font-bold  pr-10 pl-10 rounded-md  text-white hover:scale-110 transition-all ease-in delay-100">Search</button>
   `
      }
      document.getElementById('flightsearch').innerHTML = marble();


    });
    document.querySelector('.London').classList.remove('bg-red-600');
    document.querySelector('.London').innerText = 'London';
    
}
// End of London function


// start of Paris function
const Paris = async () => {
  document.querySelector('.Paris').classList.add('bg-red-600');
  document.querySelector('.Paris').innerText = 'Loading';
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

    
      const marble = ()=>{ 
        return `

      <section class="text-white text-3xl font-extrabold mb-5 mt-10">Search Flight</section>
      <form id="form2" class="flex flex-col items-start xl:flex-row justify-between xl:items-center p-10" onsubmit="return false" action="">

    <section class="form-group2">
    <label for="Departure">Departure</label>
    <input id="first" type="text">
    </section>

    <section class="form-group2">
    <label for="Arrival">Arrival</label>
    <input id="second" type="text" value="PAR">
    </section>

    <section class="form-group2">
    <label for="Date">Date</label>
    <input id="third" type="date">
    </section>

    <section class="form-group2">
    <label for="People">People</label>
    <input type="number" id="people" min="1" max="20" value="1">
    </section>

     
 </form> 
 <button onclick="getFlights3()" id="search" class="bg-[#0e2525]/60 mt-0 mb-5 pb-5 pt-5 font-bold  pr-10 pl-10 rounded-md  text-white hover:scale-110 transition-all ease-in delay-100">Search</button>
   `
      }
      document.getElementById('flightsearch').innerHTML = marble();


    });
    document.querySelector('.Paris').classList.remove('bg-red-600');
    document.querySelector('.Paris').innerText = 'Paris';
    
}

// End of Paris function




// start of Berlin function
const Berlin = async () => {
  document.querySelector('.Berlin').classList.add('bg-red-600');
  document.querySelector('.Berlin').innerText = 'Loading';
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

    
      const marble = ()=>{ 
        return `

      <section class="text-white text-3xl font-extrabold mb-5 mt-10">Search Flight</section>
      <form id="form2" class="flex flex-col items-start xl:flex-row justify-between xl:items-center p-10" onsubmit="return false" action="">

    <section class="form-group2">
    <label for="Departure">Departure</label>
    <input id="first" type="text">
    </section>

    <section class="form-group2">
    <label for="Arrival">Arrival</label>
    <input id="second" type="text" value="ZRH">
    </section>

    <section class="form-group2">
    <label for="Date">Date</label>
    <input id="third" type="date">
    </section>

    <section class="form-group2">
    <label for="People">People</label>
    <input type="number" id="people" min="1" max="20" value="1">
    </section>

     
 </form> 
 <button onclick="getFlights4()" id="search" class="bg-[#0e2525]/60 mt-0 mb-5 pb-5 pt-5 font-bold  pr-10 pl-10 rounded-md  text-white hover:scale-110 transition-all ease-in delay-100">Search</button>
   `
      }
      document.getElementById('flightsearch').innerHTML = marble();


    });
    document.querySelector('.Berlin').classList.remove('bg-red-600');
    document.querySelector('.Berlin').innerText = 'Berlin';
    
}
// End of Berlin function




// Start of flight function for Bangalore
const getFlights1 = async () => {
  document.querySelector('#search').classList.add('bg-red-600');
  document.querySelector('#search').innerText = 'Searching';
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
          return response.json();
      }
      else {
          const Data = response.json();
          console.log('Keep pushing');
      }
  }).then(fight => {
    const departureAirport = fight.data[0].itineraries[0].segments[0].departure.iataCode;
    console.log(departureAirport);
     const arrivalAirport = fight.dictionaries.locations.BLR.cityCode;
    console.log(arrivalAirport);
    const Seat = fight.data[0].numberOfBookableSeats;
    console.log(Seat);
    const price = fight.data[0].price.total;
    console.log(price);
    const three = ()=>{
    return `
    <section class="text-white text-3xl font-extrabold mb-5 mt-10">Flight Result</section>

    <section class=" flex flex-col xl:flex-row mt-10 mb-10 bg-[#0e2525]/80 rounded-lg p-10">

    <section class="flex flex-col items-center gap-4 bg-[#0e2525]/80 p-20">
        <h1 class="font-bold">Departure</h1>
        <span>${departureAirport}</span>

    </section>

    <section class="flex flex-col items-center gap-4  bg-[#0e2525]/70 p-20">
        <h1 class="font-bold">Arrival</h1>
        <span>${arrivalAirport}</span>
    </section>


    <section class="flex flex-col items-center gap-4 bg-[#0e2525]/60 p-20">
        <h1 class="font-bold">Seats</h1>
        <span>${Seat}</span>
    </section>


    <section class="flex flex-col items-center gap-4  bg-[#0e2525]/40 p-20">
    <h1 class="font-bold">Price</h1>
    <span>${price}</span>
    </section>

    <button class=" bg-[#0e2525]/90 p-20 mt-10 xl:mt-0 xl:ml-10 text-white font-extrabold  hover:scale-110 transition-all ease-in delay-100">
        Book Now
    </button>

    </section>

    <section class="text-white text-2xl font-bold mt-20 mb-20 text-center xl:text-balance">Look for Hotels in the area <button onclick="getHotels1()"  id="searchH" class="bg-[#0e2525]/60 mt-0 mb-5 pb-5 pt-5 font-bold text-xl pr-10 pl-10 rounded-md  text-white hover:scale-110 transition-all ease-in delay-100">Search</button> </section>
`
    }
      document.getElementById('flights-container').innerHTML = three();
      document.querySelector('#search').innerText = 'Search';
      document.querySelector('#search').classList.remove('bg-red-600');
    
  })
}
// End of flight function for Bangalore




// Start of flight function for London
const getFlights2 = async () => {
  document.querySelector('#search').classList.add('bg-red-600');
  document.querySelector('#search').innerText = 'Searching';
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
          return response.json();
      }
      else {
          const Data = response.json();
          console.log('Keep pushing');
      }
  }).then(fight => {
    const departureAirport = fight.data[0].itineraries[0].segments[0].departure.iataCode;
    console.log(departureAirport);
     const arrivalAirport = fight.dictionaries.locations.LCY.cityCode;
    console.log(arrivalAirport);
    const Seat = fight.data[0].numberOfBookableSeats;
    console.log(Seat);
    const price = fight.data[0].price.total;
    console.log(price);
    const three = ()=>{
    return `
    <section class="text-white text-3xl font-extrabold mb-5 mt-10">Flight Result</section>

    <section class=" flex flex-col xl:flex-row mt-10 mb-10 bg-[#0e2525]/80 rounded-lg p-10">

    <section class="flex flex-col items-center gap-4 bg-[#0e2525]/80 p-20">
        <h1 class="font-bold">Departure</h1>
        <span>${departureAirport}</span>

    </section>

    <section class="flex flex-col items-center gap-4  bg-[#0e2525]/70 p-20">
        <h1 class="font-bold">Arrival</h1>
        <span>${arrivalAirport}</span>
    </section>


    <section class="flex flex-col items-center gap-4 bg-[#0e2525]/60 p-20">
        <h1 class="font-bold">Seats</h1>
        <span>${Seat}</span>
    </section>


    <section class="flex flex-col items-center gap-4  bg-[#0e2525]/40 p-20">
    <h1 class="font-bold">Price</h1>
    <span>${price}</span>
    </section>

    <button class=" bg-[#0e2525]/90 p-20 mt-10 xl:mt-0 xl:ml-10 text-white font-extrabold  hover:scale-110 transition-all ease-in delay-100">
        Book Now
    </button>

    </section>

    <section class="text-white text-2xl font-bold mt-20 mb-20 text-center xl:text-balance">Look for Hotels in the area <button onclick="getHotels2()"  id="searchH" class="bg-[#0e2525]/60 mt-0 mb-5 pb-5 pt-5 font-bold text-xl pr-10 pl-10 rounded-md  text-white hover:scale-110 transition-all ease-in delay-100">Search</button> </section>
`
    }
      document.getElementById('flights-container').innerHTML = three();
      document.querySelector('#search').innerText = 'Search';
      document.querySelector('#search').classList.remove('bg-red-600');
    
  })
}
// End of flight function for London



// Start of flight function for Paris
const getFlights3 = async () => {
  document.querySelector('#search').classList.add('bg-red-600');
  document.querySelector('#search').innerText = 'Searching';
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
          return response.json();
      }
      else {
          const Data = response.json();
          console.log('Keep pushing');
      }
  }).then(fight => {
    const departureAirport = fight.data[0].itineraries[0].segments[0].departure.iataCode;
    console.log(departureAirport);
     const arrivalAirport = fight.dictionaries.locations.CDG.cityCode;
    console.log(arrivalAirport);
    const Seat = fight.data[0].numberOfBookableSeats;
    console.log(Seat);
    const price = fight.data[0].price.total;
    console.log(price);
    const three = ()=>{
    return `
    <section class="text-white text-3xl font-extrabold mb-5 mt-10">Flight Result</section>

    <section class=" flex flex-col xl:flex-row mt-10 mb-10 bg-[#0e2525]/80 rounded-lg p-10">

    <section class="flex flex-col items-center gap-4 bg-[#0e2525]/80 p-20">
        <h1 class="font-bold">Departure</h1>
        <span>${departureAirport}</span>

    </section>

    <section class="flex flex-col items-center gap-4  bg-[#0e2525]/70 p-20">
        <h1 class="font-bold">Arrival</h1>
        <span>${arrivalAirport}</span>
    </section>


    <section class="flex flex-col items-center gap-4 bg-[#0e2525]/60 p-20">
        <h1 class="font-bold">Seats</h1>
        <span>${Seat}</span>
    </section>


    <section class="flex flex-col items-center gap-4  bg-[#0e2525]/40 p-20">
    <h1 class="font-bold">Price</h1>
    <span>${price}</span>
    </section>

    <button class=" bg-[#0e2525]/90 p-20 mt-10 xl:mt-0 xl:ml-10 text-white font-extrabold  hover:scale-110 transition-all ease-in delay-100">
        Book Now
    </button>

    </section>

    <section class="text-white text-2xl font-bold mt-20 mb-20 text-center xl:text-balance">Look for Hotels in the area <button onclick="getHotels3()"  id="searchH" class="bg-[#0e2525]/60 mt-0 mb-5 pb-5 pt-5 font-bold text-xl pr-10 pl-10 rounded-md  text-white hover:scale-110 transition-all ease-in delay-100">Search</button> </section>
`
    }
      document.getElementById('flights-container').innerHTML = three();
      document.querySelector('#search').innerText = 'Search';
      document.querySelector('#search').classList.remove('bg-red-600');
    
  })
}
// End of flight function for Paris




// Start of flight function for Berlin
const getFlights4 = async () => {
  document.querySelector('#search').classList.add('bg-red-600');
  document.querySelector('#search').innerText = 'Searching';
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
          return response.json();
      }
      else {
          const Data = response.json();
          console.log('Keep pushing');
      }
  }).then(fight => {
    const departureAirport = fight.data[0].itineraries[0].segments[0].departure.iataCode;
    console.log(departureAirport);
     const arrivalAirport = fight.dictionaries.locations.ZRH.cityCode;
    console.log(arrivalAirport);
    const Seat = fight.data[0].numberOfBookableSeats;
    console.log(Seat);
    const price = fight.data[0].price.total;
    console.log(price);
    const three = ()=>{
    return `
    <section class="text-white text-3xl font-extrabold mb-5 mt-10">Flight Result</section>

    <section class=" flex flex-col xl:flex-row mt-10 mb-10 bg-[#0e2525]/80 rounded-lg p-10">

    <section class="flex flex-col items-center gap-4 bg-[#0e2525]/80 p-20">
        <h1 class="font-bold">Departure</h1>
        <span>${departureAirport}</span>

    </section>

    <section class="flex flex-col items-center gap-4  bg-[#0e2525]/70 p-20">
        <h1 class="font-bold">Arrival</h1>
        <span>${arrivalAirport}</span>
    </section>


    <section class="flex flex-col items-center gap-4 bg-[#0e2525]/60 p-20">
        <h1 class="font-bold">Seats</h1>
        <span>${Seat}</span>
    </section>


    <section class="flex flex-col items-center gap-4  bg-[#0e2525]/40 p-20">
    <h1 class="font-bold">Price</h1>
    <span>${price}</span>
    </section>

    <button class=" bg-[#0e2525]/90 p-20 mt-10 xl:mt-0 xl:ml-10 text-white font-extrabold  hover:scale-110 transition-all ease-in delay-100">
        Book Now
    </button>

    </section>

    <section class="text-white text-2xl font-bold mt-20 mb-20 text-center xl:text-balance">Look for Hotels in the area <button onclick="getHotels4()"  id="searchH" class="bg-[#0e2525]/60 mt-0 mb-5 pb-5 pt-5 font-bold text-xl pr-10 pl-10 rounded-md  text-white hover:scale-110 transition-all ease-in delay-100">Search</button> </section>
`
    }
      document.getElementById('flights-container').innerHTML = three();
      document.querySelector('#search').innerText = 'Search';
      document.querySelector('#search').classList.remove('bg-red-600');
    
  })
}
// End of flight function for Berlin





// start of hotel function for Bangalore
const getHotels1 = async () =>{
  document.querySelector('#searchH').classList.add('bg-red-600');
  document.querySelector('#searchH').innerText = 'Searching';
  await fetch('https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=BLR',{
    method: "GET",
    headers: {
      "Authorization": "Bearer"+ " " + await getAccessToken(),
    },
  }).then(function (response) {
    if (response.ok) {
      console.log('Response is OK');
      console.log(response);
      return response.json();
    } else {
      console.log('Keep pushing');
    }
  }).then(hotel => {
    const hotelname1 = hotel.data[0].name;
    const hotelcity1 = hotel.data[0].address.cityName
    const hotelname2 = hotel.data[1].name;
    const hotelcity2 = hotel.data[1].address.cityName
    const hotelname3 = hotel.data[2].name;
    const hotelcity3 = hotel.data[2].address.cityName
    console.log(hotelname1);
    console.log(hotelcity1);
    console.log(hotelname2);
    console.log(hotelcity2);
    console.log(hotelname3);
    console.log(hotelcity3);
    const hotels = ()=>{
      return`

    <section class="text-white text-lg xl:text-3xl font-extrabold mb-5 mt-10">Hotel Results</section>
    <section class="flex flex-col xl:flex-row justify-between gap-10 mt-10 mb-20  items-center">
       <section class="flex flex-col items-center gap-4 bg-[#0e2525]/80 p-20 text-white rounded-lg">
        <h1 class="font-bold">${hotelname1}</h1>
        <span>${hotelcity1}</span>
        <button class="mt-10 pr-10 pl-10 pt-5 pb-5 bg-[#0e2525]/80 rounded-md hover:scale-110 transition-all ease-in delay-100">Book</button>
    </section>

    <section class="flex flex-col items-center gap-4 bg-[#0e2525]/80 p-20 text-white rounded-lg">
        <h1 class="font-bold">${hotelname2}</h1>
        <span>${hotelcity2}</span>
        <button class="mt-10 pr-10 pl-10 pt-5 pb-5 bg-[#0e2525]/80 rounded-md hover:scale-110 transition-all ease-in delay-100">Book</button>
    </section>

      <section class="flex flex-col items-center gap-4 bg-[#0e2525]/80 p-20 text-white rounded-lg">
        <h1 class="font-bold">${hotelname3}</h1>
        <span>${hotelcity3}</span>
        <button class="mt-10 pr-10 pl-10 pt-5 pb-5 bg-[#0e2525]/80 rounded-md hover:scale-110 transition-all ease-in delay-100">Book</button>
    </section>
    </section>`
    }
     document.getElementById('hotels-container').innerHTML = hotels();
  })
  document.querySelector('#searchH').innerText = 'Search';
  document.querySelector('#searchH').classList.remove('bg-red-600');
}
// End of hotel function for Bangalore




// start of hotel function for London
const getHotels2 = async () =>{
  document.querySelector('#searchH').classList.add('bg-red-600');
  document.querySelector('#searchH').innerText = 'Searching';
  await fetch('https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=LON',{
    method: "GET",
    headers: {
      "Authorization": "Bearer"+ " " + await getAccessToken(),
    },
  }).then(function (response) {
    if (response.ok) {
      console.log('Response is OK');
      console.log(response);
      return response.json();
    } else {
      console.log('Keep pushing');
    }
  }).then(hotel => {
    const hotelname1 = hotel.data[0].name;
    const hotelcity1 = hotel.data[0].address.cityName
    const hotelname2 = hotel.data[1].name;
    const hotelcity2 = hotel.data[1].address.cityName
    const hotelname3 = hotel.data[2].name;
    const hotelcity3 = hotel.data[2].address.cityName
    console.log(hotelname1);
    console.log(hotelcity1);
    console.log(hotelname2);
    console.log(hotelcity2);
    console.log(hotelname3);
    console.log(hotelcity3);
    const hotels = ()=>{
      return`

    <section class="text-white text-lg xl:text-3xl font-extrabold mb-5 mt-10">Hotel Results</section>
    <section class="flex flex-col xl:flex-row justify-between gap-10 mt-10 mb-20  items-center">
       <section class="flex flex-col items-center gap-4 bg-[#0e2525]/80 p-20 text-white rounded-lg">
        <h1 class="font-bold">${hotelname1}</h1>
        <span>${hotelcity1}</span>
        <button class="mt-10 pr-10 pl-10 pt-5 pb-5 bg-[#0e2525]/80 rounded-md hover:scale-110 transition-all ease-in delay-100">Book</button>
    </section>

    <section class="flex flex-col items-center gap-4 bg-[#0e2525]/80 p-20 text-white rounded-lg">
        <h1 class="font-bold">${hotelname2}</h1>
        <span>${hotelcity2}</span>
        <button class="mt-10 pr-10 pl-10 pt-5 pb-5 bg-[#0e2525]/80 rounded-md hover:scale-110 transition-all ease-in delay-100">Book</button>
    </section>

      <section class="flex flex-col items-center gap-4 bg-[#0e2525]/80 p-20 text-white rounded-lg">
        <h1 class="font-bold">${hotelname3}</h1>
        <span>${hotelcity3}</span>
        <button class="mt-10 pr-10 pl-10 pt-5 pb-5 bg-[#0e2525]/80 rounded-md hover:scale-110 transition-all ease-in delay-100">Book</button>
    </section>
    </section>`
    }
     document.getElementById('hotels-container').innerHTML = hotels();
  })
  document.querySelector('#searchH').innerText = 'Search';
  document.querySelector('#searchH').classList.remove('bg-red-600');
}
// End of hotel function for London



// start of hotel function for Paris
const getHotels3 = async () =>{
  document.querySelector('#searchH').classList.add('bg-red-600');
  document.querySelector('#searchH').innerText = 'Searching';
  await fetch('https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=PAR',{
    method: "GET",
    headers: {
      "Authorization": "Bearer"+ " " + await getAccessToken(),
    },
  }).then(function (response) {
    if (response.ok) {
      console.log('Response is OK');
      console.log(response);
      return response.json();
    } else {
      console.log('Keep pushing');
    }
  }).then(hotel => {
    const hotelname1 = hotel.data[0].name;
    const hotelcity1 = hotel.data[0].address.cityName
    const hotelname2 = hotel.data[1].name;
    const hotelcity2 = hotel.data[1].address.cityName
    const hotelname3 = hotel.data[2].name;
    const hotelcity3 = hotel.data[2].address.cityName
    console.log(hotelname1);
    console.log(hotelcity1);
    console.log(hotelname2);
    console.log(hotelcity2);
    console.log(hotelname3);
    console.log(hotelcity3);
    const hotels = ()=>{
      return`

    <section class="text-white text-md xl:text-3xl font-extrabold mb-5 mt-10">Hotel Results</section>
    <section class="flex flex-col xl:flex-row justify-between gap-10 mt-10 mb-20  items-center">
       <section class="flex flex-col items-center gap-4 bg-[#0e2525]/80 p-20 text-white rounded-lg">
        <h1 class="font-bold">${hotelname1}</h1>
        <span>${hotelcity1}</span>
        <button class="mt-10 pr-10 pl-10 pt-5 pb-5 bg-[#0e2525]/80 rounded-md hover:scale-110 transition-all ease-in delay-100">Book</button>
    </section>

    <section class="flex flex-col items-center gap-4 bg-[#0e2525]/80 p-20 text-white rounded-lg">
        <h1 class="font-bold">${hotelname2}</h1>
        <span>${hotelcity2}</span>
        <button class="mt-10 pr-10 pl-10 pt-5 pb-5 bg-[#0e2525]/80 rounded-md hover:scale-110 transition-all ease-in delay-100">Book</button>
    </section>

      <section class="flex flex-col items-center gap-4 bg-[#0e2525]/80 p-20 text-white rounded-lg">
        <h1 class="font-bold">${hotelname3}</h1>
        <span>${hotelcity3}</span>
        <button class="mt-10 pr-10 pl-10 pt-5 pb-5 bg-[#0e2525]/80 rounded-md hover:scale-110 transition-all ease-in delay-100">Book</button>
    </section>
    </section>`
    }
     document.getElementById('hotels-container').innerHTML = hotels();
  })
  document.querySelector('#searchH').innerText = 'Search';
  document.querySelector('#searchH').classList.remove('bg-red-600');
}
// End of hotel function for Paris



// start of hotel function for Berlin
const getHotels4 = async () =>{
  document.querySelector('#searchH').classList.add('bg-red-600');
  document.querySelector('#searchH').innerText = 'Searching';
  await fetch('https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=BER',{
    method: "GET",
    headers: {
      "Authorization": "Bearer"+ " " + await getAccessToken(),
    },
  }).then(function (response) {
    if (response.ok) {
      console.log('Response is OK');
      console.log(response);
      return response.json();
    } else {
      console.log('Keep pushing');
    }
  }).then(hotel => {
    const hotelname1 = hotel.data[0].name;
    const hotelcity1 = hotel.data[0].address.cityName
    const hotelname2 = hotel.data[1].name;
    const hotelcity2 = hotel.data[1].address.cityName
    const hotelname3 = hotel.data[2].name;
    const hotelcity3 = hotel.data[2].address.cityName
    console.log(hotelname1);
    console.log(hotelcity1);
    console.log(hotelname2);
    console.log(hotelcity2);
    console.log(hotelname3);
    console.log(hotelcity3);
    const hotels = ()=>{
      return`

    <section class="text-white text-md xl:text-3xl font-extrabold mb-5 mt-10">Hotel Results</section>
    <section class="flex flex-row justify-between gap-10 mt-10 mb-20  items-center">
       <section class="flex flex-col xl:flex-col items-center gap-4 bg-[#0e2525]/80 p-20 text-white rounded-lg">
        <h1 class="font-bold">${hotelname1}</h1>
        <span>${hotelcity1}</span>
        <button class="mt-10 pr-10 pl-10 pt-5 pb-5 bg-[#0e2525]/80 rounded-md hover:scale-110 transition-all ease-in delay-100">Book</button>
    </section>

    <section class="flex flex-col items-center gap-4 bg-[#0e2525]/80 p-20 text-white rounded-lg">
        <h1 class="font-bold">${hotelname2}</h1>
        <span>${hotelcity2}</span>
        <button class="mt-10 pr-10 pl-10 pt-5 pb-5 bg-[#0e2525]/80 rounded-md hover:scale-110 transition-all ease-in delay-100">Book</button>
    </section>

      <section class="flex flex-col items-center gap-4 bg-[#0e2525]/80 p-20 text-white rounded-lg">
        <h1 class="font-bold">${hotelname3}</h1>
        <span>${hotelcity3}</span>
        <button class="mt-10 pr-10 pl-10 pt-5 pb-5 bg-[#0e2525]/80 rounded-md hover:scale-110 transition-all ease-in delay-100">Book</button>
    </section>
    </section>`
    }
     document.getElementById('hotels-container').innerHTML = hotels();
  })
  document.querySelector('#searchH').innerText = 'Search';
  document.querySelector('#searchH').classList.remove('bg-red-600');
}
// End of hotel function for Berlin










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