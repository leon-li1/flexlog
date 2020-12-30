import styled from "styled-components";
import Dumbbell from "./Dumbbell";
import StatsIcon from "./StatsIcon";
import Gear from "./Gear";
import Info from "./Info";
import Link from "next/link";

export default function Options({ set, setVisible }) {
  return (
    <OptionContainer>
      <Link href="/workouts">
        <Option>
          <Dumbbell />
          <Text>My Workouts</Text>
        </Option>
      </Link>
      <Option>
        <StatsIcon />
        {/* <Link href="/stats"> */}
        <Text>My Stats</Text>
        {/* </Link> */}
      </Option>
      <Option
        onClick={() => {
          setVisible(true);
          set("Settings");
        }}
      >
        <Gear />
        <Text>Settings</Text>
      </Option>
      <Option
        onClick={() => {
          setVisible(true);
          set("Info");
        }}
      >
        <Info />
        <Text>Learn More</Text>
      </Option>
    </OptionContainer>
  );
}

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1em;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4em 0em 0.4em 1.2em;
  cursor: pointer;
`;

const OptionPopup = styled(Option);

const Text = styled.p`
  padding: 0.4em;
`;
