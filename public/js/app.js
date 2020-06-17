const app = angular.module('FootballApp', [])

app.controller('FootballController', ['$http', function($http){
  this.players = [];
  this.newPlayer = {};

  this.createPlayer = () => {
    $http(
      {
        method: 'POST',
        url: '/football',
        data: {
          name: this.newPlayer.name,
          team: this.newPlayer.team,
          salary: this.newPlayer.salary,
          image: this.newPlayer.image,
          drafted: false
        }
      }
    ).then((response) => {
      this.newPlayer = {};
      this.players.unshift(response.data)
      this.newPlayer = {}
      console.log(response);
    },
      (error) => {
        console.log(error);
      }
    )
  };

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
  };

  this.deletePlayer = (player) => {
    $http(
      {
        method: 'DELETE',
        url: '/football/' + player._id
      }
    ).then((response) => {
      const playerIndex = this.players.find(player => player._id === response.data._id);
      this.players.splice(playerIndex, 1)
      console.log(response.data);
    },
      (error) => {
        console.log(error);
      }
    )
  };

  this.updatePlayer = (player) => {
    player.edit = false;
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
  };

  this.toggleEdit = player => {
      player.edit = !player.edit;
  };

  this.draftPlayer = player => {
    player.drafted = true;
    this.updatePlayer(player)
    console.log(this.drafted);
  };


  this.sortPlayers = ($event, property, direction) => {
        this.players.sort((a, b) => {
            console.log(a[property]);
            if(property === 'salary') {
                return (a[property] - b[property]) * direction;
            } else {
                return a[property].localeCompare(b[property]) * direction;
            }
        })
  };

  this.getPlayers();

}]);
