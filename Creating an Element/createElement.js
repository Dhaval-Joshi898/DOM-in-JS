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