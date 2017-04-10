import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DEFAULT_COLOR = '#999988';
const ACTIVE_COLOR = '#4a86ef';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTitleText: {
    fontSize: 11,
  },
});

const TabIcon = ({ iconName, title, isSelected }) => {
  const color = isSelected ? ACTIVE_COLOR : DEFAULT_COLOR;

  return (
    <View style={styles.tabItemContainer}>
      <Icon
        name={iconName}
        size={32}
        color={color}
      />

      <Text style={[styles.tabTitleText, { color }]} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
}

export default TabIcon;
