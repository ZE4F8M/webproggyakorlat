document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("orderForm");
  const alertBox = document.getElementById("formAlert");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const size = document.getElementById("size").value.trim();
    const message = document.getElementById("message").value.trim();

    let errors = [];

    if (name.length < 10) {
      errors.push("A név legalább 10 karakter hosszú legyen.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errors.push("Érvénytelen email cím formátum.");
    }

    if (address.length < 10) {
      errors.push("A cím legalább 10 karakter hosszú legyen.");
    }

    if (!size || isNaN(size) || Number(size) <= 0) {
      errors.push("A kert mérete érvényes szám legyen.");
    }

    if (message.length < 10) {
      errors.push("A megjegyzés legalább 10 karakter hosszú legyen.");
    }

    if (errors.length > 0) {
      alertBox.className = "alert alert-danger mt-3";
      alertBox.innerHTML = errors.join("<br>");
      alertBox.classList.remove("d-none");
    } else {
      alertBox.className = "alert alert-success mt-3";
      alertBox.innerHTML = "Sikeres megrendelés! Hamarosan felvesszük Önnel a kapcsolatot.";
      alertBox.classList.remove("d-none");
      form.reset();
    }
  });
});
