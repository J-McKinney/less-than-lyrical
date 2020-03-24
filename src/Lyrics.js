import React, { Component } from "react";
var analyrics = require("analyrics");
analyrics.setToken(
  ""
);

function Lyrics() {
  render() {
    analyrics.getSong("Can't Take My Eyes off You", function(song) {
      console.log(song.title);
      console.log(song.artist);
      console.log(song.url);
      console.log(song.lyrics);
      console.log(song.frequency);
      console.log(song.sentiment);
    });
    return <div></div>;
  }
}

export default Lyrics;
