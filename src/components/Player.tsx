import styled from 'styled-components';

export const Player = () => {
  return (
    <Box>
      <Container>
        <Text>Player</Text>
        <Text>for</Text>
        <Text>Tracks</Text>
      </Container>
    </Box>
  );
};

const Box = styled.div`
  background: lightblue;
`;

const Container = styled.div`
  max-width: 1125px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Text = styled.p``;
