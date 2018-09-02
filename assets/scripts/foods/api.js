'use strict'

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

module.exports = {
  getFoods,
  deleteFoods
}
