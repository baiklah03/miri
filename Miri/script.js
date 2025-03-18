document.getElementById('operation-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  // Log data to the console (you can replace this with an API call)
  console.log(data);

  // Show a success message
  alert('Form submitted successfully!');
});