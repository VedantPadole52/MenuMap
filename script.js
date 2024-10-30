// Enhanced JavaScript to dynamically add a menu item with additional functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuList = document.querySelector('.menu-list');

    // Function to create a new menu item
    const createMenuItem = () => {
        const newMenuItem = document.createElement('li');
        newMenuItem.className = 'menu-item';
        newMenuItem.innerHTML = `
            <h2>Beverages</h2>
            <p>Tea, Coffee, Juice</p>
            <button class="remove-btn">Remove</button>
        `;

        // Add animation class
        newMenuItem.classList.add('fade-in');

        // Add event listener to the remove button
        newMenuItem.querySelector('.remove-btn').addEventListener('click', () => {
            menuList.removeChild(newMenuItem);
        });

        menuList.appendChild(newMenuItem);
    };

    // Call the function to create and add the menu item
    createMenuItem();
    
});

// CSS for fade-in animation (add this to your CSS file)
/*
.fade-in {
    opacity: 0;
    transition: opacity 0.5s ease-in;
}

.menu-item {
    opacity: 1;
}
*/
