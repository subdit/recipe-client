'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetFoods = (event) => {
  event.preventDefault()
  api.getFoods()
    .then(ui.getFoodsSuccess)
    .catch(ui.failure)
}
$('.content').data('id') // return food id
const onClearFoods = (event) => {
  event.preventDefault()
  ui.clearFoods()
}
const onRemoveFoods = (event) => {
  event.preventDefault()
  const data = $(event.target).parent().data('id')
  console.log('click', data)
  api.deleteFoods(data)
  //  .then(ui.removeFoodsSuccess)
  //  .catch(ui.failure)
}
const addHandlers = () => {
  $('#getFoodsButton').on('click', onGetFoods)
  $('#clearFoodsButton').on('click', onClearFoods)
  $('#content').on('click', '#removeFoodsButton', onRemoveFoods)
}

module.exports = {
  addHandlers
}
