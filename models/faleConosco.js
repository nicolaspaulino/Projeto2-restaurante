import { Sequelize, sequelize } from '../config/db.js';

const Fale = sequelize.define('faleConosco', {
    id:{
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
    },
   nome: {
       type: Sequelize.STRING,
       allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
     },
    comentario: {
       type: Sequelize.TEXT,
       allowNull: false
    }
 })
 sequelize.sync({ force: false })
    .then(() => {  
       console.log('Tabela faleConosco criada com sucesso!');
    })
    .catch((error) => {
       console.error('Erro ao criar tabela faleConosco:', error);
    });
 export default Fale;