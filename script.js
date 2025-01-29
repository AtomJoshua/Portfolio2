document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  
    // Form Validation
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
        return;
      }
  
      alert("Message sent successfully!");
      form.reset();
    });
  });
  