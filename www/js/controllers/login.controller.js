angular
  .module('chatInepe')
  .controller('LoginCtrl', LoginCtrl);
 
function LoginCtrl ($scope, $state, $ionicLoading, $ionicPopup, $log) {
 
  $scope.data = {};
  $scope.login = login;
 
  ////////////
 
  function login () {
    if (_.isEmpty($scope.data.phone)) {
      return;
    }
 
    var confirmPopup = $ionicPopup.confirm({
      title: 'Número para confirmação: ',
      template: '<div>' + $scope.data.phone + '</div><div>Seu número de telefone está correto?</div>',
      cssClass: 'text-center',
      okText: 'Sim',
      okType: 'button-positive button-clear',
      cancelText: 'Editar',
      cancelType: 'button-dark button-clear'
    });
 
    confirmPopup.then(function (res) {
      if (! res) {
        return;
      }
 
      $ionicLoading.show({
        template: 'Enviando código de verificação...'
      });
 
      Accounts.requestPhoneVerification($scope.data.phone, function (err) {
        $ionicLoading.hide();
 
        if (err) {
          return handleError(err);
        }
 
        $state.go('Confirmação', { phone: $scope.data.phone });
      });
    });
  }
 
  function handleError (err) {
    $log.error('Erro Login', err);
 
    $ionicPopup.alert({
      title: err.reason || 'Login ou senha incorretos!',
      template: 'Por favor, tente novamente!,
      okType: 'button-positive button-clear'
    });
  }
}