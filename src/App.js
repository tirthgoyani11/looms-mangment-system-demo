/**
 * @file app.js
 * @description Main frontend script for the FebriFlow application.
 * This script handles user interactions, dynamic content rendering,
 * and initialization of the 3D background and Firebase services.
 * @version 1.1.0
 */

// Import third-party libraries if using a bundler.
// For this standalone file, we assume Three.js is loaded via a <script> tag in the HTML.
// import * as THREE from 'three'; 

/**
 * @class App
 * @description Main application class to encapsulate all frontend logic.
 */
class App {
    /**
     * Initializes the App class, sets up configuration, and binds methods.
     */
    constructor() {
        // --- Application Configuration ---
        this.config = {
            name: 'FebriFlow',
            version: '1.1.0',
            description: 'A powerful Firebase integration platform for modern web applications',
            documentationUrl: 'https://github.com/tirthgoyani11',
            features: [
                { name: 'Firebase Integration', description: 'Leverage Firebase for real-time database, auth, and hosting.', icon: '🔥' },
                { name: 'Real-time Updates', description: 'See changes instantly across all connected clients without refreshing.', icon: '⚡️' },
                { name: 'Secure Authentication', description: 'Manage user access with Firebase\'s robust and easy-to-use auth system.', icon: '🛡️' },
                { name: 'Responsive Design', description: 'A seamless experience on any device, from mobile to desktop.', icon: '📱' }
            ]
        };

        // --- Bind 'this' context for event handlers ---
        this.handleGetStarted = this.handleGetStarted.bind(this);
        this.handleLearnMore = this.handleLearnMore.bind(this);
        this.handleDocumentation = this.handleDocumentation.bind(this);
        this.handleSmoothScroll = this.handleSmoothScroll.bind(this);

        // --- Initialize the app once the DOM is fully loaded ---
        document.addEventListener('DOMContentLoaded', () => this.init());
    }

    /**
     * Kicks off all initialization tasks for the application.
     */
    init() {
        this.logAsciiArt();
        this.initializeApp();
        this.setupEventListeners();
        this.displayWelcomeMessage();
        this.init3DBackground();
    }

    /**
     * Logs a stylized welcome message to the developer console.
     */
    logAsciiArt() {
        console.log(`%c🔥 ${this.config.name} v${this.config.version}`, 'color: #818cf8; font-size: 16px; font-weight: bold;');
        console.log('Frontend application initialized successfully!');
    }

    /**
     * Handles core application setup, including Firebase and dynamic content.
     */
    initializeApp() {
        console.log('Initializing application components...');
        this.displayAppInfo();
        this.renderFeatures();

        // --- FIREBASE INITIALIZATION PLACEHOLDER ---
        // To enable Firebase, uncomment the code below and fill in your project's configuration.
        // Ensure you are importing the necessary Firebase modules.
        /*
        // Example with ES Module imports (ensure your HTML script tag has type="module")
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
        import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
        import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

        const firebaseConfig = {
            apiKey: "YOUR_API_KEY",
            authDomain: "YOUR_AUTH_DOMAIN",
            projectId: "YOUR_PROJECT_ID",
            storageBucket: "YOUR_STORAGE_BUCKET",
            messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
            appId: "YOUR_APP_ID"
        };

        // Initialize Firebase
        const firebaseApp = initializeApp(firebaseConfig);
        const db = getFirestore(firebaseApp);
        const auth = getAuth(firebaseApp);

        console.log("Firebase initialized successfully!");
        // You can now use `db` and `auth` throughout your app.
        // For example, you could store them as properties of this class:
        // this.db = db;
        // this.auth = auth;
        */
    }

    /**
     * Dynamically generates and injects feature cards into the DOM.
     */
    renderFeatures() {
        const featuresGrid = document.getElementById('features-grid');
        if (!featuresGrid) {
            console.warn('Feature grid element not found. Skipping feature rendering.');
            return;
        }

        featuresGrid.innerHTML = this.config.features.map(feature => `
            <div class="feature-card p-8 rounded-lg text-left">
                <div class="text-4xl mb-4">${feature.icon}</div>
                <h4 class="text-xl font-bold mb-2">${feature.name}</h4>
                <p class="text-slate-400">${feature.description}</p>
            </div>
        `).join('');
    }

    /**
     * Attaches event listeners to all interactive elements on the page.
     */
    setupEventListeners() {
        document.getElementById('get-started')?.addEventListener('click', this.handleGetStarted);
        document.getElementById('learn-more')?.addEventListener('click', this.handleLearnMore);
        document.getElementById('docs-link')?.addEventListener('click', this.handleDocumentation);
        document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', this.handleSmoothScroll));
        console.log('Event listeners initialized!');
    }

    /**
     * Displays a time-sensitive greeting in the console and as a UI notification.
     */
    displayWelcomeMessage() {
        const currentHour = new Date().getHours();
        let greeting;
        if (currentHour < 12) {
            greeting = 'Good morning';
        } else if (currentHour < 18) {
            greeting = 'Good afternoon';
        } else {
            greeting = 'Good evening';
        }
        
        this.appLog(`${greeting}! Welcome to ${this.config.name}!`);
        this.showNotification(`${greeting}! Welcome to ${this.config.name} 🔥`);
    }

    /**
     * Logs detailed application info to the console in a collapsible group.
     */
    displayAppInfo() {
        console.groupCollapsed('🔥 App Information');
        console.log('Name:', this.config.name);
        console.log('Version:', this.config.version);
        console.log('Description:', this.config.description);
        console.log('Features:', this.config.features.map(f => f.name).join(', '));
        console.log('Documentation:', this.config.documentationUrl);
        console.groupEnd();
    }

    /**
     * Handles the 'Get Started' button click event.
     */
    handleGetStarted() {
        this.appLog('Get Started button clicked!');
        this.showNotification('🚀 Getting started with FebriFlow!');
        document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
    }

    /**
     * Handles the 'Learn More' button click event.
     */
    handleLearnMore() {
        this.appLog('Learn More button clicked!');
        this.showNotification('📚 Learning more about FebriFlow!');
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }

    /**
     * Handles the 'Documentation' link click event.
     * @param {Event} event - The click event object.
     */
    handleDocumentation(event) {
        event.preventDefault();
        this.appLog('Documentation link clicked!');
        this.showNotification('📖 Opening documentation...');
        setTimeout(() => window.open(this.config.documentationUrl, '_blank'), 500);
    }

    /**
     * Provides smooth scrolling for on-page anchor links.
     * @param {Event} event - The click event object.
     */
    handleSmoothScroll(event) {
        const href = event.currentTarget.getAttribute('href');
        if (href && href.startsWith('#')) {
            event.preventDefault();
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    /**
     * Displays a temporary notification pop-up in the UI.
     * @param {string} message - The message to display.
     * @param {string} [type='info'] - The type of notification ('info', 'error', etc.).
     */
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.textContent = message;
        
        // --- Notification Styling ---
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '12px 20px',
            backgroundColor: type === 'info' ? '#4f46e5' : '#e11d48', // Indigo for info, Red for error
            color: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: '1000',
            fontSize: '14px',
            fontWeight: '500',
            opacity: '0',
            transform: 'translateY(-10px)',
            transition: 'all 0.3s ease-in-out'
        });

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 100);

        // Animate out and remove
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-10px)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    /**
     * A utility for logging messages with a consistent application prefix.
     * @param {string} message - The message to log.
     * @param {string} [level='log'] - The console log level ('log', 'warn', 'error').
     */
    appLog(message, level = 'log') {
        const prefix = `[${this.config.name}]`;
        console[level](`${prefix} ${message}`);
    }

    // --- 3D BACKGROUND EFFECT ---

    /**
     * Initializes the Three.js scene, camera, renderer, and objects for the background.
     */
    init3DBackground() {
        // Check if Three.js is available
        if (typeof THREE === 'undefined') {
            console.error('Three.js is not loaded. Cannot initialize 3D background.');
            return;
        }

        this.scene = new THREE.Scene();
        this.clock = new THREE.Clock();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 50;

        const canvas = document.getElementById('bg-canvas');
        if (!canvas) {
            console.error('Background canvas element not found.');
            return;
        }

        this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        const geometry = new THREE.PlaneGeometry(300, 300, 50, 50);
        const material = new THREE.MeshPhongMaterial({
            color: 0x3730a3, // A nice indigo color
            specular: 0x111111,
            shininess: 10,
            side: THREE.DoubleSide,
            wireframe: true,
            transparent: true,
            opacity: 0.4
        });
        this.fabricPlane = new THREE.Mesh(geometry, material);
        this.scene.add(this.fabricPlane);

        // --- Lighting ---
        const ambientLight = new THREE.AmbientLight(0x404040, 2);
        this.scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
        directionalLight.position.set(1, 1, 1);
        this.scene.add(directionalLight);

        window.addEventListener('resize', () => this.onWindowResize(), false);
        this.animate3D();
    }

    /**
     * Handles window resize events to keep the 3D canvas responsive.
     */
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    /**
     * The main animation loop for the 3D background.
     */
    animate3D() {
        requestAnimationFrame(() => this.animate3D());

        const elapsedTime = this.clock.getElapsedTime();
        const vertices = this.fabricPlane.geometry.attributes.position;

        for (let i = 0; i < vertices.count; i++) {
            const x = vertices.getX(i);
            const y = vertices.getY(i);
            const dist = Math.sqrt(x * x + y * y);
            
            // Create a wave effect emanating from the center
            const z = Math.sin(dist / 10 - elapsedTime * 1.5) * 5;
            vertices.setZ(i, z);
        }

        vertices.needsUpdate = true;
        this.fabricPlane.geometry.computeVertexNormals(); // Recalculate normals for correct lighting

        this.renderer.render(this.scene, this.camera);
    }
}

// --- Application Instantiation ---
// Create a new instance of the App class to run the application.
const app = new App();

// --- Global Utilities for Developers ---
// Expose a limited set of methods on the window object for easy debugging from the console.
window.FebriFlow = {
    getAppInfo: () => app.config,
    appLog: (msg, level) => app.appLog(msg, level),
    showNotification: (msg, type) => app.showNotification(msg, type)
};
