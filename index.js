// Step 1: Remove the <main id="main">
const main = document.getElementById('main');
main.remove();

// Step 2: Create a new <h1> element and assign to variable 'newHeader'
const newHeader = document.createElement('h1');

// Step 3: Set the ID of the new <h1> to 'victory'
newHeader.id = 'victory';

// Step 4: Set its text to "Rubil is the champion"
newHeader.textContent = 'Rubil is the champion';

// Step 5 (optional): Add the new header to the document body
document.body.appendChild(newHeader);
