import styled from "styled-components";
import { useState } from "react";

export default function PointsCard() {
  const [points, setPoints] = useState(129);

  return (
    <Card>
      <PointsLabel>{points}</PointsLabel>
      <CardTitle>FLEX POINTS</CardTitle>
    </Card>
  );
}

const CardTitle = styled.h2`
  color: #fff;
`;

const Card = styled.div`
  width: 20vw;
  height: 35vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5em 2em;
  margin: 2em 0 0;
  border-radius: 36px;
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.5);
  background: linear-gradient(282.47deg, #0c3360 0.56%, #234771 86.94%), #01c1cf;
`;

const PointsLabel = styled.p`
  font-size: 2.5em;
  font-weight: 1000;
  line-height: 1;
`;
