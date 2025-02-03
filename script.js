document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-links a");

    // Smooth Scroll
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });

            // Highlight Active Link
            links.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
