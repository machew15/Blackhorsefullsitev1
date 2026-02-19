// Navigation dropdown functionality
(function() {
  'use strict';

  const dropdownButton = document.getElementById('projectsDropdown');
  const dropdownMenu = document.getElementById('dropdownMenu');
  
  if (!dropdownButton || !dropdownMenu) return;
  
  const chevron = dropdownButton.querySelector('.chevron');
  const homeProjectsBtn = document.getElementById('homeProjectsBtn');

  // Dropdown toggle
  function toggleDropdown(e) {
    e.preventDefault();
    e.stopPropagation();
    const isActive = dropdownMenu.classList.contains('active');
    
    if (isActive) {
      closeDropdown();
    } else {
      openDropdown();
    }
  }

  function openDropdown() {
    dropdownMenu.classList.add('active');
    if (chevron) chevron.classList.add('rotated');
  }

  function closeDropdown() {
    dropdownMenu.classList.remove('active');
    if (chevron) chevron.classList.remove('rotated');
  }

  // Close dropdown when clicking outside
  function handleClickOutside(e) {
    if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
      closeDropdown();
    }
  }

  // Event listeners
  dropdownButton.addEventListener('click', toggleDropdown);
  document.addEventListener('click', handleClickOutside);

  // Home page projects button opens dropdown
  if (homeProjectsBtn) {
    homeProjectsBtn.addEventListener('click', function(e) {
      e.preventDefault();
      openDropdown();
      // Scroll to navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
