import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Pagination as SCPagination } from 'react-native-snap-carousel';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  pagination: {
    backgroundColor: Colors.carouselBackground,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: Colors.white,
  },
});

interface Props {
  length: number;
  index: number;
}

const Pagination: FC<Props> = ({ length, index }) => (
  <SCPagination
    dotsLength={length}
    activeDotIndex={index}
    containerStyle={styles.pagination}
    dotStyle={styles.dot}
    inactiveDotOpacity={0.4}
    inactiveDotScale={0.6}
  />
);

export default Pagination;
