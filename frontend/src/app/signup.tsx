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

export default function SignupScreen() {
  const { theme } = useTheme();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
          Create your HerSphere
        </Text>

        <Text
          style={[
            styles.subtitle,
            { color: theme.text },
          ]}
        >
          Create an account to begin your personalized
          health journey.
        </Text>

        <View style={styles.form}>
          <Text
            style={[
              styles.label,
              { color: theme.heading },
            ]}
          >
            Name
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
            placeholder="Enter your name"
            placeholderTextColor={theme.text}
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />

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
            placeholder="Create a password"
            placeholderTextColor={theme.text}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Text
            style={[
              styles.label,
              { color: theme.heading },
            ]}
          >
            Confirm Password
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
            placeholder="Confirm your password"
            placeholderTextColor={theme.text}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          <Pressable
            style={[
              styles.signupButton,
              { backgroundColor: theme.primary },
            ]}
            onPress={() => {
              // Registration will be connected to the backend later.
            }}
          >
            <Text style={styles.signupButtonText}>
              Create Account
            </Text>
          </Pressable>
        </View>

        <View style={styles.loginRow}>
          <Text
            style={[
              styles.loginText,
              { color: theme.text },
            ]}
          >
            Already have an account?
          </Text>

          <Pressable
            onPress={() => router.push('/login')}
          >
            <Text
              style={[
                styles.loginLink,
                { color: theme.primary },
              ]}
            >
              {' '}Log In
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
    paddingTop: 55,
    paddingBottom: 40,
  },

  logoCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 22,
  },

  logo: {
    fontSize: 36,
  },

  title: {
    fontSize: 29,
    fontWeight: '700',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 25,
  },

  form: {
    width: '100%',
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 13,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 15,
  },

  signupButton: {
    height: 52,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 26,
  },

  signupButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },

  loginText: {
    fontSize: 14,
  },

  loginLink: {
    fontSize: 14,
    fontWeight: '700',
  },
});
