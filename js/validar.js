document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fields = {
      user: document.getElementById("user"),
      email: document.getElementById("email"),
      gender: document.getElementById("gender"),
      message: document.getElementById("message"),
      terms: document.getElementById("terms"),
    };

    const errors = {
      user: 'El campo "Usuario" es obligatorio.',
      email: 'El campo "Correo electrónico" es obligatorio.',
      gender: "Debe seleccionar un género.",
      message: 'El campo "Mensaje" es obligatorio.',
      terms: "Debe aceptar los términos y condiciones.",
    };

    let valid = true;

    // Clear previous error messages
    for (const key in fields) {
      const errorElement = document.getElementById(`${key}Error`);
      errorElement.textContent = "";
      errorElement.style.display = "none";
    }

    // Validate fields
    for (const key in fields) {
      const field = fields[key];
      const errorElement = document.getElementById(`${key}Error`);

      if (key === "terms") {
        if (!field.checked) {
          errorElement.textContent = errors[key];
          errorElement.style.display = "block";
          valid = false;
        }
      } else {
        if (!field.value.trim()) {
          errorElement.textContent = errors[key];
          errorElement.style.display = "block";
          valid = false;
        }
      }
    }

    // If all fields are valid, submit the form (for this example, just show an alert)
    if (valid) {
      alert("Formulario enviado correctamente.");
      form.reset(); // Reset the form after submission
    }
  });
});
