import React, { FC } from 'react';
import SnapCarousel from 'react-native-snap-carousel';
import { CarouselItem } from '../molecules';
import { width } from '../../lib/window';

interface Props {
  onEnd: () => void;
  onNext: () => void;
  carouselRef: any;
  onSnapToItem: (slide: number) => void;
  data: { text: string }[];
}

const Carousel: FC<Props> = ({ onEnd, onNext, carouselRef, onSnapToItem, data }) => (
  <SnapCarousel
    data={data}
    ref={carouselRef}
    renderItem={({ item, index }) => <CarouselItem item={item} onPress={index === data.length - 1 ? onEnd : onNext} />}
    sliderWidth={width}
    itemWidth={width}
    onSnapToItem={onSnapToItem}
  />
);

export default Carousel;
