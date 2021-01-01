import styled from "styled-components";
import { ModalTitle } from "../LoginModal/Modal";
import PopupModal from "../PopupModal";

const InfoPopup = ({ set, isVisible, setVisible }) => {
  return (
    <PopupModal isVisible={isVisible} setVisible={setVisible}>
      <ModalTitle>Learn more</ModalTitle>
      <FieldContainer>
        <Input>
          {`How do I get stars?`}
          <br />
          {` A milestone is reached after logging 5, 10, 20,
          40, etc. workouts on Flexlog. You will earn a star after reaching each
          milestone.`}
          <br />
          <br />
          {`How do I get Flexpoints?`}
          {/* <br /> */}
          {/* {`+ 1 point on new login (once per day)`} */}
          <br />
          {`+ 5 points on new workout log creation `}
          <br />
          {`+ 10 points on workout share (once per day)`}
          <br />
          {/* {`+ 20 points for reaching a new personal record on an
          exercise (record for each exercise = weight × reps)`} */}
          {/* <br /> */}
          {`+ 50 points on getting a star`}
          <br />
          {`+ 50 points on new account creation`}
          {/* <br /> */}
          {/* {`+ 50 points on logging your first workout`} */}
        </Input>
      </FieldContainer>
      <Button onClick={() => setVisible(false)}>Got it!</Button>
    </PopupModal>
  );
};

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
