// // Import Firebase modules (for Firebase v9+)
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
// import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDCNfe6t6KpR1DdZc-dLObuhE2BG0q3n2M",
//     authDomain: "web-app-project-bb6e8.firebaseapp.com",
//     projectId: "web-app-project-bb6e8",
//     storageBucket: "web-app-project-bb6e8.firebasestorage.app",
//     messagingSenderId: "995424022140",
//     appId: "1:995424022140:web:06e32105de5453973223f9",
//     measurementId: "G-J6KGXDDV6Q"
//   };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// // Signup Validation & Firebase Signup
// function signupValidation(event) {
//     event.preventDefault();

//     const name = document.getElementById('signup-name').value;
//     const fatherName = document.getElementById('father-name').value;
//     const city = document.getElementById('city').value;
//     const zipCode = document.getElementById('zip-code').value;
//     const email = document.getElementById('signup-email').value;
//     const password = document.getElementById('signup-password').value;

//     // Simple validation
//     if (!name || !fatherName || !city || !zipCode || !email || !password) {
//         alert("Please fill in all fields.");
//         return false;
//     }

//     // Firebase Authentication - Create User with Email and Password
//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed up successfully
//             const user = userCredential.user;

//             // Store user data in Firestore
//             setDoc(doc(db, "users", user.uid), {
//                 name: name,
//                 fatherName: fatherName,
//                 city: city,
//                 zipCode: zipCode,
//                 email: email
//             });

//             // Show success notification
//             Swal.fire({
//                 position: 'top-end',
//                 icon: 'success',
//                 title: 'Signup successful!',
//                 showConfirmButton: false,
//                 timer: 1500
//             });

//             // Redirect to welcome page or other desired location
//             window.location.href = "welcome.html"; // Or change this to another page
//         })
//         .catch((error) => {
//             // Handle Errors here.
//             const errorCode = error.code;
//             const errorMessage = error.message;

//             Swal.fire({
//                 icon: 'error',
//                 title: 'Signup failed',
//                 text: errorMessage
//             });
//         });
// }








// Function to toggle between login and signup forms
function toggleForm(formType) {
    if (formType === 'signup') {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('signup-form').style.display = 'block';
    } else {
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    }
}

// Login form validation
function loginValidation(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (!email || !password) {
        alert("Please fill in all fields.");
        return false;
    }

    // You can add more validation or server-side checks here.
    alert("Login successful!");
    return true;
}
