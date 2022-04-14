import React from "react";
import * as d3 from "d3";
import UnlabeledNode from "./UnlabeledNode";
import Number from "../Number";

class LabeledNode {
  constructor(ref, circleId, textId, cx, cy, text, visibility, textColor) {
    this.circle = new UnlabeledNode(ref, circleId, cx, cy, visibility);
    this.text = new Number(ref, textId, cx, cy, text, textColor, visibility);
  }
}

export default LabeledNode;
