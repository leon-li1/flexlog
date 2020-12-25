import styled from "styled-components";
import { useState } from "react";

export default function QuoteCard() {
  const [quote, setQuote] = useState(
    `"Strength does not come from the physical capacity. 
    It comes from an indomitable will.” – Ghandi`
  );

  return (
    <Card>
      <CardTitle>Quote of the day:</CardTitle>
      <QuoteText>{quote}</QuoteText>
    </Card>
  );
}

const CardTitle = styled.h2`
  color: #fff;
  margin-bottom: 3.5em;
`;

const Card = styled.div`
  width: 40vw;
  height: 35vh;
  display: flex;
  flex-direction: column;
  padding: 1.5em 2em;
  margin: 2em 0em 2em 0em;
  border-radius: 36px;
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.5);
  background: linear-gradient(282.47deg, #0c3360 0.56%, #234771 86.94%), #01c1cf;
`;

const QuoteText = styled.p`
  font-size: 1em;
`;
