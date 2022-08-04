// Write your code here!

// Remove  DOM 'main' node 
const main = document.getElementById("main");
main.remove();

// Create newHeader variable pointing to 'h1'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

// Add the element as a child
document.body.appendChild(newHeader);

// Add content to the node
newHeader.innerHTML = "Evans is the champion";