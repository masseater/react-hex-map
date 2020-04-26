import React from "react";
import "./Hex.scss";

function Hexagon() {
  return (
    <div className="hexagon">
      <div className="top"></div>
      <div className="middle"></div>
      <div className="bottom"></div>
    </div>
  );
}

function Row(count: number, isEven: boolean) {
  const hexagons = [];
  for (let i = 0; i < count - (isEven ? 1 : 0); i++) {
    hexagons.push(Hexagon());
  }

  let className = "row";
  if (isEven) {
    className += " even";
  }
  return <div className={className}>{hexagons}</div>;
}

export function Grid(row: number, column: number) {
  const rows = [];
  for (let i = 0; i < row; i++) {
    rows.push(Row(column, i % 2 !== 0));
  }
  return <div className="grid">{rows}</div>;
}
