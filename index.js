function addingEventListener() {
    // Get the button by its ID
    const input = document.getElementById('button');
    
    // Add a click event listener to the button
    input.addEventListener('click', function() {
      alert('I was clicked!');
    });
  }
  
  // Call the function to add the event listener when the page is loaded
  addingEventListener();
  