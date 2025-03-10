function gameObject(){
    const obj={
        home:{
          teamName:'LA LAKERS',
          colors:['white','black'],
          players:{
            'Alan Anderson':{
                number:0,
                shoe: 16,
                points:22,
                rebounds:12,
                assists:12,
                steals:3,
                blocks:1,
                slamDunks:1
            },
            'Reggie Evans	':{
                number:30,
                shoe: 14,
                points:12,
                rebounds:12,
                assists:12,
                steals:12,
                blocks:12,
                slamDunks:7
            },
            'Brook Lopez':{
                number:11,
                shoe: 17,
                points:17,
                rebounds:19,
                assists:10,
                steals:3,
                blocks:1,
                slamDunks:15
            },
            'Mason Plumlee':{
                number:1,
                shoe: 19,
                points:26,
                rebounds:12,
                assists:6,
                steals:3,
                blocks:8,
                slamDunks:5
            },
            'Jason Terry':{
                number:31,
                shoe: 15,
                points:19,
                rebounds:2,
                assists:2,
                steals:4,
                blocks:11,
                slamDunks:1
            },
          },

        },
        away:{
                teamName:'Charlotte Hornets',
                colors:['Turquoise','Purple'],
                players:{
                  'Jeff Adrien':{
                      number:4,
                      shoe: 16,
                      points:10,
                      rebounds:1,
                      assists:1,
                      steals:2,
                      blocks:7,
                      slamDunks:2
                  },
                  'Bismak Biyombo':{
                      number:0,
                      shoe: 16,
                      points:12,
                      rebounds:4,
                      assists:7,
                      steals:7,
                      blocks:15,
                      slamDunks:10
                  },
                  'DeSagna Diop':{
                      number:2,
                      shoe: 14,
                      points:24,
                      rebounds:12,
                      assists:12,
                      steals:4,
                      blocks:5,
                      slamDunks:5
                  },
                  'Ben Gordon':{
                      number:8,
                      shoe: 15,
                      points:33,
                      rebounds:3,
                      assists:2,
                      steals:1,
                      blocks:1,
                      slamDunks:0
                  },
                  'Brendan Haywood':{
                      number:33,
                      shoe: 15,
                      points:6,
                      rebounds:12,
                      assists:12,
                      steals:22,
                      blocks:5,
                      slamDunks:12
                  },
                },
      
              },
        }
        return obj
    }

// console.log(gameObject())


// Build a function, numPointsScored that takes in an argument of a player's name
// and returns the number of points scored for that player.

function numPointsScored(name){
 const object=gameObject()
 if(object.home.players[name]){
    return object.home.players[name].points
 }else if(object.away.players[name]){
    return object.home.players[name].points
 }
}

console.log( `Number of Points are  ${numPointsScored('Alan Anderson')} `)
// Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.
function shoeSize(name){
    const object=gameObject()
    if(object.home.players[name]){
       return object.home.players[name].shoe
    }else if(object.away.players[name]){
       return object.home.players[name].shoe
    }
   }
   
   console.log( `Shoe size is  ${numPointsScored('Alan Anderson')} `) 
// Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
function teamColors(teamName){
    const object=gameObject()
    if(object.home.teamName==teamName){
       return object.home.colors
    }else if(object.away.teamName==teamName){
       return object.away.colors
    }
   }
   
   console.log( `They wear ${teamColors('LA LAKERS')} `)
// Build a function, teamNames, that operates on the game object to return an array of the team names.

function teamNames(){
    const object=gameObject()

    const teamNames =[]
    teamNames.push(object.away.teamName)
    teamNames.push(object.home.teamName)
    return console.log(teamNames)
}
teamNames()
// Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey numbers for that team.


function playerNumbers(teamName) {
    const gameData = gameObject(); // Get game object
  
    // Determine which team to get the players from
    const team = gameData.home.teamName === teamName ? gameData.home 
                : gameData.away.teamName === teamName ? gameData.away 
                : null;
  
    if (!team) {
      console.log("Team not found");
      return [];
    }
  
    // Extract player jersey numbers
    const jerseyNumbers = Object.values(team.players).map(player => player.number);
  
    console.log(`Jersey numbers for ${teamName}:`, jerseyNumbers);
    return jerseyNumbers;
  }
  
  // Example usage:
  playerNumbers("LA LAKERS"); // [0, 30, 11, 1, 31]
  playerNumbers("Charlotte Hornets"); // [4, 0, 2, 8, 33]
  

// Build a function, playerStats, that takes in an argument of a player's name and returns an object of that player's stats. Check out the following example of the expected return value of the playerStats function:

function playerStats(playerName) {
    const gameData = gameObject(); // Get game object
  
    // Search for the player in both home and away teams
    const allPlayers = { ...gameData.home.players, ...gameData.away.players };
  
    if (allPlayers[playerName]) {
      console.log(`Stats for ${playerName}:`, allPlayers[playerName]);
      return allPlayers[playerName]; // Return player stats
    } else {
      console.log("Player not found");
      return null;
    }
  }
  
  // Example usage:
  playerStats("Brook Lopez");
  /*
  {
    number: 11,
    shoe: 17,
    points: 17,
    rebounds: 19,
    assists: 10,
    steals: 3,
    blocks: 1,
    slamDunks: 15
  }
  */
  