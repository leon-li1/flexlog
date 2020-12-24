import styled from "styled-components";
import { useState } from "react";

export default function WelcomeCard() {
  const [name, setName] = useState("Leon");

  return (
    <Card>
      <CardTitle>Welcome back,</CardTitle>
      <NameLabel>{name}</NameLabel>
    </Card>
  );
}

const CardTitle = styled.h2`
  color: #fff;
`;

const Card = styled.div`
  width: 45vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  padding: 1.5em 2em;
  margin: 2em;
  border-radius: 36px;
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.5);
  background: linear-gradient(282.47deg, #0c3360 0.56%, #234771 86.94%), #01c1cf;
`;

const NameLabel = styled.p`
  font-size: 2.5em;
  font-weight: 800;
`;
