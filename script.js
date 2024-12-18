let isStartProject = true;
function toggleButtonText() {
    const button = document.getElementById("toggleButton");
    if (isStartProject) {
        button.textContent = "Explore Project";
    } else {
        button.textContent = "Start Project";
    }
    isStartProject = !isStartProject;
}
setInterval(toggleButtonText, 10000);
let currentCounterTarget = 400; // Initial counter target (1 to 400)
let counterDescription = "More than 100 successful projects"; // Initial heading

// Function to change the counter and heading
function startCounter() {
    const counter = document.querySelector(".counter");
    const description = document.querySelector(".counter-description");
    counter.innerText = "1"; // Start counting from 1

    const target = currentCounterTarget; // Get current target (either 400 or 21)
    const increment = target / 200; // Adjust for smoother animation

    description.innerHTML = `<h3>${counterDescription}</h3>`; // Set the heading

    const updateCounter = () => {
        const count = +counter.innerText;
        if (count < target) {
            counter.innerText = `${Math.ceil(count + increment)}`;
            setTimeout(updateCounter, 10); // Continue animation until target is reached
        } else {
            counter.innerText = target; // Ensure the final count is exactly the target
        }
    };

    updateCounter(); // Start the counter animation
}

// Function to switch counter and heading every 10 seconds
function switchCounterAndHeading() {
    if (currentCounterTarget === 400) {
        currentCounterTarget = 21; // Switch target to 21
        counterDescription = "Years of Experience"; // Update heading
    } else {
        currentCounterTarget = 400; // Switch back to 400
        counterDescription = "More than 100 successful projects"; // Update heading
    }

    startCounter(); // Restart the counter animation with the new target and heading
}

// Start the first counter animation on page load
document.addEventListener("DOMContentLoaded", () => {
    startCounter(); // Initial counter animation (1 to 400)

    // Switch counter and heading every 10 seconds
    setInterval(switchCounterAndHeading, 10000);
});
document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.querySelector(".cards");
    const dots = document.querySelectorAll(".dot");
    const totalCards = document.querySelectorAll(".card").length;
    const cardsPerRow = 3; // Number of cards to show at a time
    const cardWidth = 100 / cardsPerRow; // Calculate card width (percentage)
    let currentIndex = 0; // Initially show the first set of 3 cards
  
    // Ensure each card takes up 33.33% width
    document.querySelectorAll(".card").forEach((card) => {
      card.style.flex = `0 0 ${cardWidth}%`;
    });
  
    // Function to update the slider (move the cards container)
    function updateSlider() {
      const offset = -(currentIndex * cardsPerRow * cardWidth); // Calculate the offset for the carousel
      cardsContainer.style.transform = `translateX(${offset}%)`; // Move the cards container
  
      // Update active dot
      updateDots();
    }
  
    // Function to update the active dot
    function updateDots() {
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex); // Mark the active dot
      });
    }
  
    // Event listener for clicking on a dot to change the currentIndex
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index; // Set the new current index based on the clicked dot
        updateSlider(); // Update the cards and active dot
      });
    });
  
    // Initialize the first view
    updateSlider();
  
    // Handle window resizing (optional, in case you want to adjust on resize)
    window.addEventListener("resize", () => {
      updateSlider(); // Recalculate if the window size changes
    });
  });
  
  
  
