import { } from "./modules/setup.js";   // nhận side effect
import { SignIn, SignUp, Home } from "./pages/index.js";

class Application {
    main
    home
    signIn
    signUp

    constructor() {
        this.main = document.getElementById("main")     
        this.signIn = new SignIn()
        this.signUp = new SignUp()
        this.home = new Home()
        this.setup()
    }

    setup() {
        this.main.addEventListener("success", (e) => {
            const {displayName, email, photoURL} = e.detail
            this.home.setUser({
                name: displayName,
                email: email,
                avatar: photoURL
            })
            this.renderHome()
        })
    }
    
    renderSignIn() {
        this.main.innerHTML = ""
        this.main.insertAdjacentElement("afterbegin", this.signIn.html())
        
    }

    renderHome() {
        this.main.innerHTML = ""
        this.main.insertAdjacentElement("afterbegin", this.home.html())
    }

    run() {
        this.renderSignIn()
    }
}

const app = new Application()
app.run()