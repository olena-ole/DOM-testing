'use strict';

const box = document.getElementById('box');
console.log(box); //<div class="box" id="box"></div>

const btns = document.getElementsByTagName('button');
console.log(btns); //HTMLCollection(5) [button, button, button, button, button] - pseudo array
console.log(btns[1]); //<button>2</button>
console.log(btns[0]); //<button>1</button>

const btn2 = document.getElementsByTagName('button')[1];
console.log(btn2); //<button>2</button>

const circles = document.getElementsByClassName('circle');
console.log(circles); //HTMLCollection(3) [div.circle, div.circle, div.circle]

//Modern ways
const hearts = document.querySelectorAll('.heart');

hearts.forEach(element => {
    console.log(element);
}); // returns all elements with class "heart", here - 3 elements <div class="heart"></div>

const oneHeart = document.querySelector(".heart");
console.log(oneHeart); // <div class="heart"></div>