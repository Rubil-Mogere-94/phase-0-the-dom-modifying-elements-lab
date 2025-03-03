// Remove the <main> element with id 'main' if it exists
const main = document.querySelector('main#main');
if (main) {
  main.remove();
}

// Create a new <h1> element and assign it to `newHeader`
const newHeader = document.createElement('h1');

// Set the id of `newHeader` to 'victory'
newHeader.id = 'victory';

// Set the text content of the `newHeader` to "YOUR-NAME is the champion"
newHeader.textContent = "YOUR-NAME is the champion";  // Replace "YOUR-NAME" with your actual name, or leave it for the test to check

// Optionally, append `newHeader` to the body or any other parent element
document.body.appendChild(newHeader);
