// Write your code here!

// Remove  DOM 'main' node 
const main = document.getElementById("main");
main.remove();

// Create newHeader variable pointing to 'h1'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

// Add id to the h1 node
//const newHeader = document.getElementById('victory');
document.body.append(newHeader);

// Add content to the node
newHeader.textContent = "YOUR-NAME is the champion";