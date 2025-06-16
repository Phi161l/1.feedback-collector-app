// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", async () => {
  const feedbackBox = document.getElementById("feedbackList");

  // Fetch feedback data from backend
  const response = await fetch("/api/feedback");
  const feedbackList = await response.json(); // Parse the JSON to js object


  //this is manual version of what React automates and optimizes (do this using react and compare):

  // Loop through each feedback entry and show it
  feedbackList.forEach((feedback) => {
    const item = document.createElement("div");

    item.innerHTML = ` 
        <strong>${feedback.name}</strong> (${feedback.email}) <br /> ${feedback.message}
        <hr />
      `;

    feedbackBox.appendChild(item);
  });
});









// try {
//   // Fetch feedback data from backend
//   const response = await fetch("/api/feedback");
//   const feedbackList = await response.json(); // Parse the JSON

//   // Loop through each feedback entry and show it
//   feedbackList.forEach((feedback) => {
//     const item = document.createElement("div");
//     item.innerHTML = `
//         <strong>${feedback.name}</strong> (${feedback.email})<br /> ${feedback.message}
//         <hr />
//       `;
//     feedbackBox.appendChild(item);
//   });
// } catch (error) { 
//   feedbackBox.innerHTML = "<p>Failed to load feedback.</p>";
//   console.error("Error fetching feedback:", error);
// }
// });


