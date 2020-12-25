import styled from "styled-components";

const SVGThing = ({ className, dateText }) => (
  <svg
    className={className}
    width="630"
    height="165"
    viewBox="0 0 630 165"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="630"
      height="165"
    >
      <path
        d="M1 163.5L54.5 139.5L136 148L250.5 121.5L361.5 47.5L466 43.5L629 1.5"
        stroke="#00D8E6"
        strokeWidth="3"
      />
      <path
        d="M1 163.5L54.5 139.5L136 148L250.5 121.5L361.5 47.5L466 43.5L629 1.5"
        stroke="url(#paint0_linear)"
        strokeWidth="3"
      />
    </mask>
    <g mask="url(#mask0)">
      <g filter="url(#filter0_d)">
        <rect
          x="2.5"
          y="-158"
          width="623"
          height="401"
          rx="36"
          fill="#01C1CF"
        />
        <rect
          x="2.5"
          y="-158"
          width="623"
          height="401"
          rx="36"
          fill="url(#paint1_linear)"
        />
      </g>
    </g>
    <circle
      cx="466.5"
      cy="43"
      r="7"
      fill="#00D8E6"
      stroke="white"
      strokeWidth="4"
    />
    <path d="M466.5 54L472.562 72H460.438L466.5 54Z" fill="white" />
    <rect x="437.5" y="66" width="58" height="28" rx="14" fill="white" />
    <Text
      fill="#133B6B"
      x="466.5"
      y="80"
      fontSize="12"
      fontWeight="700"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {dateText}
    </Text>
    <defs>
      <filter
        id="filter0_d"
        x="-9.5"
        y="-170"
        width="663"
        height="441"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="RGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx="8" dy="8" />
        <feGaussianBlur stdDeviation="10" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear"
        x1="315"
        y1="1.5"
        x2="315"
        y2="163.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00D8E6" />
        <stop offset="1" stopColor="#0054D2" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="-45"
        y1="208.5"
        x2="625.5"
        y2="27.5"
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

export default SVGThing;
