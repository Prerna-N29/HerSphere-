import { StyleSheet, Text, View, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.step}>A LITTLE ABOUT YOU</Text>

      <Text style={styles.title}>
        Let's personalize your HerSphere 🌷
      </Text>

      <Text style={styles.description}>
        A few details will help us make your experience
        more relevant to you.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>What would you like help with?</Text>

        <Pressable style={styles.option}>
          <Text style={styles.optionText}>🌸 Menstrual Health</Text>
        </Pressable>

        <Pressable style={styles.option}>
          <Text style={styles.optionText}>🥗 Nutrition & Food</Text>
        </Pressable>

        <Pressable style={styles.option}>
          <Text style={styles.optionText}>💭 Emotional Well-being</Text>
        </Pressable>

        <Pressable style={styles.option}>
          <Text style={styles.optionText}>🌱 Healthy Lifestyle</Text>
        </Pressable>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => router.push('/explore')}
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
    marginBottom: 16,
  },

  option: {
    backgroundColor: '#FFF1F4',
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderRadius: 14,
    marginVertical: 6,
  },

  optionText: {
    fontSize: 15,
    color: '#7A4055',
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