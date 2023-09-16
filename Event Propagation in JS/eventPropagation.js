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