'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui.js')


// THIS IS AUTH EVENTS
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



const onFormSignUp = function(event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
  // console.log(data)
}

const onFormSignIn = function(event) {
  event.preventDefault()
  // console.log(event)
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

const onChangePassword = function(event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFail)
}

const onSignOut = function(event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}
// THIS IS RESOURCE EVENTS

const onCreateFood = function(event) {
  event.preventDefault()
  // console.log(event)
  const data = getFormFields(event.target)
  api.createFood(data)
    .then(ui.createFoodSuccess)
    .catch(ui.createFoodFail)
  // console.log(data)
}

// THIS IS HANDLEBARS FOR LISTING RESOURCE

const onShowAllFoods = function(event) {
  // console.log('onShowAllGoals')
  event.preventDefault()
  api.showFoods()
    .then(ui.showFoodsSuccess)
    .catch(ui.showFoodsFail)
}

// THIS IS FOR DELETING A FOOD ON RESOURCE

const onDeleteShownFoods = (event) => {
  event.preventDefault()
  // console.log('onDeleteShownGoals')
  const foodId = $(event.target).closest('button').attr('data-id')
  // console.log(foodId)
  api.deleteGoals(goalId)
    .then(() => onShowAllFoods(event))
    .catch(ui.showFoodsFail)
}

// FOR UPDATING A FOOD ON RESOURCE

const onUpdateShownFoods = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const foodId = $(event.target).attr('data-id')
  // console.log(foodId)
  api.updateFoods(foodId, data)
    .then(() => onShowAllFoods(event))
    .catch(ui.updateFoodsFail)
}

const addHandlers = () => {
  $('#getFoodsButton').on('click', onGetFoods)
  $('#clearFoodsButton').on('click', onClearFoods)
  $('#content').on('click', '#removeFoodsButton', onRemoveFoods)
}

module.exports = {
  onFormSignUp,
  onFormSignIn,
  onChangePassword,
  onSignOut,
  onCreateFood,
  onShowAllFoods,
  onDeleteShownFoods,
  onUpdateShownFoods
}
