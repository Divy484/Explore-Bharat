const express = require('express');
const db = require("../config/db");

const router = express.Router();

router.get("/", (req, res) => {
    const query = `SELECT * FROM inquiry ORDER BY id DESC`;

    db.query(query, (err, results) => {
        if(err){
            console.error("Error while fatching data!!", err);
            return res.status(500).send("Internal Server Error!!");
        }
        res.render("pages/adminDashboard", { inquiries: results });
    });
});

module.exports = router;