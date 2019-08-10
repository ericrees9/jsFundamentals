// * Object
// In simple terms, an object is a container that holds data
// contains key value pairs

let netflix = {
    id: 9,
    name: "Super Store",
      season1: {
        seasonInfo: {
          episodeInfo : [
            { episode: 1, episodeName: "Pilot"},
            { episode: 2, episodeName: "Magazine Profile"},
            { episode: 3, episodeName: "Shots and Salsa"},
            { episode: 4, episodeName: "Mannequin"},
            { episode: 5, episodeName: "Shoplifter"}
          ]
        }
      },
      season2: {
        seasonInfo: {
          episodeInfo : [
            { episode: 1, episodeName: "Secret Shopper"},
            { episode: 2, episodeName: "Color Wars"},
            { episode: 3, episodeName: "Wedding Day Sale"},
            { episode: 4, episodeName: "All-Nighter"},
            { episode: 5, episodeName: "Demotion"},
            { episode: 6, episodeName: "Labor"}
          ]
        }
      },
      season3: {}
    };

// Dot Notation
// Helps us access the information inside an object
// If we console.log the key, it'll give us that value connected to the key

//console.log("All Data: ", netflix);
//console.log(netflix.season2.seasonInfo.episodeInfo[1].episodeName);

// - Challenge
// Pick an episode to show
// Using dot notation, walk through the object and print off both the episode and the episode name

console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName); 
console.log(" was episode "); 
console.log(netflix.season1.seasonInfo.episodeInfo[3].episode); 
console.log(" that season.");

// JSON
// data comes back as a long string. Why do we JSONify?
var json = {
    "workbench.colorTheme": "One Dark+ (Sublime)",
    "window.zoomLevel": 3,
    "files.exclude": {
      "**/.git": true,
      "**/.DS_Store": true,
      "**/*.js": {
        "when": "$(basename).ts"
      },
      "**/*.js.map": {
        "when": "$(basename)"
      }
    },
    "editor.fontFamily": "Monaco, 'Courier New', monospace",
    "editor.detectIndentation": false,
    "editor.letterSpacing": 0,
    "editor.tabSize": 2,
    "files.autoSave": "off",
    "editor.wordWrap": "on",
    "extensions.ignoreRecommendations": true,
    "[html]": {},
    "files.associations": {
      "*.html": "html",
      "*.js": "javascriptreact"
    },
    "html.format.indentInnerHtml": true,
    "editor.fontSize": 11,
    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.port": 3500,
    "[javascriptreact]": {}
  }