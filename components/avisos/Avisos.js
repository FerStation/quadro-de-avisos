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
 * Alterar um aviso no banco de dados
 * @param {object} aviso O aviso deve estar no seguinte formato: 
 * {titulo: <string>, data: <string>, mensagem: <string>}
 * @param {int} id ID do aviso
 * @returns {object} Mensagem de sucesso ou de erro
 */
function editar(aviso, id){
  return db('avisos').where('ID_aviso', id).update(aviso)
  .then( _ => {
    return { tipo: "sucesso", corpo: "Aviso alterado com sucesso!" }
  })
  .catch(erro => {
    return { tipo: "erro", corpo: "Erro: " + erro }
  })
}//fim do editar

/**
 * Seleciona todos os avisos cadastrados
 * @returns {object} Objeto com todos os avisos cadastrados ou
 * uma mensagem de erro
 */
function selecionarTodos(){
  return db.select('*').from('avisos').orderBy('data','DESC')
    .then(avisos =>{ return avisos })
    .catch(erro => {
      return { tipo: "erro", corpo: "Erro: " + erro }
    })
}//fim do selecionarTodos

/**
 * Seleciona um aviso
 * @param {*} id ID do aviso que será selecionado
 * @returns {object} Objeto com o aviso selecionado
 */
function selecionarAviso(id){
  return db.select().from('avisos').where('ID_aviso',id).first()
    .then(aviso => { return aviso })
    .catch(erro => {
      return { tipo: "erro", corpo: "Erro: " + erro }
    })
}//fim do selecionarAviso

/**
 * Função que exclui um aviso do banco de dados
 * @param {int} id Id do aviso
 */
function excluir(id){
  return db.del().from('avisos').where('ID_aviso',id)
}

module.exports = {
  salvar, 
  selecionarTodos, 
  selecionarAviso, 
  excluir,
  editar
}
