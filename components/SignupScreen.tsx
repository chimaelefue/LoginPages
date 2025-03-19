import React from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { RootStackParamList } from '../App';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme, themes } from './ThemeContext';
import ThemedScreen from './ThemedScreen';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Signup'>;

const SignupScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    const { theme, toggleTheme } = useTheme();

    return (
        <ThemedScreen>
            <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
                style={{ flex: 1 }}
                
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}> 
                        <LinearGradient
                            colors={theme.background}
                            style={{ flex: 1, justifyContent: 'center', padding: 24 }}
                        >
                            {/* Back Button & Theme Toggle */}
                            <View 
                                style={{  
                                    flexDirection: 'row', 
                                    justifyContent: 'space-between', 
                                    alignItems: 'center',  
                                    position: 'absolute', 
                                    top: 80, 
                                    left: 20, 
                                    right: 20 
                                }}
                            >
                                {/* Back Button */}
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <Text style={{ fontSize: 24, color: theme.text }}>{'<--'}</Text>
                                </TouchableOpacity>

                                {/* Theme Toggle */}
                                <TouchableOpacity onPress={toggleTheme}>
                                    <Text style={{ color: theme.text }}>
                                        {theme.background === themes.light.background ? '🌙 Dark Mode' : '☀️ Light Mode'}
                                    </Text>
                                </TouchableOpacity>
                            </View>


                            {/* Header */}
                            <View style={{ marginTop: 40 }}>
                                <Text style={{ fontSize: 24, fontWeight: 'bold', color: theme.text }}>Create account</Text>
                                <View style={{ marginTop: 6, flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ color: theme.text }}>Already have an account? </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                        <Text style={{ color: '#9333EA', fontWeight: '600' }}>Sign In</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            
                            {/* Input Fields */}
                            <View style={{ marginTop: 24, gap: 14 }}>
                                {['First Name', 'Last Name', 'Phone', 'Email', 'Address', 'Password', 'Confirm Password'].map((placeholder, index) => (
                                    <TextInput
                                        key={index}
                                        style={{
                                            padding: 16,
                                            borderRadius: 30,
                                            borderWidth: 1,
                                            borderColor: theme.inputBorder,
                                            backgroundColor: theme.inputBackground,
                                            color: theme.text
                                        }}
                                        placeholder={placeholder}
                                        placeholderTextColor={theme.text}
                                        secureTextEntry={placeholder.toLowerCase().includes('password')}
                                    />
                                ))}
                            </View>

                            {/* Signup Button */}
                            <TouchableOpacity 
                                style={{ backgroundColor: theme.buttonBackground, padding: 16, borderRadius: 30, marginTop: 24 }}
                            >
                                <Text style={{ color: theme.buttonText, textAlign: 'center', fontWeight: 'bold' }}>Sign up</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ThemedScreen>
    );
};

export default SignupScreen;
