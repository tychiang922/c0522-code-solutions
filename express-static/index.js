const express = require('express');
const path = require('path');
const app = express();
const absPath = path.join(__dirname, 'public');
console.log(absPath);
const publicStatic = express.static('public');
app.use(publicStatic);
app.listen(3000, () => {
});
