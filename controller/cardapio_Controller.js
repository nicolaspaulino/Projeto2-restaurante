import Cardapio from "../models/Cardapio.js"

const itens = [
    { tipo: 'Salgado', produto: 'Coxinha', preço: 6.00 },
    { tipo: 'Salgado', produto: 'Lasanha', preço: 19.99 },
    { tipo: 'Salgado', produto: 'Macarrão alho e óleo', preço: 16.25 },
    { tipo: 'Salgado', produto: 'Feijoada', preço: 22.50 },
    { tipo: 'Salgado', produto: 'Pastel', preço: 9.99 },
    { tipo: 'Sobremesa', produto: 'Milkshake(700ml)', preço: 14.00 },
    { tipo: 'Sobremesa', produto: 'Brownie', preço: 12.50 },
    { tipo: 'Bebida', produto: 'Caldo de cana(1l)', preço: 10.00 },
    { tipo: 'Bebida', produto: 'Suco de laranja(1l)', preço: 10.00 }
  ];

const CardapioController = {

    listallprodutos: async (req, res) =>
    {
        try {
            const mensagens = await Cardapio.findAll({
                order: [['createdAt', 'DESC']]
            });
            res.render('cardapio', {
                cardapio: mensagens.map(msg => msg.toJSON())
              });              
        } catch (error) {
            console.error("Erro ao buscar mensagens:", error);
            res.status(500).send('Erro ao buscar mensagens.');
        }
    },

    adicionarItens: async() => 
    {
        await Cardapio.destroy({ truncate: true });
        try {
            const novosItens = await Cardapio.bulkCreate(itens);
            console.log('Itens adicionados:', novosItens.map(i => i.toJSON()));
        } catch (error) {
            console.error('Erro ao adicionar itens:', error);
  }
    }
   
}
CardapioController.adicionarItens()
export default CardapioController;