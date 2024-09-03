document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    let valid = true;
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      valid = false;
      alert("Please fill out all fields.");
    }

    if (!valid) {
      event.preventDefault();
    }
  });
