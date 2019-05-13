const header = document.querySelector("header");

/**
 * Header onScorll Event
 */
const handleScroll = () => {
  const scrollHeight = window.scrollY;
  // Top Header
  if (scrollHeight > 50) {
    header.classList.add("black");
  } else {
    header.classList.remove("black");
  }
};

/**
 * Register Event Listeners
 */
const handleContentLoaded = () => {
  window.addEventListener("scroll", handleScroll);
};

document.addEventListener("DOMContentLoaded", handleContentLoaded);
