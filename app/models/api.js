import DS from 'ember-data'

export default DS.Model.extend({
  email: DS.attr('string'),
  editable: DS.attr('boolean'),
  user: DS.belongsTo('user')
})
