import { StyleSheet, Text, View, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoCircle}>
        <Text style={styles.logo}>🌸</Text>
      </View>

      <Text style={styles.title}>HerSphere</Text>

      <Text style={styles.tagline}>
        Your health. Your space.{'\n'}Your wellbeing.
      </Text>

      <Text style={styles.description}>
        A safe and personalized space for your health,
        nutrition and emotional wellbeing.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push('/onboarding')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 28,
  },

  logoCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#F8DDE5',
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
    color: '#7A4055',
    letterSpacing: 0.5,
  },

  tagline: {
    fontSize: 19,
    lineHeight: 28,
    textAlign: 'center',
    color: '#9B6377',
    marginTop: 12,
  },

  description: {
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'center',
    color: '#8A747B',
    marginTop: 22,
    maxWidth: 350,
  },

  button: {
    marginTop: 36,
    backgroundColor: '#C96F89',
    paddingVertical: 15,
    paddingHorizontal: 55,
    borderRadius: 30,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});