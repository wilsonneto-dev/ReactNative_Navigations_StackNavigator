import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

import styles from './style';

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>Login Page</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
