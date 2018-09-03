'use strict'
const store = require('./store')
const showFoodsTemplate = require('../templates/food-listing.handlebars')


// Response Message for User when SIGN UP
const signUpSuccess = function (data) {
  $('#user-message-signUp').html('You are Sign Up!').fadeIn().delay(3000).fadeOut()
  document.getElementById('form-signUp').reset()
  // console.log(data)
}

const signUpFail = function (data) {
  // console.log(data)
  document.getElementById('form-signUp').reset()
  $('#user-message-signUp').html('not what you expected, try again!')
}

// Response Message for User when SIGN IN

const signInSuccess = function (response) {
  store.user = response.user
  // console.log(response.user)
  document.getElementById('form-signIn').reset()
  $('#user-message-signIn').html('You are sign In!')
  // $('#myModal').modal('hide')
  $('#change-password').show()
  $('#sign-out').show()
  $('#form-createFood').show()
  $('#get-allFoods').show()
  $('.signup-portal').hide()
  $('#sign-in-button').hide()
  $('.pass-change').show()
  $('#food-content').show()
  $('#user-message-signOut').html('')
  $('.form-group').hide()
  $('.content').html('')
}

const signInFail = function (error) {
  console.log(error)
  document.getElementById('form-signIn').reset()
  $('#user-message-signIn').html('not what you expected, try again!')
}

// Response Message for User when CHANGE PASSWORD

const changePasswordSuccess = function (data) {
  // console.log(data)
  document.getElementById('change-password').reset()
  $('#user-message-passwordChange').html('You have changed your password')
}

const changePasswordFail = function (data) {
  // console.log(data)
  document.getElementById('change-password').reset()
  $('#user-message-passwordChange').html('password not changed, try again')
}

// Response Message for User when SIGN OUT

const signOutSuccess = function (data) {
  $('#user-message-signOut').html('You are sign Out!').fadeIn().delay(3000).fadeOut()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#user-message-signIn').html('')
  $('#sign-in-button').show()
  $('.signup-portal').show()
  $('#form-createFood').hide()
  $('#get-allFoods').hide()
  $('.pass-change').hide()
  $('#food-content').hide()
  $('.form-group').show()
  document.getElementById('form-createFood').reset()
  document.getElementById('change-password').reset()
}

const signOutFail = function (data) {
  $('#user-message-signOut').html('try again')
}

// RESOURCE CREATE FOOD

const createFoodSuccess = function (data) {
  $('#create-food-message').html('You have Successfully created your Food').fadeIn().delay(3000).fadeOut()
  document.getElementById('form-createFood').reset()
}
const createFoodFail = function (data) {
  $('#create-food-message').html('Your Food was not successfully created')
}

// SHOW LISTING IF SUCCESS

const showFoodsSuccess = (data) => {
  // console.log('data is', data)
  if (data.foods.length !== 0) {
    const showFoodsHtml = showFoodsTemplate({ foods: data.foods })
    $('.content').html(showFoodsHtml).fadeIn()
  } else {
    $('.content').html('You do not have any foods yet').fadeIn().delay(1500).fadeOut()
  }
  // console.log(data.foods.length)
}

const showFoodsFail = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePasswordSuccess,
  changePasswordFail,
  signOutSuccess,
  signOutFail,
  createFoodSuccess,
  createFoodFail,
  showFoodsSuccess,
  showFoodsFail
}
