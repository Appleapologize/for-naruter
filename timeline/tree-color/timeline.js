       document.addEventListener("DOMContentLoaded", function() {
    const timelineHeadings = document.querySelectorAll("h1.timeline-who");
    timelineHeadings.forEach(function(h1) {
        h1.classList.add("timeline-who");

        h1.setAttribute("onclick", "toggleVisibility(this)");
    });
});
        function toggleVisibility(element) {var p = element.nextElementSibling;
            if (p.style.display === "none" || p.style.display === "") 
            {p.style.display = "block";} 
            else {p.style.display = "none";}}
