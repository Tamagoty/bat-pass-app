import React from 'react';
import { View, TextInput} from 'react-native';

import { styles } from './BatTextInputStyles';

export function BatTextImput() {
  return (
      <TextInput
        style={styles.container}
       placeholder='pass' 
      />
  );
}