document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("agree");
    const button = document.getElementById("continueBtn");
  
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        button.disabled = false;
        button.classList.add("enabled");
      } else {
        button.disabled = true;
        button.classList.remove("enabled");
      }
    });
  
    button.addEventListener("click", function () {
      if (checkbox.checked) {
        window.location.href = "/wellness/configure/"; // Adjust this path if needed
      }
    });
  });
  