import React from 'react';
import { SafeAreaView, StatusBar, View, StyleSheet } from 'react-native';
import { useTheme } from './ThemeContext';

const ThemedScreen: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background[1] }]}>
      <StatusBar 
        barStyle={theme.background === theme.background ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background[1]}
      />
      <View style={{ flex: 1 }}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ThemedScreen;
