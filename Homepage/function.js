window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  const logo = document.getElementById('logo');
  if (window.scrollY > 50) {
    header.classList.add('shrink');
    logo.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
    logo.classList.remove('shrink');
  }
});

window.addEventListener('scroll', function() {
  const headerDivider = document.querySelector('.header-divider');
  const scrollPosition = window.scrollY;
  const initialHeaderHeight = 100; // Initial height of the header
  const finalHeaderHeight = 50; // Final height of the header after scrolling

  // Calculate the height of the vertical line based on scroll position and header height
  const calculatedHeight = Math.min(initialHeaderHeight, initialHeaderHeight - scrollPosition);

  // Calculate the proportional height of the vertical line based on header height change
  const proportionalHeight = (calculatedHeight / initialHeaderHeight) * finalHeaderHeight;

  // Set the height of the vertical line
  headerDivider.style.height = `${proportionalHeight}px`;
});
