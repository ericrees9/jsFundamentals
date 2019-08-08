// * Object.keys() and Object.values()
// Object.keys() is a method that returns an array of a given object's own property names
// Object.values() is a method that returns an array of a given object's own enumerable property values


let spaceJam = {
    toonSquad: {
      human: 'Michael Jordan',
      rabbit1: 'Bugs Bunny',
      rabbit2: 'Lola Bunny',
      duck: 'Daffy Duck',
      tDevil: 'Tasmanian Devil',
      bird: 'Tweety',
      cat: 'Sylvester',
      pig: 'Porky Pig'
    },
    monstars: {
      0: 'Bupkus',
      1: 'Bang',
      2: 'Nawt',
      3: 'Pound',
      4: 'Blanko'
    },
    nbaPlayers: {
      phoenixSuns: 'Charles Barkley',
      newJerseyNets: 'Shawn Bradley',
      newYorkNicks: 'Patrick Ewing',
      charlotteHornets1: 'Larry Johnson',
      charlotteHornets2: 'Muggsy Bogues'
    }
  }

//console.log(Object.keys(spaceJam.toonSquad)); // returns an array of the player types on toonSquad

//console.log(Object.keys(spaceJam.toonSquad.duck)); // returns an array of numbers that are the index keys for the letters in "Daffy Duck"

console.log(Object.values(spaceJam.toonSquad.duck)); 
