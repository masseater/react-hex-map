import React from "react";
import "./Hex.scss";

const Hexagon = () => {
  return (
    <div className="hexagon">
      <div className="top"></div>
      <div className="middle"></div>
      <div className="bottom"></div>
    </div>
  );
};

type RowProps = { count: number; isEven: boolean };
const Row = ({ count, isEven }: RowProps) => {
  const hexagons = [];
  for (let i = 0; i < count - (isEven ? 1 : 0); i++) {
    hexagons.push(<Hexagon key={i} />);
  }

  let className = "row";
  if (isEven) {
    className += " even";
  }
  return <div className={className}>{hexagons}</div>;
};

type GridProps = { row: number; column: number };
export const Grid = ({ row, column }: GridProps) => {
  const rows = [];
  for (let i = 0; i < row; i++) {
    rows.push(<Row key={i} count={column} isEven={i % 2 !== 0} />);
  }
  return <div className="grid">{rows}</div>;
};
