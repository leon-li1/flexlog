import { ClimbingBoxLoader } from 'react-spinners';
import styled from 'styled-components';

const Loader = () => {
  return <Container>
    <ClimbingBoxLoader color="#fff" size={25}/>
  </Container>
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Loader;
