import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';
import { useTheme } from '../theme/ThemeContext';

export default function LoginScreen() {
  const { theme } = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={[
            styles.logoCircle,
            { backgroundColor: theme.primaryLight },
          ]}
        >
          <Text style={styles.logo}>🌸</Text>
        </View>

        <Text
          style={[
            styles.title,
            { color: theme.heading },
          ]}
        >
          Welcome back
        </Text>

        <Text
          style={[
            styles.subtitle,
            { color: theme.text },
          ]}
        >
          Your HerSphere space is waiting for you.
        </Text>

        <View style={styles.form}>
          <Text
            style={[
              styles.label,
              { color: theme.heading },
            ]}
          >
            Email
          </Text>

          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
                color: theme.heading,
              },
            ]}
            placeholder="Enter your email"
            placeholderTextColor={theme.text}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text
            style={[
              styles.label,
              { color: theme.heading },
            ]}
          >
            Password
          </Text>

          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
                color: theme.heading,
              },
            ]}
            placeholder="Enter your password"
            placeholderTextColor={theme.text}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Pressable
            style={[
              styles.loginButton,
              { backgroundColor: theme.primary },
            ]}
            onPress={() => {
              // Backend authentication will be connected here.
            }}
          >
            <Text style={styles.loginButtonText}>
              Log In
            </Text>
          </Pressable>
        </View>

        <View style={styles.signupRow}>
          <Text
            style={[
              styles.signupText,
              { color: theme.text },
            ]}
          >
            Don't have an account?
          </Text>

          <Pressable
            onPress={() => router.push('/signup')}
          >
            <Text
              style={[
                styles.signupLink,
                { color: theme.primary },
              ]}
            >
              {' '}Sign Up
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 70,
    paddingBottom: 40,
  },

  logoCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 24,
  },

  logo: {
    fontSize: 36,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 36,
  },

  form: {
    width: '100%',
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 16,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 15,
  },

  loginButton: {
    height: 52,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 28,
  },

  signupText: {
    fontSize: 14,
  },

  signupLink: {
    fontSize: 14,
    fontWeight: '700',
  },
});
