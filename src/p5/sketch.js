import React, { Component } from 'react';

export default function sketch (p) {
  let rotation = 1;

  p.setup = function () {
    p.createCanvas(600, 400, p.WEBGL);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation){
      rotation = props.rotation * Math.PI / 180;
    }
  };

  p.draw = function () {
    p.background(70);
    p.noStroke();
    p.push();
    p.rotateY(rotation);
    p.box(100);
    p.box(100);
    p.pop();
  };

};
