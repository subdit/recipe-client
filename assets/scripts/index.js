'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const foodsEvents = require('./auth/events')
// const config = require('./config.js')
// const store = require('./store.js')
// const events = require('./events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // your JS code goes here

  $('#change-password').hide()
  $('#sign-out').hide()
  $('#form-createFood').hide()
  $('#get-allFoods').hide()
  $('#form-updateFood').hide()
  $('.pass-change').hide()

  // ADD AUTH
  // $('#' + 'signupButton').modal('toggle')
  $('#form-signUp').on('submit', foodsEvents.onFormSignUp)
  $('#form-signIn').on('submit', foodsEvents.onFormSignIn)
  $('#change-password').on('submit', foodsEvents.onChangePassword)
  $('#sign-out').on('click', foodsEvents.onSignOut)

  // ADD RESOURCE
  $('#form-createFood').on('submit', foodsEvents.onCreateFood)
  $('#get-allFoods').on('click', foodsEvents.onShowAllFoods)
  $('#food-content').on('click', '.remove-button', foodsEvents.onDeleteShownFoods)

  // $('#food-content').on('click', '.update-button', foodsEvents.openUpdateform)
  // $('#food-content').on('click', '.update-button', function (event) {
  //   debugger
  //   $('#form-updateFood').show()
  // })
  $('#food-content').on('submit', '.form-updatefood', foodsEvents.onUpdateShownFoods)
})
