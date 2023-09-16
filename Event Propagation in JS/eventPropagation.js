document.getElementById('h1').addEventListener('click',function(){
    console.log('INNER HEADING CLICKED')
})
// The above will print the inner heading clicked when clicked on the inner heading

//Now the bubbling concept

document.getElementById('innerdiv').addEventListener('click',()=>{
    console.log('Inner Div Clicked')
})

//Now here what happens when i click Inner heading also the it console the inner heading clicked as well as 'Inner Div Clicked' though i have not clicked inner div
//This is called bubbling the event will also run the parent event also -->in this case the parent is inner div of inner heading so inner div event is executed

document.getElementsByClassName('outerDiv')[0].addEventListener('click',function(){
    console.log('Outer Div Clicked')
})

document.body.addEventListener('click',()=>{
    console.log('Body  Clicked')
})

//Note: IF you clicked inner div then inner div and its parent will be consoled i.e. their events will run
//And if outer div is clicked then outer div events and and its parent body will be run if addevent listener is there

//So when we click Inner heading the event is triggered the click event and it will give:
/*
INNER HEADING CLICKED
eventPropagation.js:9 Inner Div Clicked
eventPropagation.js:16 Outer Div Clicked
eventPropagation.js:20 Body  Clicked
*/