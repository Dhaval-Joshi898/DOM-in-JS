const h1 = document.querySelector('h1')
h1.addEventListener('click', displayAlert)

function displayAlert() {
    alert('CLicked on H1')
}

function clickPara(){
    let value=confirm('You have only clicked');
    console.log('have you clicked?:',value)
}

const para2=document.getElementById('para2')



var paragraph2=()=>{
    let value2=confirm('You have only clicked to second paragraph');
    console.log('have you clicked?:',value2)
}
para2.addEventListener('click',paragraph2)