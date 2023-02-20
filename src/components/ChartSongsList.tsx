import styled from 'styled-components';
import { CardSongsItem } from './CardSongsItem';

import { chartSongs } from '../data/chartSongs';

const Section = styled.section``;

const Heading = styled.h2``;

const List = styled.ul``;

const Item = styled.li``;

export const ChartSongsList = () => {
  return (
    <Section>
      <Heading>Chart</Heading>
      <List>
        {chartSongs.chart_items.map((el) => {
          return (
            <Item key={el.item.id}>
              <CardSongsItem songInfo={el.item} />
            </Item>
          );
        })}
      </List>
    </Section>
  );
};
