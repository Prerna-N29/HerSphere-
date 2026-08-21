import { StyleSheet, Text, View, Pressable } from 'react-native';
import { router } from 'expo-router';
import { useTheme } from '../theme/ThemeContext';

export default function OnboardingScreen() {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      <Text
        style={[
          styles.step,
          { color: theme.primary },
        ]}
      >
        LET'S GET TO KNOW YOU
      </Text>

      <Text
        style={[
          styles.title,
          { color: theme.heading },
        ]}
      >
        Your health journey starts here 🌸
      </Text>

      <Text
        style={[
          styles.description,
          { color: theme.text },
        ]}
      >
        Tell us a little about yourself so HerSphere
        can personalize your experience.
      </Text>

      <View
        style={[
          styles.card,
          { backgroundColor: theme.card },
        ]}
      >
        <Text
          style={[
            styles.cardTitle,
            { color: theme.heading },
          ]}
        >
          What can HerSphere help with?
        </Text>

        <Text
          style={[
            styles.option,
            { color: theme.text },
          ]}
        >
          🌸 Menstrual Health
        </Text>

        <Text
          style={[
            styles.option,
            { color: theme.text },
          ]}
        >
          🥗 Nutrition
        </Text>

        <Text
          style={[
            styles.option,
            { color: theme.text },
          ]}
        >
          💭 Emotional Well-being
        </Text>

        <Text
          style={[
            styles.option,
            { color: theme.text },
          ]}
        >
          🤖 AI Health Buddy
        </Text>
      </View>

      <Pressable
        style={[
          styles.button,
          { backgroundColor: theme.primary },
        ]}
        onPress={() => router.push('/theme')}
      >
        <Text style={styles.buttonText}>
          Choose Your Theme
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 70,
  },

  step: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.5,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    marginTop: 18,
    lineHeight: 40,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 14,
  },

  card: {
    borderRadius: 22,
    padding: 22,
    marginTop: 32,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 18,
  },

  option: {
    fontSize: 16,
    marginVertical: 9,
  },

  button: {
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
