import styled from "styled-components";
import { useState } from "react";

export default function Switch() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <label>Change units</label>
      {/* <UnitsContainer> */}
      <UnitLabel>Metric (kg)</UnitLabel>
      <UnitSwitchContainer>
        <UnitSwitch isVisible={toggle} onClick={() => setToggle(!toggle)} />
      </UnitSwitchContainer>
      <UnitLabel>Imperial (lb)</UnitLabel>
      {/* </UnitsContainer> */}
    </>
  );
}

const UnitsContainer = styled.div`
  display: flex;
  width: 70%;
  align-items: space-between;
  margin-left: auto;
`;

const UnitLabel = styled.label`
  display: block;
  background-color: ${(p) => p.theme.colors.background3};
  border-radius: 17px;
  font-size: 1em;
  margin: 0.5em;
  margin-left: auto;
  padding: 0.3em 0.8em;
  color: white;
  border: none;

  :focus {
    outline: none;
  }
`;

const UnitSwitchContainer = styled.div`
  background-color: white;
  width: 12%;
  display: flex;
  border-radius: 36px;
`;

const UnitSwitch = styled.div`
  background-color: ${(p) => p.theme.colors.background3};
  width: 5%;
  padding: 1em;
  border-radius: 36px;
  margin-left: ${(p) => (p.isVisible ? 0 : "auto")};
  transition: margin-left ease-in-out 0.25s;
`;
