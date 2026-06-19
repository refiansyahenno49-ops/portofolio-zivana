// INTERSECTION OBSERVER (animasi scroll)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

// semua section otomatis diberi hidden + diamati
document.querySelectorAll("section").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});


// tombol interaktif
document.getElementById("btn").addEventListener("click", function () {
    alert("Hai Zivana 💖 Semangat terus belajar coding!");
});
