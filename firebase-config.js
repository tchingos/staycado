// Centralized Firebase configuration for Staycado
// This file exports Firebase services for use across the application

// Firebase configuration - single source of truth
window.FIREBASE_CONFIG = {
    apiKey: "AIzaSyBGqtE8-zYcs4nnE_CScSUrxc85JBkMarY",
    authDomain: "staycado.firebaseapp.com",
    projectId: "staycado",
    storageBucket: "staycado.firebasestorage.app",
    messagingSenderId: "369348767227",
    appId: "1:369348767227:web:c39e0fe4e04a499af12f5e",
    measurementId: "G-K6S1YJL8DD"
};

// Initialize Firebase services when this script loads
window.initializeFirebase = async function() {
    try {
        // Import Firebase modules
        const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js');
        const { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js');
        
        // Initialize Firebase
        const app = initializeApp(window.FIREBASE_CONFIG);
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        
        // Make Firebase services available globally
        window.firebaseApp = app;
        window.auth = auth;
        window.googleProvider = provider;
        window.signInWithPopup = signInWithPopup;
        window.signOut = signOut;
        window.onAuthStateChanged = onAuthStateChanged;
        
        console.log('Firebase initialized successfully');
        return true;
    } catch (error) {
        console.error('Error initializing Firebase:', error);
        return false;
    }
};

// Initialize Firestore when needed
window.initializeFirestore = async function() {
    try {
        const { getFirestore, doc, getDoc, setDoc } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
        
        window.db = getFirestore(window.firebaseApp);
        window.doc = doc;
        window.getDoc = getDoc;
        window.setDoc = setDoc;
        
        console.log('Firestore initialized successfully');
        return true;
    } catch (error) {
        console.error('Error initializing Firestore:', error);
        return false;
    }
};