import styled from "styled-components";

const DateLine = ({ className, dateText }) => (
  <svg
    className={className}
    width="628"
    height="244"
    viewBox="0 0 628 244"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="-1"
      y="0"
      width="630"
      height="167"
    >
      <path
        d="M0 165L50 140.5L136.324 148.901L251.097 122.238L362.363 47.7809L467.112 43.7562L628 2"
        stroke="#00D8E6"
        strokeWidth="3"
      />
      <path
        d="M0 165L50 140.5L136.324 148.901L251.097 122.238L362.363 47.7809L467.112 43.7562L628 2"
        stroke="url(#paint1_linear)"
        strokeWidth="3"
      />
    </mask>
    <g mask="url(#mask0)">
      <rect x="1" y="-157" width="626" height="401" rx="36" fill="#01C1CF" />
      <rect
        x="1"
        y="-157"
        width="626"
        height="401"
        rx="36"
        fill="url(#paint2_linear)"
      />
    </g>
    <path
      d="M474.12 44C474.12 47.8675 470.988 51 467.128 51C463.267 51 460.135 47.8675 460.135 44C460.135 40.1325 463.267 37 467.128 37C470.988 37 474.12 40.1325 474.12 44Z"
      fill="#00D8E6"
      stroke="white"
      strokeWidth="4"
    />
    <path d="M467.127 55L473.185 73H461.07L467.127 55Z" fill="white" />
    <rect x="438.15" y="67" width="57.9538" height="28" rx="14" fill="white" />
    <Text
      fill="#133B6B"
      x="466.5"
      y="82"
      fontSize="12"
      fontWeight="700"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {dateText}
    </Text>
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="627"
        y1="116.471"
        x2="33.392"
        y2="-242.541"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#103663" />
        <stop offset="1" stopColor="#306BB0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="315.751"
        y1="1.49691"
        x2="315.751"
        y2="164.497"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00D8E6" />
        <stop offset="1" stopColor="#0054D2" />
      </linearGradient>
      <linearGradient
        id="paint2_linear"
        x1="-46.7287"
        y1="209.5"
        x2="626.559"
        y2="26.8724"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0400D2" />
        <stop offset="1" stopColor="#0ADFD3" />
      </linearGradient>
    </defs>
  </svg>
);

const Text = styled.text`
  font-size: 12;
  font-weight: 700;
`;

export default DateLine;
