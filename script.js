document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    initAnimations();
    
    // Mobile navigation toggle
    initMobileNav();
    
    // Menu filtering
    initMenuFilter();
    
    // Add event listeners to order buttons
    initOrderButtons();
    
    // Initialize the add item button
    initAddItemButton();
    
    // Initialize form submission
    initFormSubmission();
    
    // Scroll animations
    initScrollAnimations();
});

// Initialize animations for elements with fade-in class
function initAnimations() {
    document.querySelectorAll('.menu-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
}

// Mobile navigation functionality
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Animate hamburger bars
            const bars = hamburger.querySelectorAll('.bar');
            if (hamburger.classList.contains('active')) {
                bars[0].style.transform = 'translateY(8px) rotate(45deg)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                
                // Reset hamburger bars
                const bars = hamburger.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            });
        });
    }
}

// Menu filtering functionality
function initMenuFilter() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuCards = document.querySelectorAll('.menu-card');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const category = button.dataset.category;
            
            // Filter menu cards
            menuCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Initialize order buttons
function initOrderButtons() {
    document.querySelectorAll('.order-btn').forEach(button => {
        button.addEventListener('click', function() {
            const menuItem = this.closest('.menu-card').querySelector('h3').textContent;
            const price = this.closest('.menu-card').querySelector('.price').textContent;
            
            showNotification(`You've ordered ${menuItem} for ${price}`);
        });
    });
}

// Function to create a new menu item
function createMenuItem() {
    const menuList = document.querySelector('.menu-list');
    const newMenuItem = document.createElement('div');
    newMenuItem.className = 'menu-card fade-in';
    newMenuItem.dataset.category = 'beverages';
    newMenuItem.innerHTML = `
        <div class="menu-image">
            <img src="https://th.bing.com/th/id/OIP.Rl9R0QrLrUibYCl9BYnUxgHaE8?w=272&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Beverages including Tea, Coffee, and Juice">
            <div class="price">$8.99</div>
        </div>
        <div class="menu-info">
            <h3>Premium Beverages</h3>
            <p>Artisanal coffee, exotic teas, fresh juices, and signature smoothies</p>
            <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <span>(4.6)</span>
            </div>
            <button class="order-btn">Order Now</button>
        </div>
    `;

    // Add animation
    newMenuItem.style.opacity = '0';
    newMenuItem.style.transform = 'translateY(20px)';
    
    // Add to DOM
    menuList.appendChild(newMenuItem);
    
    // Trigger animation
    setTimeout(() => {
        newMenuItem.style.opacity = '1';
        newMenuItem.style.transform = 'translateY(0)';
    }, 10);

    // Add event listener to the order button
    newMenuItem.querySelector('.order-btn').addEventListener('click', function() {
        const menuItem = this.closest('.menu-card').querySelector('h3').textContent;
        const price = this.closest('.menu-card').querySelector('.price').textContent;
        
        showNotification(`You've ordered ${menuItem} for ${price}`);
    });
    
    // Update category buttons to include beverages
    const categoryButtons = document.querySelector('.menu-categories');
    if (!document.querySelector('[data-category="beverages"]')) {
        const beverageBtn = document.createElement('button');
        beverageBtn.className = 'category-btn';
        beverageBtn.dataset.category = 'beverages';
        beverageBtn.textContent = 'Beverages';
        
        beverageBtn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            this.classList.add('active');
            
            document.querySelectorAll('.menu-card').forEach(card => {
                if (card.dataset.category === 'beverages' || this.dataset.category === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
        
        categoryButtons.appendChild(beverageBtn);
    }
    
    // Disable the add button
    document.getElementById('add-item-btn').disabled = true;
    document.getElementById('add-item-btn').textContent = 'Beverages Added';
    
    showNotification('Beverages menu added successfully!');
}

// Initialize add item button
function initAddItemButton() {
    const addItemBtn = document.getElementById('add-item-btn');
    if (addItemBtn) {
        addItemBtn.addEventListener('click', createMenuItem);
    }
}

// Initialize form submission
function initFormSubmission() {
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // Simulate form submission
            showNotification(`Thank you ${name}! You've successfully subscribed with ${email}.`);
            signupForm.reset();
        });
    }
}

// Show notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Scroll animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Observe elements that should animate on scroll
    document.querySelectorAll('.section-header, .about-image, .about-text, .signup-form').forEach(el => {
        observer.observe(el);
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Change active navigation link on scroll
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
        
        // Add shadow to header on scroll
        const header = document.querySelector('.header');
        if (scrollPosition > 50) {
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
}
