import { Sequelize, sequelize } from '../config/db.js';

const Res = sequelize.define('reserva', {
    id:{
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
    },
   nome: {
       type: Sequelize.STRING,
       allowNull: false
    },
    E_mail: {
        type: Sequelize.STRING,
        allowNull: false
     },
    data: {
       type: Sequelize.DATE,
       allowNull: false
    },
    hora: {
      type: Sequelize.STRING,
      allowNull: false
    },
    qnt:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
 })
sequelize.sync({ force: false })
    .then(() => {  
       console.log('Tabela reserva criada com sucesso!');
    })
    .catch((error) => {
       console.error('Erro ao criar tabela reserva:', error);
    });
 export default Res;