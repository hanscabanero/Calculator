document.addEventListener("DOMContentLoaded", function () {
    // Get the display element
    var display = document.querySelector('.display');

    // Get all the buttons
    var buttons = document.querySelectorAll('.btn');

    // Create a variable to store clicked data value
    var clickedDataValue = '';

    // Add click event listener to each button
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Get the text content of the clicked button
            var buttonText = button.textContent;

            // Update the display with the clicked button's text content
            updateDisplay(buttonText);

            // Store the clicked data value
            clickedDataValue = button.getAttribute('data-value') || '';
        });
    });
     // Function to update the display with the provided text
     function updateDisplay(text) {
        // Check if the display is currently showing "0" and replace it with the new text
        if (display.textContent === '0') {
            display.textContent = text;
        } else {
            clickedDataValue = display.textContent += text;
            console.log(clickedDataValue);
        }
    }
});

//init variables
let num = 0;
let num2 = 0;
let operator = "+";



function sum(num,num2)
{
    return num1 + num2;
}
function difference(num,num2)
{
    return num1 - num2;
}
function product(num,num2)
{
    return num1 * num2;
}
function quotient(num,num2)
{
    //returns quotient rounded to 2 digits
    return Math.round(num1 / num2 * 100) / 100;
}
function operate(operator, num, num2)
{

}

