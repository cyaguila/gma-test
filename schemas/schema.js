import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import car from './car'
import webSettings from './webSettings'

export default createSchema({
  name: 'mySchema',
  types: schemaTypes.concat([
    car,
    webSettings
  ])
})
