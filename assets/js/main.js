import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"
import {auth} from "./firebase/firebase.js"
import { loginCheck } from "./firebase/loginCheck.js"

import "./firebase/signup-form.js"
import "./firebase/logout.js"
// import "./firebase/forms.js"
import "./firebase/googleLogin.js"
import "./firebase/signin-form.js"

onAuthStateChanged (auth, async(user) =>{
    if (user) {
        loginCheck(user);
        import("./firebase/funciones.js") 
        .then(({default: setUpTasks}) => setUpTasks(user));
    }
    // Si ha salido
    else {
        loginCheck(user);
    }
    /*if (user) {
        loginCheck(user);
        import("./firebase/funciones.js") 
        .then(({default: setUpTasks}) => setUpTasks(user));
    }
    // Si ha salido
    else {
        loginCheck(user);
    }
*/
} )