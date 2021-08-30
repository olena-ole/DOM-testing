'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector(".heart");
    
console.dir(box);
/* box.style.backgroundColor = 'blue';
box.style.width = '500px'; //<div class="box" id="box" style="background-color: blue; width: 500px;"></div> */
btns[1].style.borderRadius = '100%'; //button No.2 becomes an ellipse

//using cssText
/* box.style.cssText = 'background-color: green; width: 500px'; */
let num = 300;
box.style.cssText = `background-color: green; width: ${num}px`;

/* circles.style.backgroundColor = 'red'; //ERROR nothing changes (circles - pseudo array) */
circles[0].style.backgroundColor = 'red';
circles[1].style.backgroundColor = 'green';

//Changing style for multiple elements
//Using loops
/* for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'yellow';
} */

//Using forEach();
hearts.forEach(element => {
    element.style.backgroundColor = "yellow";
});

//Creating Element 
const div = document.createElement('div'); //exists in script and is not displayed so far

//Creating text node (rarely used)
const text = document.createTextNode("I've been here"); //also exists in script and is not displayed so far

//Styling created div using classList
div.classList.add('black');

//Displaying elements created in script
//Modern methods
document.body.append(div); //element appeared AT THE END of body
/* document.querySelector('.wrapper').append(div); //element appeared AT THE END of wrapper */
/* wrapper.prepend(div); //element appeared AT THE BEGINNING of wrapper */
/* hearts[1].before(div); //element appeared right before heart No.2 */
/* hearts[1].after(div); //element appeared right after heart No.2 */

//Deleting elements
/* circles[0].remove(); //the first circle deleted */
/* circles.remove(); //error, circles - pdeuso array */

//Replacing elements
/* hearts[0].replaceWith(circles[0]); //heart was replaced by circle */

//Obsolete methods (in old code)
/* wrapper.appendChild(div); //div appears in the end of body */
/* wrapper.insertBefore(div, hearts[1]); //div appears before heart No.2 */
/* wrapper.removeChild(hearts[2]); //heart no.3 disappears */
/* wrapper.replaceChild(circles[0], hearts[0]); //circle no.1 is placed instead of heart no.1 */

//Edting elements' inner HTML
//1 Never used with iser's input for security reasons
/* div.innerHTML = 'Hello World';*/
div.innerHTML = "<h1>Hello</h1>"; 

//2 Used with user's input for security reasons
//div.textContent = "Hello World"; //works with strings only

//Inserting code before/after certain tags
div.insertAdjacentHTML('afterend', '<h4>Sup</h4>'); //'beforeend', 'afterend', 'afterbegin'