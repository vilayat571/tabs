import data from './data.json' assert{ type: "json"}

var body = document.querySelector('body');
body.style.background = '#f1f5f8';
body.firstElementChild.textContent = 'About';
var h1 = document.querySelector('h1');
h1.style.color = '#102a42';
h1.style.fontWeight = 'bold';
h1.style.textAlign = 'center';
h1.style.position = 'relative';
h1.style.top = '80px';
h1.style.fontSize = '40px';

body.children[1].textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aperiam!';
var p = document.querySelector("p").classList.add('text');
document.querySelector("p").style.position = 'relative';
document.querySelector("p").style.top = '80px';

var footer = document.getElementById('footer');
footer.style.display = 'flex';
footer.style.position = 'relative';
footer.style.top = '120px';


var img = document.querySelector('img');
img.setAttribute('src','https://vannilla-js-basic-project-11-tabs.netlify.app/hero-bcg.jpeg');
img.style.width = '570px';
img.style.height = '320px';
img.style.borderRadius = '20px';


var buttons = document.querySelector('.buttons');
let foot = document.getElementById('footer');
foot.style.width = '90%';

for (let i = 0; i < buttons.children.length; i++) {
    buttons.children[i].style.border = 'none';
    buttons.children[i].style.outline = 'none';
    buttons.children[i].style.cursor = 'pointer';
};

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var content = document.querySelector('.content');

btn1.addEventListener('click',(() => {
    content.innerHTML = `
    <h1>${data.data[0].title}</h1>
    <p>${data.data[0].body}</p>`
})());

btn1.addEventListener('click',() => {
    content.innerHTML = `
    <h1>${data.data[0].title}</h1>
    <p>${data.data[0].body}</p>`
});

btn2.addEventListener('click',() => {
    content.innerHTML = `
    <h1>${data.data[1].title}</h1>
    <p>${data.data[1].body}</p>`
});

btn3.addEventListener('click',() => {
    content.innerHTML = `
    <h1>${data.data[2].title}</h1>
    <p>${data.data[2].body}</p>`
});