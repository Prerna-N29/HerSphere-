import { StyleSheet, Text, View, Pressable } from 'react-native';
import { router } from 'expo-router';
import { useTheme } from '../theme/ThemeContext';

export default function HomeScreen() {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
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
        HerSphere
      </Text>

      <Text
        style={[
          styles.tagline,
          { color: theme.primary },
        ]}
      >
        Your health. Your space.{'\n'}Your wellbeing.
      </Text>

      <Text
        style={[
          styles.description,
          { color: theme.text },
        ]}
      >
        A safe and personalized space for your health,
        nutrition and emotional wellbeing.
      </Text>

      <Pressable
        style={[
          styles.button,
          { backgroundColor: theme.primary },
        ]}
        onPress={() => router.push('/onboarding')}
      >
        <Text style={styles.buttonText}>
          Get Started
        </Text>
      </Pressable>

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 28,
  },

  logoCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },

  logo: {
    fontSize: 52,
  },

  title: {
    fontSize: 38,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  tagline: {
    fontSize: 19,
    lineHeight: 28,
    textAlign: 'center',
    marginTop: 12,
  },

  description: {
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'center',
    marginTop: 22,
    maxWidth: 350,
  },

  button: {
    marginTop: 36,
    paddingVertical: 15,
    paddingHorizontal: 55,
    borderRadius: 30,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 22,
  },

  loginText: {
    fontSize: 14,
  },

  loginLink: {
    fontSize: 14,
    fontWeight: '700',
  },
});