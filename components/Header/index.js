import styled from "styled-components";
import Logo from "./Logo";

const NavBar = styled.div`
  display: flex;
  align-items: center;
  height: 3.6em;
  padding: 0 1em;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.5);
  background-color: linear-gradient(269.89deg, #002651 0.07%, #00162f 99.98%),
    #002d61;
`;

const LogoText = styled.p`
  font-size: 1em;
  letter-spacing: 0.82em;
`;

export default function Header() {
  return (
    <NavBar>
      <LogoText>FLEXLOG</LogoText>
      <Logo />
    </NavBar>
  );
}
