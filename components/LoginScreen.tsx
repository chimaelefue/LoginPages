import React from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'react-native-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { useTheme, themes } from './ThemeContext';
import ThemedScreen from './ThemedScreen';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemedScreen>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <LinearGradient 
            colors={theme.background}
            style={{ flex: 1, justifyContent: 'center', padding: 24 }}
          >

            {/* Back Button & Theme Toggle */}
            <View style={{ marginTop: 40, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', top: 80, left: 20  }}>
                <TouchableOpacity onPress={toggleTheme}>
                  <Text style={{ color: theme.text }}>
                    {theme.background === themes.light.background ? '🌙 Dark Mode' : '☀️ Light Mode'}
                  </Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 30 }}>
              <Text style={{ fontSize: 24, fontWeight: 'bold', color: theme.text }} >Login</Text>

              <View 
                style={{marginTop: 6, display:'flex', flexDirection:'row', alignItems:'center'}}
              >
                <Text
                style={{ color: theme.text}}
                >
                  Don't have an account?{' '}
                </Text>

                <TouchableOpacity 
                  onPress={() => navigation.navigate('Signup')}
                >
                  <Text
                    style={{color: '#9333EA', fontWeight: '600', }}
                  >
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
              
            </View>

            <View 
              style={{ marginTop: 24 }}
            >
              <TextInput 
                style={{padding: 16, borderRadius: 30, borderWidth: 1,  borderColor: theme.inputBorder, backgroundColor: theme.inputBackground, color: theme.text}} 
                placeholder="+234" 
                placeholderTextColor={theme.text}
                keyboardType="phone-pad" 
              />
              <TextInput 
                style={{padding: 16, borderRadius: 30, borderWidth: 1, borderColor: theme.inputBorder, backgroundColor: theme.inputBackground, color: theme.text, marginTop: 16 }} 
                placeholder="Password" 
                placeholderTextColor={theme.text}
                secureTextEntry 
              />
              <TouchableOpacity 
                style={{ position: 'absolute', right: 12, top: 80 }} 
                onPress={() => navigation.navigate('ForgotPassword')}
              >
                <Text 
                  style={{ color: '#9333EA', fontWeight: '600', textAlignVertical: 'center' }}
                >
                  Forgot
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity 
              style={{ backgroundColor: '#9333EA', padding: 16, borderRadius: 30, marginTop: 24 }}
            >
              <Text 
                style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </TouchableWithoutFeedback>
        
      </KeyboardAvoidingView>
    </ThemedScreen>
  );
};

export default LoginScreen;
