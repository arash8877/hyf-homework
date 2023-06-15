const express = require("express");
const { searchQuery, findId, postQuery } = require("./controllers/controller");

const router = express.Router();

// GET /search
router.get("/search", searchQuery);
//GET /documents/:id
router.get("/document/:id", findId)
// POST /search
router.post("/search", postQuery)

module.exports = router;
