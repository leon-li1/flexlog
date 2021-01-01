import styled from "styled-components";
import { useState, useEffect } from "react";

export default function UnitsSwitch({ units, setUnits }) {
  const [toggle, setToggle] = useState(units === "Imperial" ? true : false);

  useEffect(() => {
    setUnits(toggle ? "Imperial" : "Metric");
  }, [toggle]);

  return (
    <>
      <label>Change units</label>
      <UnitsContainer>
        <UnitLabel>Imperial (lb)</UnitLabel>
        <UnitSwitchContainer>
          <UnitSwitch toggle={toggle} onClick={() => setToggle(!toggle)} />
        </UnitSwitchContainer>
        <UnitLabel>Metric (kg)</UnitLabel>
      </UnitsContainer>
    </>
  );
}

const UnitsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 65%;
  justify-content: space-between;
  margin-left: auto;
`;

const UnitLabel = styled.label`
  background-color: ${(p) => p.theme.colors.background3};
  border-radius: 100px;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.3em 0.8em;
  color: white;
  border: none;

  :focus {
    outline: none;
  }
`;

const UnitSwitchContainer = styled.div`
  background-color: white;
  width: 15%;
  height: 15%;
  align-self: center;
  border-radius: 36px;
`;

const UnitSwitch = styled.div`
  background-color: ${(p) => p.theme.colors.background3};
  width: 5%;
  padding: 1em;
  border-radius: 36px;
  margin-left: ${(p) => (p.toggle ? 0 : "auto")};
  transition: margin-left ease-in-out 0.25s;
`;
