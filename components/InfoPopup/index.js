import styled from "styled-components";
import { ModalTitle } from "../LoginModal/Modal";
import PopupModal from "../PopupModal";

const InfoPopup = ({ set, isVisible, setVisible }) => {
  return (
    <PopupModal isVisible={isVisible} setVisible={setVisible}>
      <ModalTitle>Learn more</ModalTitle>
      <FieldContainer>
        <Input>
          {`How do I get stars? 
          A milestone is reached after logging 5, 10, 20,
          40, etc. workouts on Flexlog. You will earn a star after reaching each
          milestone.
          
          How do I get Flexpoints?
          + 1 point on new login (once per day)
          + 5 points on new workout log creation 
          + 10 points on workout share (once per day)
          + 20 points for reaching a new personal record on an
          exercise (record for each exercise = weight × reps)
          + 50 points on getting a star 
          + 50 points on new account creation
          + 50 points on logging your first workout`}
        </Input>
      </FieldContainer>
      <Button onClick={() => setVisible(false)}>Got it!</Button>
    </PopupModal>
  );
};

const Modal = styled.div`
  width: 60vw;
  display: flex;
  position: absolute;
  flex-direction: column;
  padding: 1.5em 2em;
  left: 20%;
  top: 25%;
  border-radius: 36px;
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.5);
  background: linear-gradient(282.47deg, #0c3360 0.56%, #234771 86.94%), #01c1cf;
`;

const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5em 0em 1em;
`;

const Input = styled.label`
  background-color: ${(p) => p.theme.colors.background3};
  width: 100%;
  border-radius: 17px;
  font-size: 1em;
  padding: 0.3em 0.8em;
  color: white;
  border: none;

  ::placeholder {
    color: white;
  }

  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  font-size: 1em;
  width: 20%;
  margin-left: auto;
  background-color: white;
  color: #002d61;
  border-radius: 100px;
  padding: 0.2em 0.8em;
  cursor: pointer;
  font-weight: 600;

  :focus {
    outline: none;
  }
`;

export default InfoPopup;
