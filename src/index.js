import ResizeDelay from './ResizeDelay';

// Delay for all resize event
const delay = 777;
new ResizeDelay(delay);

// Add your callback function
const removeResizeListner = (new ResizeDelay).add(function () {
  console.log('Resize');
});

// Run instance method
// window.ResizeDelay._instance.resize()

// Destroy
// removeResizeListner();
