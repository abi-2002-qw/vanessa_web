document.addEventListener('DOMContentLoaded', () => {
    const opcionesMenu = [
        { nombre: "Inicio", ruta: "/index.html" },
        { nombre: "Calculadora", ruta: "../calculadora/calculadora.html" },
        { nombre: "Calendario", ruta: "../calendario/calendario.html" },
        { nombre: "Juego", ruta: "../juego/juego.html" },
    ];

    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggleBtn");
    const menuList = document.getElementById("menuList");
    const content = document.querySelector(".content");


    opcionesMenu.forEach((opcion) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        const span = document.createElement("span");

        a.href = opcion.ruta;
        span.textContent = opcion.nombre;
        span.classList.add("text");

        a.appendChild(span);
        li.appendChild(a);
        menuList.appendChild(li);
    });


    function toggleSidebar() {
        sidebar.classList.toggle("open");
        content.classList.toggle("shifted");

        if (sidebar.classList.contains("open")) {
            toggleBtn.textContent = "✕";
        } else {
            toggleBtn.textContent = "☰";
        }
    }

 
    toggleBtn.addEventListener("click", toggleSidebar);

    document.addEventListener('click', (event) => {
        if (sidebar.classList.contains('open') && !sidebar.contains(event.target) && event.target !== toggleBtn) {
            toggleSidebar();
        }
    });

    toggleBtn.textContent = "☰"; 
});