document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("calle-input");
    const suggestions = document.getElementById("suggestions");

    // Cargar las calles del archivo JSON
    fetch("calles.json")
        .then(response => response.json())
        .then(calles => {
            // Escuchar cambios en el campo de texto
            input.addEventListener("input", () => {
                const query = input.value.toLowerCase();
                suggestions.innerHTML = ""; // Limpiar sugerencias

                if (query) {
                    const filteredCalles = calles.filter(calle =>
                        calle.toLowerCase().includes(query)
                    );

                    // Mostrar sugerencias
                    filteredCalles.forEach(calle => {
                        const li = document.createElement("li");
                        li.textContent = calle;
                        li.addEventListener("click", () => {
                            input.value = calle; // Al hacer clic, rellenar el input
                            suggestions.innerHTML = ""; // Limpiar sugerencias
                        });
                        suggestions.appendChild(li);
                    });
                }
            });
        })
        .catch(error => console.error("Error al cargar el archivo JSON:", error));
});
