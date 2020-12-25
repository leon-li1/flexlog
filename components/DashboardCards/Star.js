import styled from "styled-components";

const Star = ({ className }) => (
  <Cell>
    <svg
      className={className}
      width="39"
      height="36"
      viewBox="0 0 39 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5 3L24.5985 12.8738L36 14.4669L27.75 22.1483L29.697 33L19.5 27.8738L9.303 33L11.25 22.1483L3 14.4669L14.4015 12.8738L19.5 3Z"
        fill="#FFEB34"
        stroke="#FFEB34"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Cell>
);

const Cell = styled.span`
  padding: 0em 0.25em;
`;

export default Star;
