document.addEventListener('DOMContentLoaded', () => {
  // FAQ Accordion
  const faqContainer = document.querySelector('.faq-content');

  if (faqContainer) {
    faqContainer.addEventListener('click', (e) => {
      const groupHeader = e.target.closest('.faq-group-header');
      if (!groupHeader) return;

      const group = groupHeader.parentElement;
      const groupBody = group.querySelector('.faq-group-body');
      const icon = groupHeader.querySelector('i');

      if (!groupBody || !icon) return;

      // Toggle icon
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');

      // Toggle visibility of body
      groupBody.classList.toggle('open');

      // Close other open FAQ bodies
      const otherGroups = faqContainer.querySelectorAll('.faq-group');
      otherGroups.forEach((otherGroup) => {
        if (otherGroup !== group) {
          const otherBody = otherGroup.querySelector('.faq-group-body');
          const otherIcon = otherGroup.querySelector('.faq-group-header i');

          if (otherBody) otherBody.classList.remove('open');
          if (otherIcon) {
            otherIcon.classList.remove('fa-minus');
            otherIcon.classList.add('fa-plus');
          }
        }
      });
    });
  }

  // Mobile Menu
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburgerButton && mobileMenu) {
    hamburgerButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }
});
