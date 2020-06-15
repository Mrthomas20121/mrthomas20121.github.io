
var getLength = function (nb) {
    var player = new Array(nb);
    return player;
  }
var getRandomString = function () {
    $('.output').empty();
    var nb = parseInt(document.getElementById('nbPlayer').value);
    var player = getLength(nb);
    for (var i=0; i<player.length; i++) {
      player[i]=document.getElementById('player' + i+1).value;
    }
    var role = getLength(nb);
    switch (role.length) {
    default :
    document.getElementById('output').classList.add('error');
    document.getElementById('output').innerHTML+="6 players are required!"
    break;
    case 3 :
    //do nothing
    document.getElementById('output').classList.add('error');
    document.getElementById('output').innerHTML+="6 players are required!"
    break;
    case 4 :
    // do nothing
    document.getElementById('output').classList.add('error');
    document.getElementById('output').innerHTML+="6 players are required!"
    break;
    case 5 :
    // do nothing
    document.getElementById('output').classList.add('error');
    document.getElementById('output').innerHTML+="6 players are required!"
    break;
    case 6 :
    role = ["witch", "hunter", "werewolf", "werewolf", "oracle", "lone wolf"];
    break;
    case 7 :
    role = ["witch", "hunter", "villager", "werewolf", "oracle", "werewolf", "lone wolf"];
    break;
    case 8 :
    role = ["witch", "hunter", "villager", "werewolf", "oracle", "werewolf", "lone wolf", "werewolf"];
    break;
    case 9 :
    role = ["witch", "hunter", "villager", "werewolf", "oracle", "werewolf", "lone wolf", "werewolf", "spy"];
    break;
    case 10 :
    role = ["witch", "hunter", "villager", "werewolf", "oracle", "werewolf", "werewolf", "werewolf", "lone wolf", "spy"];
    break;
    case 11 :
    role = ["witch", "hunter", "villager", "werewolf", "oracle", "werewolf", "werewolf", "werewolf", "villager", "spy", "lone wolf"];
    break;
    case 12 :
    role = ["witch", "hunter", "villager", "werewolf", "oracle", "werewolf", "werewolf", "werewolf", "villager", "spy", "lone wolf", "amor"];
    break;
    case 13 :
    role = ["witch", "hunter", "villager", "werewolf", "oracle", "werewolf", "werewolf", "werewolf", "villager", "spy", "lone wolf", "amor", "werewolf"];
    break;
    case 14 :
    role = ["witch", "hunter", "villager", "werewolf", "oracle", "werewolf", "werewolf", "werewolf", "villager", "spy", "lone wolf", "amor", "werewolf", "healer"];
    break;
    case 15 :
    role = ["witch", "hunter", "villager", "werewolf", "oracle", "werewolf", "werewolf", "werewolf", "villager", "spy", "lone wolf", "amor", "werewolf", "healer", "villager"];
    break;
    }

      for (i = role.length, i>-1; i--; ) {
            var random =role.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
            document.getElementById('output').innerHTML+='<span><b>' + player[i] + "</b>:\n " + random + '</span>';
      }
  }
  var addInput = function () {
    $('.input').empty();
    var player = getLength(parseInt(document.getElementById('nbPlayer').value));
    var div = document.getElementById('input');
    for (var i = 0; i<player.length; i++) {
    var input = document.createElement('input');
    input.placeholder="insert player name here";
    input.id="player" + i+1;
    input.classList.add('form-control');
    var form_group = document.createElement('div');
    form_group.classList.add('form-group');
    form_group.classList.add('col-md-6');
    div.appendChild(form_group);
    form_group.appendChild(input);
  }
}
var del = function() {
    var player = getLength(parseInt(document.getElementById('nbPlayer').value));
    for (var i = 0; i<player.length; i++) {
      $('#input').empty();
    }
}
