console.log('Starting')

setTimeout(() => {
    console.log('Wait for 2 secs !')
}, 2000)

console.log('Stopping')

// In synchronous programming model, one line runs after the other
// regardless of how much time each line takes to execute

// when we execute this we get the following o/p:
// Starting
// Stopping
// Wait for 2 secs ! (this comes after 2 secs)

console.log('Starting')

setTimeout(() => {
    console.log('Wait for 2 secs !')
}, 2000)

setTimeout(() => {
    console.log('Wait for 0 secs !')
}, 0)

console.log('Stopping')

// o/p for the below :
// Starting
// Stopping
// Wait for 0 secs !
// Wait for 2 secs ! (this comes after 2 secs)

// Call Stack is a simple data structure provided by the JS V* engine 
// The job of the call stack is to track the execution of our program
// and it does by keeping track of all the functions that are cutrrently running 


// lines of code : (Synchronous example)
// const x = 1
// const y = x + 2
// console.log('Sum is ' +y)

// In the call stack: first main() gets added
// then we create a constant x with value 1 
// then we create a constant y with value 3
// for the console.log(), this is a function, and whenever we run a function
// it gets added to the call stack

// noe the call stack has the following:
// log('Sum is 3')
// main()

// so in console we first see Sum is 3 printed 
// then it gets removed from the call stack 

// now the call stack contains :
// main()

// now since we have moved to the end of the script so main() is also popped out
// of the call stack

// lines of code: (Synchronous example)
// const listLocations = (locations) => {
//  location.forEach((location) => {
//  console.log(location)
//  })
// }
// const myLocations = ['Philly', 'NYC']
// listLocations(myLocations)

// Call Stack: main()

// listLocations is a variable creating the function. Since we are not calling
// the function, so it doesnt apper in the call stack
// myLocation is an array
// listLocations(myLocations) is a function call so gets added to the call stack

// call Stack:
// listLocations(myLocations)
// main()

// Updated Call Stack: 
// forEach(...)
// listLocations(myLocations)
// main()

// Updated Call Stack: 
// anonymous('Philly')
// forEach(...)
// listLocations(myLocations)
// main()

// Updated Call Stack: 
// console.log('Philly')
// anonymous('Philly')
// forEach(...)
// listLocations(myLocations)
// main()

// Philly will be printd in the terminal

// Updated Call Stack: 
// anonymous('Philly')
// forEach(...)
// listLocations(myLocations)
// main()

// Updated Call Stack: 
// forEach(...)
// listLocations(myLocations)
// main()

// Updated Call Stack: 
// anonymous('NYC')
// forEach(...)
// listLocations(myLocations)
// main()

// Updated Call Stack: 
// console.log('NYC')
// anonymous('NYC')
// forEach(...)
// listLocations(myLocations)
// main()

// Then NYC gets printed in the terminal

// Updated Call Stack: 
// anonymous('NYC')
// forEach(...)
// listLocations(myLocations)
// main()

// Updated Call Stack: 
// forEach(...)
// listLocations(myLocations)
// main()

// Updated Call Stack:
// listLocations(myLocations)
// main()

// Updated Call Stack:
// main()

// Updated Call Stack: (Empty)

// Lines of code: (Asynchronous example)
// SInce it is Asynchronous, Call Stack, Event Loop, Callback Queue, Node API
// will be running in parallel

// console.log('Starting')
// setTimeout(() => {
//     console.log('Wait for 2 secs !')
// }, 2000)
// setTimeout(() => {
//     console.log('Wait for 0 secs !')
// }, 0)
// console.log('Stopping')

// Updated Call Stack:
// main()

// Updated Call Stack:
// console.log('Starting')
// main()

// Starting gets printed in the terminal

// Updated Call Stack:
// main()

// Updated Call Stack:
// setTimeout(..., 2000) - JS neither V8 has any impelentation of setTimeout, but Nodejs
// has the implementation of this function using C++
// main()

// When we call setTimeout it is registering an event with the Node APIs,
// and that is an event callback pair, where the event is to wait 2 sec and 
// callback is the function to run

// Updated Call Stack:
// main()

// Updated Node APIs
// setTimeout( 2 sec ) // here the 2 sec timer starts, and others run in parallel

// JS is single threaded, only one thing can run at a time
// and the call Stack enforces that
// But, nodeJs uses other threads in C++ behind the scenes to manage the events
// thats what allows to run the other event while waiting for the 2 secs.

// Updated Call Stack:
// setTimeout(..., 0)
// main()

// Updated Call Stack:
// main()

// Updated Node APIs:
// setTimeout( 2 sec )
// setTimeout( 0 sec )

// Now the 0 sec is up. So the callback needs to be executed

// the job of the Callback Queue is to mantain a list of all of the callback functions
// that are ready to get executed

// Updated Callback Queue:
// Callback( 0 sec )
// Now this callback is ready to be executed  but it has to be pushed to the Call Stack
// to run. This is where the event loop comes into play.
// The event loop will add the callback functions when the call Stack is empty, otherwise
// it will wait

// Updated Call Stack:
// console.log('Finish')
// main()

// Finish gets printed in the terminal

// Updated Call Stack:
// main() - In sync calls, end of main() indicates the end of the program
// but here its not the case

// Updated Call Stack:
// its empty now.. 

// Updated Call Stack:
// callback( 0 sec )

// Updated Callback Queue:
// is empty now.. 

// Updated Call Stack:
// console.log('Wait for 0 secs')
// callback( 0 sec )

// Wait for 0 secs is printed in the terminal

// Updated Call Stack:
// callback( 0 sec )

// Updated Call Stack:
// blank as of now

// None of our asynchronous functions are going to run before end of main()

// Now 2 secs are done , its callback is pushed on to the Callback Queue

// Updated Callback Queue:
// Callback( 2 sec )

// Event Loop pushes the callback() to the Call Stack 

// Updated Call Stack:
// callback( 2 sec )

// Updated Call Stack:
// console.log('Wait for 2 secs')
// callback( 2 sec )

// Wait for 2 sec gets printed in the terminal

// Updated Call Stack:
// callback( 0 sec )

// Updated Call Stack:
// its blank now and the program is complete



// Open weatherstack.com
// sign up for free and then we will get a API Access key
// 00fb213314d4f0b73ca9a36944be04c8
// this is the request that we made:
// http://api.weatherstack.com/current?
// access_key=00fb213314d4f0b73ca9a36944be04c8&query=12.9716%C2%B0%20N,77.5946%C2%B0%20E

// for now we will use a single npm module to make http request
// its called request


const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=00fb213314d4f0b73ca9a36944be04c8&query=12.9716%C2%B0%20N,77.5946%C2%B0%20E&units=f'
// request(url, (error, response, body) => {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

request({ url: url, json: true }, (error, response) => {
    // if we are passing json = true then we dont need to parse this as below
    // const data = JSON.parse(response.body)
    const data = response.body
    console.log('-----lets look at the current property---------')
    if(error) {
        console.log('Unable to connect to weather app')
    } else if(response.body.error) {
        // break the url and check
        console.log(response.body.error.info)
    } else {
        console.log(data.current.weather_descriptions[0] +'. It is currently ' +data.current.temperature + ' degrees and feels like ' +data.current.feelslike + ' degress')   
    }
});

// Geocoding 
// Address -> Lat/Long -> Weather

// Open mapbox.com
// sign in to it 
// click on access token to find the free public token as below:
// pk.eyJ1IjoiYW5pcnVwIiwiYSI6ImNrNGw4dTE0YTFvenozbXF4dWNlYmhyeGkifQ.PuThfcK3VVJ_wBFqNjnjyQ

// Print the latitude / longitude for India

// Los%20Angeles
const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5pcnVwIiwiYSI6ImNrNGw4dTE0YTFvenozbXF4dWNlYmhyeGkifQ.PuThfcK3VVJ_wBFqNjnjyQ&limit=1'
request({ url: geocodeUrl, json: true }, (error, response) => {
    console.log('--------mapbox.com--------')
    if(error) {
        console.log('Unable to reach the map box sevice !')
    } else if(response.body.features.length === 0) {
        console.log('Unable to find any result for the request !')
    } else {
        const data = response.body.features[0].center
        console.log('Latitude: '+response.body.features[0].center[1] + ', Longitude: ' +response.body.features[0].center[0])
    }
});

// Handle error for geocoding request
// Set up an error handler for low-level errors
// Set up error handler for no matching results


// Implementation callback function for geocode

// use encodeURIComponent() whenever we pass something to a url

// We have created a new folder called utils and have moved the 
// newly created geocode function declaration to over there
const geocode = require('./utils/geocode')
geocode('India', (error, response) => {
    console.log('--------mapbox.com callback--------')
    if(error) {
        console.log('Unable to reach the map box sevice !')
    } else if(response.body.features.length === 0) {
        console.log('Unable to find any result for the request !')
    } else {
        console.log('Latitude: '+response.body.features[0].center[1] + ', Longitude: ' +response.body.features[0].center[0])
        console.log('Location is: '+ response.body.features[0].place_name)
    }
})

