import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./show_message.js";

const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signupForm['email-signup'].value;
    const password = signupForm['password-signup'].value;

    try {
        const credentials = await createUserWithEmailAndPassword(auth, email, password);

        // Ocultar el modal
        const signupModal = document.getElementById('signup-modal');
        const modal = bootstrap.Modal.getInstance(signupModal);
        signupForm.reset();
        modal.hide();
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            showMessage('Email already in use', 'red');
        } else if (error.code === 'auth/invalid-email') {
            showMessage('Invalid email', 'red');
        } else if (error.code === 'auth/weak-password') {
            showMessage('Weak password', 'red');
        } else {
            showMessage('Something went wrong', 'red');
        }
    }
});
