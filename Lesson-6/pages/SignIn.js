import {SignInSuccessEvent} from "../modules/event.js"

class SignIn {
    constructor() {
        const main = document.createElement("form")
        // email + password
        const email = document.createElement("input")
        const password = document.createElement("input")
        const button = document.createElement("input")

        email.setAttribute("type", "text")
        email.setAttribute("placeholder", "Enter username/email")

        password.setAttribute("type", "text")
        password.setAttribute("placeholder", "Enter password")

        button.setAttribute("type", "button")
        button.setAttribute("value", "Sign In")
        
        // sign in by google account
        const gbtn = document.createElement("input")
        gbtn.setAttribute("type", "button")
        gbtn.setAttribute("value", "Sign In Using Google Account")
        gbtn.classList.add("gbtn")

        main.appendChild(email)
        main.appendChild(password)
        main.appendChild(button)
        main.appendChild(gbtn)
        // main.innerHTML = "Text from Sign In Form"
        this.main = main
        this.gbtn = gbtn
        this.setup()
    }

    setup() {
        this.gbtn.addEventListener("click", () => {
            // O-auth: đăng nhập bằng bên thứ 3 như GG, FB
            const provider = new firebase.auth.GoogleAuthProvider()
            firebase.auth()
                .signInWithPopup(provider)
                .then((result) => {
                    /** @type {firebase.auth.OAuthCredential} */
                    const credential = result.credential;

                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const token = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;

                    this.main.dispatchEvent(
                        new SignInSuccessEvent({
                            ...user
                        })
                    )
                    // ...
                }).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    const credential = error.credential;
                    // ...
                    });
        })
    }

    html() {
        return this.main
    }
}

export {SignIn}