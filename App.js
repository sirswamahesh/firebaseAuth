import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider, AuthContext } from './src/contexts/AuthProvider';
import LoginScreen from './src/components/LoginScreen';
import HomeScreen from './src/components/HomeScreen';
import { ActivityIndicator, View } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

const Navigation = () => {
  const { user, loading } = React.useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "Home" : "Login"}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};