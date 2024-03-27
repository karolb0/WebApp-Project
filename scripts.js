window.addEventListener('DOMContentLoaded', event => {
    // Navbar function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate scrollspy on the navbar while visiting the page 
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };
    }
     ,)

     //login function 
     function validateForm() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
    
        // Check if username and password match the expected values
        if (username !== "karolb" || password !== "123") {
          alert("Invalid username or password.");
          return false; // Prevent form submission
        }
    
        // If all validations pass, return true to allow form submission
        return true;
      }