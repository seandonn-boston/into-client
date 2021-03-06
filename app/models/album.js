import DS from 'ember-data'

export default DS.Model.extend({
  artist: DS.attr('string'),
  title: DS.attr('string'),
  user: DS.belongsTo('user')
})
