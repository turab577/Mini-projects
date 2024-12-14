// Function to open the vertical menu
function openMenu() {
    document.getElementById("id").style.display = "flex"; // Show the vertical menu
    document.getElementById("open-menu").style.display = "none"; // Hide open button
    document.getElementById("close-menu").style.display = "block"; // Show close button
  }
  
  // Function to close the vertical menu
  function closeMenu() {
    document.getElementById("id").style.display = "none"; // Hide the vertical menu
    document.getElementById("open-menu").style.display = "block"; // Show open button
    document.getElementById("close-menu").style.display = "none"; // Hide close button
  }
  
  // Function to handle screen resizing
  function handleResize() {
    if (window.innerWidth >= 600) {
      // If screen is wider than 600px, hide the vertical menu, buttons, and show horizontal menu
      document.getElementById("id").style.display = "none"; // Ensure vertical menu is hidden
      document.getElementById("open-menu").style.display = "none"; // Hide open button
      document.getElementById("close-menu").style.display = "none"; // Hide close button
      document.getElementById("menu").style.display = "flex"; // Show horizontal menu
    } else {
      // If screen is narrower than 600px, ensure horizontal menu is hidden
      document.getElementById("menu").style.display = "none"; // Hide horizontal menu
      document.getElementById("open-menu").style.display = "block"; // Show open button
      document.getElementById("close-menu").style.display = "none"; // Hide close button initially
    }
  }
  
  // Add event listener for window resizing
  window.addEventListener("resize", handleResize);
  
  // Initial check when the page loads
  window.onload = handleResize;
  

  // Function to load a specific project
function loadProject(project) {
  const iframe = document.getElementById('project-frame');

  if (project === 'home') {
      
      iframe.src = 'calculator/calculator.html';
  } else if (project === 'project1') {
      iframe.src = 'clock/clock.html';
  } else if (project === 'project2') {
      iframe.src = 'slider/slider.html';
  } else if (project === 'project3') {
      iframe.src = 'grocery list/tdl.html';
  }
   else if (project === 'project4') {
      iframe.src = 'fully functional form/form.html';
   }
   else if (project === 'project5') {
      iframe.src = 'color flipper/btn.html';
   }
}
