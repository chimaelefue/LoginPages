import React from 'react';
import { View, Text, TextInput, TouchableOpacity,  KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme, themes } from './ThemeContext';
import ThemedScreen from './ThemedScreen';

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const { theme, toggleTheme } = useTheme();

    return (
        <ThemedScreen>
            <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
                style={{ flex: 1 }}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    
                    <LinearGradient
                    colors={theme.background}
                    style={{  justifyContent: 'center', flex:1, padding: 24, }}
                    >
                        
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
                        <View style={{}}>
                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: theme.text }}>Forgot Password</Text>
                            <Text style={{ color: theme.text, marginTop: 4 }}>
                                Enter your email to reset your password.
                            </Text>
                        </View>

                        {/* Input Field */}
                        <View style={{ marginTop: 24 }}>
                            <TextInput 
                                style={{padding: 16, borderRadius: 30, borderWidth: 1, borderColor: theme.inputBorder, backgroundColor: theme.inputBackground, color: theme.text }} 
                                placeholder="Email or phone" 
                                placeholderTextColor={theme.text}
                            />
                        </View>

                        {/* Reset Password Button */}
                        <TouchableOpacity 
                            style={{ backgroundColor: '#9333EA', padding: 16, borderRadius: 30, marginTop: 24 }}
                        >
                            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
                                Reset Password
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ThemedScreen>
    );
};

export default ForgotPasswordScreen;
