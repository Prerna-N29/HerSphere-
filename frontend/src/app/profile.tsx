import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function ProfileScreen() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

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
        <Text style={styles.cardTitle}>
          What would you like help with?
        </Text>

        <Pressable
          style={[
            styles.option,
            selected.includes('Menstrual Health') &&
              styles.selectedOption,
          ]}
          onPress={() => toggleOption('Menstrual Health')}
        >
          <Text style={styles.optionText}>
            🌸 Menstrual Health
          </Text>

          {selected.includes('Menstrual Health') && (
            <Text style={styles.check}>✓</Text>
          )}
        </Pressable>

        <Pressable
          style={[
            styles.option,
            selected.includes('Nutrition & Food') &&
              styles.selectedOption,
          ]}
          onPress={() => toggleOption('Nutrition & Food')}
        >
          <Text style={styles.optionText}>
            🥗 Nutrition & Food
          </Text>

          {selected.includes('Nutrition & Food') && (
            <Text style={styles.check}>✓</Text>
          )}
        </Pressable>

        <Pressable
          style={[
            styles.option,
            selected.includes('Emotional Well-being') &&
              styles.selectedOption,
          ]}
          onPress={() => toggleOption('Emotional Well-being')}
        >
          <Text style={styles.optionText}>
            💭 Emotional Well-being
          </Text>

          {selected.includes('Emotional Well-being') && (
            <Text style={styles.check}>✓</Text>
          )}
        </Pressable>

        <Pressable
          style={[
            styles.option,
            selected.includes('Healthy Lifestyle') &&
              styles.selectedOption,
          ]}
          onPress={() => toggleOption('Healthy Lifestyle')}
        >
          <Text style={styles.optionText}>
            🌱 Healthy Lifestyle
          </Text>

          {selected.includes('Healthy Lifestyle') && (
            <Text style={styles.check}>✓</Text>
          )}
        </Pressable>
      </View>

      <Pressable
        style={[
          styles.button,
          selected.length === 0 && styles.disabledButton,
        ]}
        disabled={selected.length === 0}
        onPress={() => router.replace('/explore')}
      >
        <Text style={styles.buttonText}>
          Continue
        </Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },

  selectedOption: {
    backgroundColor: '#F8DDE5',
    borderColor: '#C96F89',
  },

  optionText: {
    fontSize: 15,
    color: '#7A4055',
  },

  check: {
    fontSize: 18,
    fontWeight: '700',
    color: '#C96F89',
  },

  button: {
    backgroundColor: '#C96F89',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 32,
  },

  disabledButton: {
    backgroundColor: '#DDB8C3',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});