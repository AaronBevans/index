/*
Create 4 variables and assign them to their respective elements: setupDiv, 
punchlinDiv, punchlineBtn, newJokeBtn
*/
const setupDiv = document.getElementById('setup')
const punchLineDiv = document.getElementById('punchline')
const punchLineBtn = document.getElementById('punchlineBtn')
const newJokeBtn = document.getElementById('newJokeBtn')
/*
a.Create a global variable called punchline which will store the current 
punchline and will be updated with each new joke

b.Assign the current jokes punchline to the punchline variable.
*/
let jokesPunchLine;


/*
Setup an async function called getJoke
Create a variable called jokeRequest that fetches a joke from 
https://official-joke-api.appspot.com/jokes/programming/random
create a variable called joke that consumes the json data
*/


/*
Add an event listener for the punchline button. 
When clicked it should call a function called getPunchline

Create the getPunchline function. This function should: 
    Insert the punchline into the punchlineDiv
    Add the class "bubble" to the punchlineDiv
    Toggle the "hidden" class on both buttons.
*/


//element event listener invokes getPunchline() function
punchLineBtn.addEventListener('click', getPunchline)

/*
Add an event listener for the new joke button. 
When clicked it should call the getJoke function
*/

newJokeBtn.addEventListener('click', getJoke)

function getPunchline(){
    punchLineDiv.innerHTML = jokesPunchLine
    punchLineDiv.classList.add('bubble')
    punchLineBtn.classList.toggle('hidden')
    newJokeBtn.classList.toggle('hidden')
}



async function getJoke(){
    const request = await fetch
    ('https://official-joke-api.appspot.com/jokes/programming/random')
    const responseData = await request.json()

/*
Get the setup key-value pair, index element from the joke array object
and insert it into the setupDiv element
*/

//function acts on the element to display data.
    setupDiv.innerHTML = responseData[0].setup

/*
button element will invoke function with a 'click' 
when current joke data is stored so it ca be displayed.
*/
    jokesPunchLine = responseData[0].punchline

    
 /*
  Clear the punchline div and remove 
  the "bubble" class from the punchline div
*/
    punchLineDiv.innerHTML = ''//punchline div is now cleared.
    punchLineDiv.classList.remove('bubble')

    punchLineBtn.classList.toggle('hidden')
    newJokeBtn.classList.toggle('hidden')



}
getJoke()

