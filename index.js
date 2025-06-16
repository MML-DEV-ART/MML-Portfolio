        // JavaScript to toggle only the related image group

        // Get all buttons and all image containers
        const buttons = document.querySelectorAll(".project button");
        const projectSections = document.querySelectorAll(".the-project");

        // Loop through all buttons
        buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            // Hide all project image sections
            projectSections.forEach((section, secIndex) => {
            section.style.display = index === secIndex ? "flex" : "none";
            });
        });
        });

    
        

