'use strict'
const store = require('./store')

const showFoodsTemplate = require('../templates/food-listing.handlebars')



const getFoodsSuccess = (data) => {
  // console.log(data)
  const showFoodsHtml = showFoodsTemplate({ foods: data.foods })
  $('.content').append(showFoodsHtml)
}

const clearFoods = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getFoodsSuccess,
  clearFoods,
  failure
}
