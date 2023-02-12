import styled from 'styled-components';

const PlayerWrap = styled.div`
  background: lightblue;
  padding: 2rem 0;
`;

const Text = styled.p``;

export const Player = () => {
  return (
    <PlayerWrap>
      <Text>Player</Text>
    </PlayerWrap>
  );
};
