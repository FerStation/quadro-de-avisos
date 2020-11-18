//Conexão com o banco de dados
const db = require('../../knexfile.js')

/**
 * Inserir um aviso no banco de dados
 * @param {object} aviso O aviso deve estar no seguinte formato: 
 * {titulo: <string>, data: <string>, mensagem: <string>}
 * @returns {object} Mensagem de sucesso ou de erro
 */
function salvar(aviso) {
  return db.insert(aviso).into('avisos')
    .then( _ => {
      return { tipo: "sucesso", corpo: "Dados inseridos com sucesso!" }
    })
    .catch(erro => {
      return { tipo: "erro", corpo: "Erro: " + erro }
    })
}//fim do salvar

/**
 * Seleciona todos os avisos cadastrados
 * @returns {object} Objeto com todos os avisos cadastrados ou
 * uma mensagem de erro
 */
function selecionarTodos(){
  return db.select('*').from('avisos')
    .then(avisos =>{ return avisos })
    .catch(erro => {
      return { tipo: "erro", corpo: "Erro: " + erro }
    })
}//fim do selecionarTodos

/**
 * Função que exclui um aviso do banco de dados
 * @param {int} id Id do aviso
 */
function excluir(id){
  return db.del().from('avisos').where('ID_avisos',id)
}

module.exports = {salvar, selecionarTodos, excluir}
