import styled from "styled-components";
import { useState } from "react";
import DimmedGraph from "./DimmedGraph";

export default function GraphCard() {
  const [graphTitle, setGraphTitle] = useState("Not enough data");

  return (
    <Card>
      <NameLabel>{graphTitle}</NameLabel>
      <DimmedGraph />
    </Card>
  );
}

const CardTitle = styled.h2`
  color: #fff;
`;

const Card = styled.div`
  width: 50vw;
  height: 35vh;
  display: flex;
  flex-direction: column;
  padding: 1.5em 2em;
  margin: 2em 0em 2em 2em;
  border-radius: 36px;
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.5);
  background: linear-gradient(282.47deg, #0c3360 0.56%, #234771 86.94%), #01c1cf;
`;

const NameLabel = styled.p`
  font-size: 1.2em;
  font-weight: 700;
`;
