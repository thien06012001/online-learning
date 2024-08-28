class AuthRender {
    signUp(req, res, next) {
        res.render("sign-up", {
            title: "Sign Up",
            styles: ["sign-up.css"],
            scripts: ["sign-up.js"]
        });
    }

    signIn(req, res, next) {
        res.render("sign-in", {
            title: "Sign In",
            styles: ["sign-in.css"],
            scripts: ["sign-in.js"]
        });
    }
}

module.exports = new AuthRender();