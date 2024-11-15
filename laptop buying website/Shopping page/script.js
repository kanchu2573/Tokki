let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#000000 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;



  const cursor = document.getElementById("cursor");

// Load the last known cursor position from localStorage on page load
window.addEventListener("load", () => {
    const lastX = localStorage.getItem("cursorX");
    const lastY = localStorage.getItem("cursorY");
    
    // Only set the cursor position if valid coordinates are stored
    if (lastX !== null && lastY !== null) {
        // Use a slight delay to let the page elements load fully
        setTimeout(() => {
            cursor.style.top = `${lastY}px`;
            cursor.style.left = `${lastX}px`;
        }, 50);
    }
});

// Update cursor position on mouse move and save to localStorage
window.addEventListener("mousemove", (e) => {
    requestAnimationFrame(() => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
        
        // Save position to localStorage
        localStorage.setItem("cursorX", e.clientX);
        localStorage.setItem("cursorY", e.clientY);
    });

    // Check if the hovered element is an image, heading (h1-h6), button, or anchor tag
    if (
        e.target.tagName.toLowerCase() === "img" || 
        (e.target.tagName.toLowerCase().startsWith("h") && e.target.tagName.length === 2) || 
        e.target.tagName.toLowerCase() === "button" || 
        e.target.tagName.toLowerCase() === "a"
    ) {
        cursor.classList.add("active");
    } else {
        cursor.classList.remove("active");
    }
});

