import styled from 'styled-components';

const Box = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  background: lightblue;
  padding: 30px 0;
  opacity: 0.6;
`;

const Container = styled.div`
  max-width: 1125px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Text = styled.p``;

export const Player = () => {
  return (
    <Box>
      <Container>
        <Text>Player</Text>
      </Container>
    </Box>
  );
};
