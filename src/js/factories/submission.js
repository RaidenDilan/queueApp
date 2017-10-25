angular
  .module('queueApp')
  .factory('Submission', Submission);

Submission.$inject = ['$resource'];
function Submission($resource) {
  return new $resource('/api/submissions/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
