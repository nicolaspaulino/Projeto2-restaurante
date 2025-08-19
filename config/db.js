import Sequelize from 'sequelize';
const sequelize = new Sequelize('Restaurante', 'root', 'finite@2025', {
   host: "localhost",
   dialect: 'mysql'
});
export { Sequelize, sequelize };