const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// This route adds a new feedback entry
router.post("/", (req, res) => {
    const feedback = req.body.data;
    // console.log("Feelings:", feedback[0].Feelings);
    // console.log("Understanding:", feedback[1].Understanding);
    // console.log("Support:", feedback[2].Support);
    // console.log("Comments:", feedback[3].Comments);

    const queryParams = [
        feedback[0].Feelings,
        feedback[1].Understanding,
        feedback[2].Support,
        feedback[3].Comments
    ];

    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`;

    pool.query(queryText, queryParams)
        .then((queryRes) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log("we have a server error on the POST");
            console.error(err);
            res.sendStatus(500);
        });
});

// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get("/", (req, res) => {
    console.log("testing");
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

module.exports = router;
