import express from 'express';
import CardapioController from '../controller/cardapio_Controller.js';

const router = express.Router();

router.get("/",CardapioController.listallprodutos)

export default router;