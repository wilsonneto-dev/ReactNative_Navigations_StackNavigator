import React, {useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {NavigationContext} from 'react-navigation';

import styles from './style';

export default () => {
  const navigation = useContext(NavigationContext);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>Página: Login</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Dashboard');
            }}>
            <Text style={styles.buttonText}>Dashboard</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
