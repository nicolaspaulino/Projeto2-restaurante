import { Sequelize, sequelize } from '../config/db.js';

const Cardapio = sequelize.define('cardapio', {
    id:{
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false
     },
    produto: {
       type: Sequelize.STRING,
       allowNull: false
    },
    preço: {
        type: Sequelize.DOUBLE,
        allowNull: false
     },
 })
 sequelize.sync({ force: false })
    .then(() => {  
       console.log('Cardapio criado com sucesso!');
    })
    .catch((error) => {
       console.error('Erro ao criar cardapio:', error);
    });
 export default Cardapio;