import styled, { keyframes } from "styled-components";

const PopupModal = ({ isVisible, setVisible, children }) => {
  if (isVisible === null) return null;
  return (
    <BackgroundCover isVisible={isVisible} onClick={() => setVisible(false)}>
      <Container isVisible={isVisible} onClick={(e) => e.stopPropagation()}>
        {children}
      </Container>
    </BackgroundCover>
  );
};

const modalEnter = keyframes`
  0% { transform: scale(0, 0); }
  50% { transform: scale(1, 1); }
  100% { transform: scale(1, 1); }
`;

const modalExit = keyframes`
  0% { transform: scale(1, 1); }
  50% { transform: scale(1, 1); }
  100% { transform: scale(0, 0); }
`;

const bgFadeIn = keyframes`
  0% { background-color: rgba(0,0,0,0); }
  50% { background-color: rgba(0,0,0,0.5); }
  100% { background-color: rgba(0,0,0,0.5); }
`;

const bgFadeOut = keyframes`
  0% { background-color: rgba(0,0,0,0.5); }
  50% { background-color: rgba(0,0,0,0.5); }
  100% { background-color: rgba(0,0,0,0); }
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 0; }
`;

const BackgroundCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100vh;
  width: 100vw;
  background-color: ${(p) =>
    p.isVisible ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)"};
  animation: ${(p) => (p.isVisible ? bgFadeIn : bgFadeOut)} ease-in 500ms;
  ${(p) => !p.isVisible && "pointer-events: none;"}
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  z-index: 2;
  width: 60vw;
  display: flex;
  flex-direction: column;
  padding: 1.5em 2em;
  border-radius: 36px;
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.5);
  background: linear-gradient(282.47deg, #0c3360 0.56%, #234771 86.94%), #01c1cf;
  transform: ${(p) => (p.isVisible ? "scale(1, 1)" : "scale(0, 0)")};
  animation: ${(p) => (p.isVisible ? modalEnter : modalExit)} ease-in 500ms;
  > * {
    animation: ${(p) => (p.isVisible ? fadeIn : fadeOut)} ease-in 500ms;
    opacity: ${(p) => (p.isVisible ? 1 : 0)};
  }
`;

export default PopupModal;
