const div=document.createElement('div')

const body=document.body   //used to access the body element of html
body.appendChild(div)

const paragraph=document.createElement('p')   //created Element P inside JS
paragraph.textContent='THis is a paragraph wriiten inside JS'   //added cpntent inside the p tag
div.appendChild(paragraph)            //added p  inside the div

//Now creating button through JS which will display in webpage

const btn=document.createElement('button')
btn.textContent='Click Here';
div.appendChild(btn)

const heading1=document.createElement('h1')
heading1.textContent='This is written inside h1 through JS'
div.append(heading1,'THis is wriiten in append method (as second argument) in JS for appending more than one arguments')