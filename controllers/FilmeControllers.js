import express from "express";

const router = express.Router();

router.get("/filme", (req, res) =>{
    res.render("filmeInformacoes");
});

router.get("/novoFilme", (req, res) =>{
    res.render("filmeNovo");
});

export default router;