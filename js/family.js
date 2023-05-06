const familyTreeImg = document.getElementById('familytree');

// Set the initial display style to "none" to hide the images

familyTreeImg.style.opacity = '0';



// Delay showing the images after 3 seconds
setTimeout(() => {
  familyTreeImg.style.opacity = '1';
}, 1500);