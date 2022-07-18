let app = require("./app");

let port = process.env.NODE_PORT || 1234;
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}...`);
});
