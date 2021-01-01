import styled from "styled-components";
import Logo from "./Logo";
import LogoutIcon from "./LogoutIcon";
import { useRouter } from "next/router";
import axios from "axios";

export default function Header({ isLoggedout }) {
  const router = useRouter();

  const logout = async () => {
    await axios.get(`${process.env.SERVER_URL}/api/logout`, {
      withCredentials: true,
    });
    router.push("/");
  };

  return (
    <NavBar>
      <LogoText>FLEXLOG</LogoText>
      <Logo />
      <LogoutContainer
        onClick={logout}
        visibility={isLoggedout ? "hidden" : "visible"}
      >
        <LogoutIcon />
        <LogoutText>Log out</LogoutText>
      </LogoutContainer>
    </NavBar>
  );
}

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
  cursor: pointer;
  visibility: ${(p) => p.visibility};
`;

const LogoutText = styled.p`
  font-size: 1em;
  margin: 0.4em;
`;
