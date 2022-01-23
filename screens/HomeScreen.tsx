import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import Feed from '../components/Feed';
import NewPostButton from '../components/NewPostButton';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Feed />
      <NewPostButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
