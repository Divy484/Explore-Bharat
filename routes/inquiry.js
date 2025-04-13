const express = require('express');
const db = require("../config/db");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("pages/inquiry");
});

router.post("/", async (req, res) => {
    const { fname, lname, email, phoneNo, depDate, retDate, address, destAddress, additional } = req.body;

    try{
        await db
        .promise()
        .query(
            `INSERT INTO inquiry (firstname, lastname, email, phoneNo, departureDate, returnDate, address, destinationAddress, additionalDetails)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [fname, lname, email, phoneNo, depDate, retDate, address, destAddress, additional]
        );

        req.flash("success", "Inquiry submitted successfully! We will contact you soon.");
        res.redirect("/inquiry");
    } catch(err){
        console.log(err);
        req.flash("error", "Internal Server error!!");
        res.redirect("/");
    }
});

module.exports = router;