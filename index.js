// Remove the main#main node
const mainNode = document.querySelector('main#main');
mainNode.remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id of the new <h1> element to 'victory'
newHeader.id = 'victory';

// Set the inner text of the new <h1> element to 'YOUR-NAME is the champion'
newHeader.textContent = 'Shanice is the champion'; // Replaced YOUR-NAME with  name

// Append the new <h1> element to the document body or any other appropriate location
document.body.appendChild(newHeader);