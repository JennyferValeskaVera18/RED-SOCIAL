// logout.js
import { signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "./firebase.js";

export function initLogout() {
  const logout = document.getElementById('logout');

  if (logout) {
    logout.addEventListener('click', async () => {
      await signOut(auth);
      // Emite el evento userLogout
      document.dispatchEvent(new Event('userLogout'));
    });
  }
}

// Llama a la función cuando se importa el script
initLogout();
