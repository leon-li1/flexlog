import { useEffect } from 'react';
import styled, { keyframes} from 'styled-components';
import PopupModal from '../PopupModal';

const UpsertWorkoutModal = ({ isVisible, setVisible }) => {  
  return (
      <PopupModal isVisible={isVisible} setVisible={setVisible}>
        Stuff
      </PopupModal>
  );
}

export default UpsertWorkoutModal;
