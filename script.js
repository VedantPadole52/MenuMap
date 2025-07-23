// Enhanced JavaScript to dynamically add a menu item and a signup form
document.addEventListener('DOMContentLoaded', () => {
    const menuList = document.querySelector('.menu-list');
    const formContainer = document.querySelector('.form-container');

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

    // Function to create a signup form
    function createSignupForm() {
        const signupForm = document.createElement('form');
        signupForm.className = 'signup-form';
        signupForm.innerHTML = `
            <h2>Signup</h2>
            <input type="text" placeholder="Username" required>
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Password" required>
            <button type="submit">Signup</button>
            <button type="submit">
            
        `;

        // Add event listener to handle form submission
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Signup successful!');
            // Here you can add logic to handle the signup data
        });

        formContainer.appendChild(signupForm);
    }

    // Call the functions to create and add the menu item and signup form
    createMenuItem();
    createSignupForm();
});
