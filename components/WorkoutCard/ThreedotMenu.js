import styled from "styled-components";

export default function ThreedotMenu({ name, sets }) {
  return (
    <MenuContainer>
      <Option>Edit</Option>
      <Option>Duplicate</Option>
      <Option>Delete</Option>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  position: absolute;
  width: 10vw;
  border-radius: 22px;
  margin-left: auto;
  background-color: white;
`;

// TODO:: fix border rdius
const Option = styled.p`
  padding: 0.3em;
  border-radius: 22px;
  color: ${(p) => p.theme.colors.background3};
  :hover {
    background-color: #e7e7e7;
  }
`;
