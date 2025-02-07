document.addEventListener("DOMContentLoaded", function () {
        const humburger = document.querySelector(".humburger");
        const navlinks = document.querySelector(".nav-links");
    
        humburger.addEventListener("click", () => {
            humburger.classList.toggle("active");
            navlinks.classList.toggle("active");
        });
    
        const skillsSection = document.querySelector(".skills-section");
        const skillBars = document.querySelectorAll(".skill-progress");
        const percentNumber = document.querySelectorAll(".percent-number");
        let skillAnimated = false;
    
        function animateSkills() {
            if (skillAnimated) return;
            skillBars.forEach((bar, index) => {
                const percent = parseInt(bar.getAttribute("data-percent"));
                bar.style.width = percent + "%";
    
                let currentPercent = 0;
                const updateCounter = setInterval(() => {
                    if (currentPercent < percent) {
                        currentPercent++;
                        percentNumber[index].textContent = currentPercent;
                    } else {
                        clearInterval(updateCounter);
                    }
                }, 20);
            });
    
            skillAnimated = true;
        }
    
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };
    
       
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateSkills();
                    skillsObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
    
       
        if (skillsSection) {
            skillsObserver.observe(skillsSection);
        }





        AOS.init();
   
   
   
   
   
   
   
    });
    
