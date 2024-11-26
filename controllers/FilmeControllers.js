import express from "express";
import multer from "multer";
import Filme from "../models/Filmes.js";
const upload = multer({ dest: "public/img/uploads" });

const router = express.Router();
//Homepage
router.get("/", (req, res) => {
  Filme.findAll().then((listaFilmes) => {
    res.render("home", {
      filmes: listaFilmes,
    });
  });
});

router.get("/filme", (req, res) => {
  res.render("filmeInformacoes");
});

//Exibir informações do filme selecionado
router.get("/filmeInfo/:id", (req, res) => {
  const filmeId = req.params.id;
  Filme.findByPk(filmeId).then((filme) => {
    res.render("filmeInfoEspecificas", { 
      filme: filme 
    });
  })
  .catch((error) => {
    console.log(error);
  });
})

router.get("/novoFilme", (req, res) => {
  res.render("filmeNovo");
});

router.post(
  "/upload",
  upload.fields([
    { name: "poster_image_name", maxCount: 1 },
    { name: "wallpaper_image_name", maxCount: 1 },
  ]),
  (req, res) => {
    const poster_image_name = req.files["poster_image_name"][0];
    const poster_image_extension = poster_image_name.originalname.substring(
      poster_image_name.originalname.lastIndexOf(".") + 1
    );
    const wallpaper_image_name = req.files["wallpaper_image_name"][0];
    const wallpaper_image_extension =
      wallpaper_image_name.originalname.substring(
        wallpaper_image_name.originalname.lastIndexOf(".") + 1
      );
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    const distribuidora = req.body.produtora;
    const diretor = req.body.diretor;
    const ano = req.body.ano;

    Filme.create({
      poster_image_name: poster_image_name.filename,
      poster_image_extension: poster_image_extension,
      wallpaper_image_name: wallpaper_image_name.filename,
      wallpaper_image_extension: wallpaper_image_extension,
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
