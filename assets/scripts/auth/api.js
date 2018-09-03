'use strict'

const store = require('../store')
const config = require('../config')

const getFoods = function () {
  return $.ajax({
    url: config.apiUrl + '/foods'
  })
}
const deleteFoods = function (foodId) {
  return $.ajax({
    url: config.apiUrl + '/foods/' + foodId,
    method: 'DELETE'
  })
}
// THIS IS RESOURCES

const createFood = function (foodId) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/foods',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// THIS IS SHOW RESOURCE HANDLEBARS

const showFoods = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/foods',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// THIS IS SHOW OPEN RESOURCE HANDLEBARS

const showFoods = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/foods',
    data: data
  })
}

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
