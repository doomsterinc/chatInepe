angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Maicon Giovani',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/3342851691/f99896f29b4ec2185a98279dd02d5d2b_400x400.jpeg' 
  }, {
    id: 1,
    name: 'Felipe Rosa Reis',
    lastText: 'Hey, it\'s me',
    face: 'https://pbs.twimg.com/profile_images/575368167452721153/4lA8Lwzd_400x400.jpeg'
  }, {
    id: 2,
    name: 'Rafael Brites',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'David Marques',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Roger',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

ails:



myApp.controller ('EmailCtrl', ['$scope', function ($scope) {

    // crie um Objeto emails
    $scope.emails = {};

    // simulando dados que nós iremos receber de volta do servidor
    // este é um ARRAY de OBJETOS
    $scope.emails.messages = [{
      "from": "Steve Jobs",
      "subject": "I think I'm holding my phone wrong :/,
      sent": "2013-10-01T08:05:59Z"
    },{
      "from": "Ellie Goulding",
      "subject": "I've got Starry Eyes, lulz",
      "sent": "2013-09-21T19:45:00Z"
    },{
      "from": "Michael Stipe",
      "subject": "Everybody hurts, sometimes.",
      "sent": "2013-09-12T11:38:30Z"
    },{
      "from": "Jeremy Clarkson",
      "subject": "Think I've found the best car... In the world",
      "sent": "2013-09-03T13:15:11Z"
    }];
  }]);