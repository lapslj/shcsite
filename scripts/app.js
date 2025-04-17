const menuToggle = document.getElementById('menu-toggle');
const navbarMenu = document.getElementById('navbar-menu');
const menuLinks = document.querySelectorAll('.navbar-menu a');
const coll = document.getElementsByClassName("collapsible");

menuToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

    // Close menu when any menu link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarMenu.classList.remove('active');
        });
    });

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }