import styled from "styled-components";
import Dumbbell from "./Dumbbell";
import Book from "./Book";
import Gear from "./Gear";
import Info from "./Info";

export default function Options() {
  return (
    <OptionContainer>
      <Option>
        <Dumbbell />
        <Text>My Workouts</Text>
      </Option>
      <Option>
        <Book />
        <Text>My Logs</Text>
      </Option>
      <Option>
        <Gear />
        <Text>Settings</Text>
      </Option>
      <Option>
        <Info /> <Text>Learn More</Text>
      </Option>
    </OptionContainer>
  );
}

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 0.3em 0em 0.3em 1.2em;
`;

const Text = styled.p`
  padding: 0.4em;
`;
