import styled from "styled-components";
import Header from "../components/Header/index";

export default function stats() {
  const errorMsg = "Incorrect email or password";
  return (
    <PageContainer>
      <Header />
      <MainContainer>
        <Container></Container>
      </MainContainer>
    </PageContainer>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  padding: 0 2em;
`;

const PageContainer = styled.div`
  background: ${({ theme }) => theme.colors.background1};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0em 0;
`;
