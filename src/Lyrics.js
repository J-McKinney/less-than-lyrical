import React, { Component } from "react";
require("dotenv").config();

var CLIENTID =
  "";
var CLIENTSECRET =
  "";
var accessToken =
  "";
var API = "https://api.genius.com/search";
var APISong = "https://api.genius.com/songs/";
var songID = "";
var maxSong = 2471960;
var songIDArr = [];

// function loopSongs() {
//   for (var i = 0; i < 2000000000; i++) {
//     songID += songIDArr
//   }
// }
// loopSongs()

var xhr = new XMLHttpRequest(); //XML HTTP Request 1,406,845,314
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 200 || xhr.status === 304) {
      // Success! Do stuff with data.
      console.log(xhr.responseText);
    }
  }
};
xhr.open("GET", APISong + songID + accessToken, true);
// xhr.open("GET", API+accessToken+ '&q=Kendrick%20Lamar', true);

xhr.send();
// console.log(xhr.status);
// console.log(xhr.statusText);
// demo = xhr.response;

class Lyrics extends Component {
  render() {
    return <div></div>;
  }
}

export default Lyrics;
