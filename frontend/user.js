// Get the form element by its ID
const form = document.getElementById("feedbackForm");

// Attach the submit event listener
form.addEventListener("submit", handleFormSubmit);

// Separate function to handle the form submission
async function handleFormSubmit(e) {
  e.preventDefault(); // Stop the form from reloading the page

  // Collect data from the form
  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const message = form.elements["message"].value;

  // Send data to the backend
  const response = await fetch("/api/feedback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),    // convert js object to json for transmission.
  });

  // Show result
  if (response.ok) {
    alert("Feedback submitted successfully!");
    form.reset(); // Clear the form
  } else {
    alert("Something went wrong. Try again.");
  }
}












