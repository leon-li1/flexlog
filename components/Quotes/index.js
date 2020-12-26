import styled from "styled-components";

export default function WelcomeCard() {
  return (
    <>
      <Quote>
        “Today I will do what others won’t, so tomorrow I can accomplish what
        others can’t.” —Jerry Rice
      </Quote>
      <Quote>
        “Do something today that your future self will thank you for.” —Unknown
      </Quote>
      <Quote>
        “We are what we repeatedly do. Excellence then is not an act but a
        habit.” —Aristotle
      </Quote>
    </>
  );
}

const Quote = styled.p`
  padding: 0.6em 0;
`;
