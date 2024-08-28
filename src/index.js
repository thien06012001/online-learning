const express = require("express");
require('dotenv').config()
const { engine } = require("express-handlebars");
const db = require("./config/database");
const path = require("path");
const app = express();
const { pageRoutes, apiRoutes } = require("./routes/index");
const port = process.env.PORT || 3000;
// STATIC FILES
app.use(express.static(path.join(__dirname, "/public")));

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// APPLICATION/JSON PARSING
app.use(express.json());

// EXPRESS HANDLEBARS CONFIGURATION
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "/resources/views"));
console.log(__dirname);
// DATABASE CONNECTION
db.connect();
pageRoutes(app);
apiRoutes(app);
app.listen(port, () => {
    console.log(`Server starts on http://localhost:${port}/`);
});