import { StyleSheet, Text, View, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.step}>LET'S GET TO KNOW YOU</Text>

      <Text style={styles.title}>
        Your health journey starts here 🌸
      </Text>

      <Text style={styles.description}>
        Tell us a little about yourself so HerSphere
        can personalize your experience.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          What can HerSphere help with?
        </Text>

        <Text style={styles.option}>🌸 Menstrual Health</Text>
        <Text style={styles.option}>🥗 Nutrition</Text>
        <Text style={styles.option}>💭 Emotional Well-being</Text>
        <Text style={styles.option}>🤖 AI Health Buddy</Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => router.push('/')}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F8',
    paddingHorizontal: 28,
    paddingTop: 70,
  },

  step: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: '#C96F89',
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#7A4055',
    marginTop: 18,
    lineHeight: 40,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#8A747B',
    marginTop: 14,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 22,
    marginTop: 32,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#7A4055',
    marginBottom: 18,
  },

  option: {
    fontSize: 16,
    color: '#8A747B',
    marginVertical: 9,
  },

  button: {
    backgroundColor: '#C96F89',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 32,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});