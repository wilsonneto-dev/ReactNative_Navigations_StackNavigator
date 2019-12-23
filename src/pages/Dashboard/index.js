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
          <Text>Página: Dashboard</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
