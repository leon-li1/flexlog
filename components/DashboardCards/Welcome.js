import styled from "styled-components";
import { useState } from "react";
import Star from "./Star";
import SVGThing from "./SVGThing";

export default function WelcomeCard() {
  const [name, setName] = useState("Leon");
  const [stars, setStars] = useState(3);

  return (
    <Card>
      <CardTitle>Welcome back,</CardTitle>
      <NameLabel>{name}</NameLabel>
      <StyledSVG dateText={"Dec 20"} />
      <StarsContainer>
        {[...Array(stars).keys()].map((key) => (
          <Star key={key} />
        ))}
      </StarsContainer>
    </Card>
  );
}

const CardTitle = styled.h2`
  color: #fff;
`;

const Card = styled.div`
  width: 45vw;
  height: 35vh;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1.5em 2em;
  margin: 2em 2em 0 0;
  border-radius: 36px;
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.5);
  background: linear-gradient(282.47deg, #0c3360 0.56%, #234771 86.94%), #01c1cf;
`;

const StarsContainer = styled.div`
  flex-direction: row;
  align-self: flex-end;
  justify-self: flex-start;
  position: absolute;
  bottom: 1.4em;
  right: 2em;
`;

const NameLabel = styled.p`
  font-size: 4em;
  font-weight: 1000;
  line-height: 1;
`;

const StyledSVG = styled(SVGThing)`
  position: absolute;
  bottom: 3.5em;
  left: 0;
  width: 100%;
  display: block;
  padding: 0;
  margin: 0;
  height: auto;
`;
