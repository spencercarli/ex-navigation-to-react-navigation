import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DEFAULT_COLOR = '#999988';
const ACTIVE_COLOR = '#4a86ef';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
});

const DrawerRow = ({ title, isSelected }) => {
  const color = isSelected ? ACTIVE_COLOR : DEFAULT_COLOR;

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color }]} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
}

export default DrawerRow;
