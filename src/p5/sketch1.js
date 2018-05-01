import React, { Component } from 'react';

export default function sketch1 (p) {
  let rotation = 4;

  p.setup = function () {
    p.createCanvas(600, 400, p.WEBGL);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation){
      rotation = props.rotation * Math.PI / 180;
    }
  };

  p.draw = function () {
    p.background(110);
    p.noStroke();
    p.push();
    p.rotateY(rotation);
    p.box(110);
    p.pop();
  };
};
