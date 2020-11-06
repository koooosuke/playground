import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Logo, Button } from '../atoms';
import Colors from '../../constants/colors';
import { width } from '../../lib/window';

const padding = 20;
const edgeNumber = 2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding,
    backgroundColor: Colors.main,
  },
  text: {
    fontSize: 28,
    fontWeight: '800',
    lineHeight: 40,
    color: Colors.white,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: width - padding * edgeNumber,
    paddingVertical: 10,
  },
  imageContainer: {
    flex: 2,
  },
  contentContainer: {
    flex: 3,
    paddingTop: 30,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
});

interface Props {
  onPress: () => void;
  item: { text: string };
}

const CarouselItem: FC<Props> = ({ onPress, item }) => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <View style={styles.imageContainer}>
        <Logo />
      </View>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.text}>{item.text}</Text>
        </View>
        <Button onPress={onPress} label="next" />
      </View>
    </View>
  </View>
);

export default CarouselItem;
