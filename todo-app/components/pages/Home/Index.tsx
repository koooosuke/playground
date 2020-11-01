import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { DETAIL } from '../../../constants/path';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Home: FC = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigate(DETAIL)}>
        <Text>Go to Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
