// Make Lilly pictures interactive with accessibility support
document.addEventListener('DOMContentLoaded', function() {
  const lillyPicsButton = document.querySelector('.lilly-pics');

  if (lillyPicsButton) {
    lillyPicsButton.addEventListener('click', function() {
      // Toggle active class
      this.classList.toggle('active');

      // Update ARIA pressed state for accessibility
      const isPressed = this.classList.contains('active');
      this.setAttribute('aria-pressed', isPressed.toString());
    });

    // Add keyboard support for Enter and Space keys
    lillyPicsButton.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this.click();
      }
    });
  }
});