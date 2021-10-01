/*
* Exercise 1
*
*/

//the box
const box = document.getElementById('color-block');
/*
* Then write a function that changes the text and the color inside the div
*
*/
box_color = box.getAttribute("id");
color_name = document.getElementById("color_name")
console.log(color_name);


function changeColor(){

    let click_count = 0;
    box.addEventListener('click', () => {
        click_count++;
        console.log(click_count)

        if(click_count % 2 === 1){
            //change the background color using JS
            box.setAttribute("style", "background-color: pink")
            console.log(click_count)
            color_name.textContent = "#FFC0CB"
        
            //Change the text of the color  using the span id color-name


        }
    
        else {
            //change the background color using JS
            box.removeAttribute("style")
            color_name.textContent = "#F08080"
            //Change the text of the color using the span id color-name
    
    
        }})}
    
    //Write a condition determine what color it should be changed to
   

changeColor()





/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
convert = document.getElementById('convertbtn');
cels_value = document.getElementById('c-output');
/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(x){
    //Calculate the temperature here
    let cels = (5/9)*(x - 32);
    //Send the calculated temperature to HTML
    //console.log(cels);
    return cels;
}
console.log(convertTemp(355));

convert.addEventListener('click' , () => {
    fahrenheit = document.getElementById('f-input').value; 
    cels_value.textContent =convertTemp(fahrenheit);
})
