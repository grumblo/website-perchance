const circle = document.querySelector('.circle'); 
const circle2 = document.querySelector('.circle2'); // Use querySelector to get the second circle
const text = document.querySelector('.text'); 
let rotationAngle = 0; 

function rotateCircle() {
  rotationAngle += 1; 
  circle.style.transform = `rotate(${rotationAngle}deg)`;
  text.style.transform = `rotate(${rotationAngle}deg)`; 

  // Rotate the second circle as well
  circle2.style.transform = `rotate(${rotationAngle}deg)`; 
}

// Set the initial rotation
rotateCircle(); 

setInterval(rotateCircle, 10);
