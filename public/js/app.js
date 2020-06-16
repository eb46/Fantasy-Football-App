const app = angular.model('FootballApp', [])

app.controller('MainController', ['$http', function($http){

  this.createPlayer = () => {
    $http(
      {
        method: 'POST',
        url: '/football',
        data: {
          name: this.name,
          team: this.team,
          salary: this.salary,
          image: this.image,
          drafted: false
        }
      }
    ).then((response) => {
      console.log(response);
    },
      (error) => {
        console.log(error);
      }
    )
  }

  this.getPlayers = () => {
    $http(
      {
        method: 'GET',
        url: '/football'
      }
    ).then((response) => {
      this.players = response.data
      console.log(this.players);
    },
      (error) => {
        console.log(error);
      }
    )
  }

  this.deletePlayer = (player) => {
    $http(
      {
        method: 'DELETE',
        url: '/football/' + player._id
      }
    ).then((response) => {
      this.getPlayers()
      console.log(resonse);
    },
      (error) => {
        console.log(error);
      }
    )
  }

  this.updatePlayer = (player) => {
    $http(
      {
        method: 'PUT',
        url: '/football/' + player._id,
        data: {
          name: player.name,
          team: player.team,
          salary: player.salary,
          image: player.image,
          drafted: player.drafted
        }
      }
    ).then((response) => {
      console.log(response);
    },
      (error) => {
        console.log(error);
      }
    )
  }

  this.getPlayers()

}])
