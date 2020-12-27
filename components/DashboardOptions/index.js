import styled from "styled-components";
import Dumbbell from "./Dumbbell";
import StatsIcon from "./StatsIcon";
import Gear from "./Gear";
import Info from "./Info";
import Link from "next/link";

export default function Options({ set }) {
  return (
    <OptionContainer>
      <Option>
        <Dumbbell />
        <Link href="/workouts">
          <Text>My Workouts</Text>
        </Link>
      </Option>
      <Option>
        <StatsIcon />
        <Link href="/logs">
          <Text>My Stats</Text>
        </Link>
      </Option>
      <Option>
        <Gear set={set} />
        <Text onClick={() => set("Settings")}>Settings</Text>
      </Option>
      <Option>
        <Info set={set} />
        <Text onClick={() => set("Info")}>Learn More</Text>
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

const Text = styled.p`
  padding: 0.4em;
`;
