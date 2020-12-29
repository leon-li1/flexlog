import styled from "styled-components";
import Link from "next/link";

const HomeButton = () => {
  return (
    <Link href="/dashboard">
      <a>
        <Container>
          <StyledHomeIcon />
        </Container>
      </a>
    </Link>
  );
};

const HomeSVG = ({ className }) => (
  <svg
    className={className}
    width="39"
    height="43"
    viewBox="0 0 39 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 15.4167L19.25 2L36.5 15.4167V36.5C36.5 37.5167 36.0961 38.4917 35.3772 39.2106C34.6584 39.9295 33.6833 40.3333 32.6667 40.3333H5.83333C4.81667 40.3333 3.84165 39.9295 3.12276 39.2106C2.40387 38.4917 2 37.5167 2 36.5V15.4167Z"
      stroke="#003067"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.5 40.3333V21.1666H25V40.3333"
      stroke="#003067"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StyledHomeIcon = styled(HomeSVG)`
  margin: auto;
  width: 34.5px;
  height: 38.33px;
`;
const Container = styled.button`
  position: fixed;
  right: 50px;
  bottom: 50px;
  height: 88px;
  width: 88px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.5);
  outline: none;
  cursor: pointer;
  border: none;
`;

export default HomeButton;
