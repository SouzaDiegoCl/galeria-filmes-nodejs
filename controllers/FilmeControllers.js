import express from "express";
import multer from "multer";
import Filme from "../models/Filmes.js";
const upload = multer({ dest: "public/img/uploads" });

const router = express.Router();

router.get("/filme", (req, res) => {
  res.render("filmeInformacoes");
});

router.get("/novoFilme", (req, res) => {
  res.render("filmeNovo");
});

router.post(
  "/upload",
  upload.fields([
    {name: 'poster_image_name', maxCount: 1},
    {name: 'wallpaper_image_name', maxCount: 1}
  ]),
  (req, res) => {      
    const poster_image_name = req.files['poster_image_name'][0];    
    const wallpaper_image_name = req.files['wallpaper_image_name'][0];
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    const distribuidora = req.body.produtora;
    const diretor = req.body.diretor;
    const ano = req.body.ano;

    Filme.create({
      poster_image_name: poster_image_name.originalname,
      wallpaper_image_name: wallpaper_image_name.originalname,
      titulo: titulo,
      descricao: descricao,
      distribuidora: distribuidora,
      diretor: diretor,
      ano: ano,
    })
      .then(() => {
        res.redirect("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

export default router;
