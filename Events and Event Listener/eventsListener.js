console.log("HEllo")
const h2=document.getElementsByClassName('heading2');
// const h2=document.querySelectorAll('h2').innerHTML;
console.log(h2)
console.log(h2[1])
const indexONe=[h2[0],h2[1]]


//Note getElements with ID will the full html elements and a single element because ID are unique

const para=document.getElementById('para').innerHTML  //to get the content inside the element tag
console.log(para)

const paragraph=document.getElementById('para').textContent  //to get the content inside the element tag
console.log(paragraph)

indexONe[1].addEventListener('click',toAlert)

function toAlert(){
    alert('You have entered heading 2')
}