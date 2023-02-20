import styled from 'styled-components';

const Box = styled.article``;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const Title = styled.h2``;

const Artist = styled.p``;

export const CardSongsItem = ({ songInfo }: any) => {
  return (
    <Box>
      <Image src={songInfo.song_art_image_url} />
      <Title>{songInfo.full_title}</Title>
      <Artist>{songInfo.artist_names}</Artist>
    </Box>
  );
};
