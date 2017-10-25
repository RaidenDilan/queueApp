angular
  .module('queueApp')
  .controller('SubmissionsIndexCtrl', SubmissionsIndexCtrl);

SubmissionsIndexCtrl.$inject = ['Submission'];
function SubmissionsIndexCtrl(Submission) {
  const vm = this;

  vm.all = Submission.query();
}
