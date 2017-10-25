angular
  .module('queueApp')
  .controller('SubmissionsIndexCtrl', SubmissionsIndexCtrl)
  .controller('SubmissionsNewCtrl', SubmissionsNewCtrl);

SubmissionsIndexCtrl.$inject = ['Submission'];
function SubmissionsIndexCtrl(Submission) {
  const vm = this;

  vm.all = Submission.query();
}

SubmissionsNewCtrl.$inject = ['Submission', '$state'];
function SubmissionsNewCtrl(Submission, $state) {
  const vm = this;
  vm.submission = {};

  function submissionsCreate() {
    Submission
      .save(vm.submission)
      .$promise
      .then(() => $state.go('submissionsIndex'));
  }

  vm.create = submissionsCreate;
}
