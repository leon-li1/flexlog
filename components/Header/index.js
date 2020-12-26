import styled from "styled-components";
import Logo from "./Logo";
import LogoutIcon from "./LogoutIcon";

const NavBar = styled.div`
  display: flex;
  width: 100%;
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

const LogoutContainer = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;

const LogoutText = styled.p`
  font-size: 1em;
`;

export default function Header() {
  return (
    <NavBar>
      <LogoText>FLEXLOG</LogoText>
      <Logo />
      <LogoutContainer>
        <LogoutIcon />
        <LogoutText>Log out</LogoutText>
      </LogoutContainer>
    </NavBar>
  );
}
