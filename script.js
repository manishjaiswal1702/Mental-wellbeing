// Select the dark mode toggle button
const darkModeToggle = document.getElementById('dark');

// Event listener to toggle dark mode on click
darkModeToggle.addEventListener('click', () => {
    // Toggle the "dark-mode" class on the body element
    document.body.classList.toggle('dark-mode');

    // Update the icon between sun and moon
    const icon = darkModeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.replace('ri-sun-fill', 'ri-moon-fill');
    } else {
        icon.classList.replace('ri-moon-fill', 'ri-sun-fill');
    }
});