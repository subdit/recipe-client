'use strict'

const store = require('../store')
const config = require('../config')

// const getFoods = function () {
//  return $.ajax({
//    url: config.apiUrl + '/foods'
//  })
// }
// const deleteFoods = function (foodId) {
//   return $.ajax({
//     url: config.apiUrl + '/foods/' + foodId,
//     method: 'DELETE'
//   })
// }
// THIS IS RESOURCES
const signUp = function (data) {
  console.log('api URL is', config.apiUrl)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}
const signIn = function (data) {
  console.log('api URL is', config.apiUrl)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}
const changePassword = function (data) {
  console.log('store in change password', store)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}
const signOut = function (data) {
  console.log('api URL is', config.apiUrl)
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const createFoods = function (food) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/foods',
    data: food,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// THIS IS SHOW RESOURCE HANDLEBARS

const showFoods = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/foods',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// THIS IS SHOW OPEN RESOURCE HANDLEBARS

// const showFoods = function (data) {
//   return $.ajax({
//     method: 'GET',
//     url: config.apiUrl + '/foods',
//     data: data
//   })
// }

const deleteFoods = (foodsId) => {
  return $.ajax({
    url: config.apiUrl + '/foods/' + foodsId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateFoods = (foodsId, data) => {
  return $.ajax({
    url: config.apiUrl + '/foods/' + foodsId,
    method: 'PATCH',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createFoods,
  showFoods,
  deleteFoods,
  updateFoods
}
