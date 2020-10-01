const createGuts = require('../helpers/model-guts')
const name = 'exemple'
const tableName = 'exemple'

const selectableProps = ['id', 'name']

module.exports = (knex) => {
  const guts = createGuts({
    knex,
    name,
    tableName,
    selectableProps,
  })
  return {
    ...guts,
  }
}
