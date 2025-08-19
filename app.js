import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { engine } from "express-handlebars";
import { fileURLToPath } from "url";
import faleConoscoRoutes from './routes/faleConoscoRoutes.js';
import ReservaRoutes from './routes/reservaRoutes.js';
import CardapioRoutes from './routes/cardapioRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "view"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/cardapio', CardapioRoutes);
app.use('/reserva', ReservaRoutes);
app.use('/fale', faleConoscoRoutes);

app.engine("handlebars", engine({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");




app.get("/", (req, res) => {
    res.render("principal");
});


app.listen(3000, () => {
    console.log("Servidor rodando na url http://localhost:3000");
});
