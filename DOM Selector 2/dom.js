const heading=document.querySelector('h1') //if there are more h1 tags then it will only give first Occurence of h1 tag
console.log(heading)

//to get all occurence if h1 element use 'querSelectorAll()'
console.log(document.querySelectorAll('h1'))
//this will return DOM node inside an Array


//you can also pass class and id inisde the parameter of querySelector

// console.log(document.querySelector('.Second'))

// console.log(document.querySelector('#para'))

// Specific method to get elements by only ID:

const para=document.getElementById('para');
console.log(para)


// manipulating style of h1 through JS
heading.style.color='red'
para.style.backgroundColor='grey';

const headingClass=document.getElementsByClassName('first')
console.log(headingClass)