// API: Application Programming Interface

// Calling an api allows you to fetch data from external sources and integrate it into your web applications.

// HTTP: HyperText Transfer Protocols
// We are going to use fetch API -> It is a promise baseed API that makes it easy to send HTTP requests and
// handle responses in an asynchronous way.

// We will define the URL.
// const output = document.getElementById("output");
const url = 'https://catfact.ninja/fact';

// fetch(url).then(response => {
//     if(!response.ok){
//         throw new Error('Response was not ok.')
//     }
//     return response.json();
// }).then(data => {
//     output.innerHTML = JSON.stringify(data.fact);
// }).
// catch(error => console.log(error));

// We defined the url => that we want to call.
// we used fetch to make a GET request to the API url (GET is used to request data from a specified resource.)
// Fetch will return a promise
// .then() is handling the asynchronous response from server.
// response.ok is ued to ensure that the response is valid.
// json data ko parse kr rhe h using response.json().
// data ko log krdere h => resolve
// error derhe h => reject.

async function getApiData(){
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

getApiData().then(data => console.log(data));


