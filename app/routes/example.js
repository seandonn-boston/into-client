import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('example')
  },
  actions: {
    deleteExample (example) {
      example.destroyRecord()
    },
    updateExample (example) {
      example.save()
    }
  }
})
