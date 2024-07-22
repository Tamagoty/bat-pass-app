import React from 'react';
import { View, Text, Image } from 'react-native';
import batLogo from '../../../assets/bat-logo.png'
import { styles } from './BatLogoStyles';

export function BatLogo() {
  return (
    <View >
      <Text style={styles.title}>
        BAT PASS GENERATOR
      </Text>
      <Image source={batLogo} style={{resizeMode: 'contain', height: 180}} />
    </View>
  );
}