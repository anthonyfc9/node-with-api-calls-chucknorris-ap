
window.onload = function() {
  console.log('script loaded');

  function jokeFetch(){ 
    let jokeFetched= document.getElementById('jokeFetched')

    fetch('https://api.chucknorris.io/jokes/random')
    .then(response =>{
      return response.json();
    })
    .then(data=>{
      console.log("data: ", data);
      jokeFetched.innerHTML = data.value;
    })
    .catch(err => console.error("fetch error: ", err));
  }
  document.getElementById('getJoke').addEventListener('click', jokeFetch)
    // the following steps should be completed on the /jokes/new page

    // 1. New Joke Button
    // listener for a new joke button
    // when a user clicks the new joke button call a function called 'getJoke'
    // make sure you create a fetch call to GET https://api.chucknorris.io/jokes/random
    // append the joke to the dom
    // after the joke is on the screen, the user should have the option to save the joke to the database or request a new joke

    // 2. Save Joke Button
    // create a save joke button
    // if the user wants to save a joke to the database by clicking the save joke butto, run a function called saveJoke
    // it should make a POST request to /api/jokes and save the joke to the database.
    // you may need to set up the controller to handle this request.
    // after a successful save, the user should be redirected to the new joke's show page

function saveJoke(){
  const joketext = document.getElementById('jokeFetched').innerHTML;

  fetch('/api/jokes',{
    method:'post',
    body:JSON.stringify({text:joketext}),
    headers:{'Content-Type': 'application/json'}
  })
  .then(res =>res.json())
  .then(data => window.location.replace('/jokes/'+ data.id))
  .catch(err => console.error("error: ", err));
}
     
document.getElementById('saveJoke').addEventListener('click',saveJoke)


}
