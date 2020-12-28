import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function useErrorMsg(msg, waitTime = 4000) {
  const [isVisible, setVisible] = useState(false);
  const [curTimeout, setCurTimeout] = useState(null);
  const [hasRendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);
  if(!hasRendered) return [null, () => null];

  const portal = ReactDOM.createPortal(<ErrorContainer isVisible={isVisible}>{msg}</ErrorContainer>, document.body);
  const trigger = () => {
    if(curTimeout) clearTimeout(curTimeout);
    setVisible(true);
    const timeout = setTimeout(() => {
      setVisible(false);
      setCurTimeout(null);
    }, waitTime);
    setCurTimeout(timeout);
  }

  return [portal, trigger];
}

const ErrorContainer = styled.div`
  position: fixed;
  bottom: ${(p) => (p.isVisible ? 50 : -100)}px;
  left: 50%;
  transform: translateX(-50%);
  transition: bottom ease-in-out 0.25s;
  background-color: #d24f4f;
  border-radius: 100px;
  padding: 0.5em 1em;
`;

export default useErrorMsg;
