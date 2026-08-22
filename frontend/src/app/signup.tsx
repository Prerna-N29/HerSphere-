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
  ActivityIndicator,
} from 'react-native';
import { router } from 'expo-router';
import { useTheme } from '../theme/ThemeContext';

const API_URL = 'https://hersphere-api.onrender.com';

export default function SignupScreen() {
  const { theme } = useTheme();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    setMessage('');

    if (!name.trim() || !email.trim()) {
      setMessage('Please enter your name and email.');
      return;
    }

    if (password.length < 6) {
      setMessage('Password must be at least 6 characters.');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      await response.json();

      setMessage('Account created successfully! 🌸');

      setTimeout(() => {
        router.replace('/login');
      }, 1200);
    } catch (error) {
      console.error('Signup error:', error);
      setMessage(
        'Unable to create your account. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

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

          {message !== '' && (
            <Text
              style={[
                styles.message,
                {
                  color: message.includes('successfully')
                    ? theme.primary
                    : '#B44F61',
                },
              ]}
            >
              {message}
            </Text>
          )}

          <Pressable
            style={[
              styles.signupButton,
              { backgroundColor: theme.primary },
            ]}
            onPress={handleSignup}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={styles.signupButtonText}>
                Create Account
              </Text>
            )}
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

  message: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 14,
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
