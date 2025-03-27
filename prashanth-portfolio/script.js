document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    
    window.addEventListener("scroll", function () {
        sections.forEach(section => {
            if (window.scrollY + window.innerHeight > section.offsetTop + 100) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    });
});
