import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { router } from 'expo-router';
import { useTheme } from '../theme/ThemeContext';

export default function SymptomsScreen() {
  const { theme } = useTheme();

  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [saved, setSaved] = useState(false);

  const symptoms = [
    { name: 'Cramps', emoji: '🩸' },
    { name: 'Headache', emoji: '🤕' },
    { name: 'Bloating', emoji: '🫧' },
    { name: 'Fatigue', emoji: '😴' },
    { name: 'Mood changes', emoji: '💭' },
    { name: 'Back pain', emoji: '💗' },
  ];

  const toggleSymptom = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(
        selectedSymptoms.filter((item) => item !== symptom)
      );
    } else {
      setSelectedSymptoms([
        ...selectedSymptoms,
        symptom,
      ]);
    }
  };

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      <View style={styles.content}>

        <Pressable
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text
            style={[
              styles.back,
              { color: theme.primary },
            ]}
          >
            ‹ Back
          </Text>
        </Pressable>

        <Text style={styles.emoji}>💗</Text>

        <Text
          style={[
            styles.title,
            { color: theme.heading },
          ]}
        >
          Track Symptoms
        </Text>

        <Text
          style={[
            styles.subtitle,
            { color: theme.text },
          ]}
        >
          How are you feeling today? Select anything
          you're experiencing.
        </Text>

        <View
          style={[
            styles.card,
            { backgroundColor: theme.primaryLight },
          ]}
        >
          <Text
            style={[
              styles.cardLabel,
              { color: theme.primary },
            ]}
          >
            TODAY'S SYMPTOMS
          </Text>

          <Text
            style={[
              styles.cardTitle,
              { color: theme.heading },
            ]}
          >
            What are you experiencing?
          </Text>

          <View style={styles.symptomsGrid}>
            {symptoms.map((symptom) => {
              const selected = selectedSymptoms.includes(
                symptom.name
              );

              return (
                <Pressable
                  key={symptom.name}
                  style={[
                    styles.symptom,
                    {
                      backgroundColor: theme.background,
                      borderColor: 'transparent',
                    },
                    selected && {
                      backgroundColor: theme.card,
                      borderColor: theme.primary,
                    },
                  ]}
                  onPress={() =>
                    toggleSymptom(symptom.name)
                  }
                >
                  <Text style={styles.symptomEmoji}>
                    {symptom.emoji}
                  </Text>

                  <Text
                    style={[
                      styles.symptomText,
                      { color: theme.heading },
                    ]}
                  >
                    {symptom.name}
                  </Text>

                  {selected && (
                    <Text
                      style={[
                        styles.check,
                        { color: theme.primary },
                      ]}
                    >
                      ✓
                    </Text>
                  )}
                </Pressable>
              );
            })}
          </View>
        </View>

        <View
          style={[
            styles.summaryCard,
            { backgroundColor: theme.primaryLight },
          ]}
        >
          <Text style={styles.summaryEmoji}>
            🌷
          </Text>

          <View style={styles.summaryContent}>
            <Text
              style={[
                styles.summaryTitle,
                { color: theme.heading },
              ]}
            >
              {selectedSymptoms.length === 0
                ? 'No symptoms selected'
                : `${selectedSymptoms.length} symptom${
                    selectedSymptoms.length > 1
                      ? 's'
                      : ''
                  } selected`}
            </Text>

            <Text
              style={[
                styles.summaryText,
                { color: theme.text },
              ]}
            >
              Your symptoms help you understand your
              personal cycle patterns over time.
            </Text>
          </View>
        </View>

        {!saved && (
          <Pressable
            style={[
              styles.saveButton,
              {
                backgroundColor:
                  selectedSymptoms.length === 0
                    ? theme.border
                    : theme.primary,
              },
            ]}
            disabled={selectedSymptoms.length === 0}
            onPress={() => setSaved(true)}
          >
            <Text style={styles.saveText}>
              Save Symptoms
            </Text>
          </Pressable>
        )}

        {saved && (
          <View
            style={[
              styles.successCard,
              {
                backgroundColor: theme.primaryLight,
                borderColor: theme.border,
              },
            ]}
          >
            <Text style={styles.successEmoji}>
              🌷
            </Text>

            <View style={styles.successContent}>
              <Text
                style={[
                  styles.successTitle,
                  { color: theme.heading },
                ]}
              >
                Symptoms saved!
              </Text>

              <Text
                style={[
                  styles.successText,
                  { color: theme.text },
                ]}
              >
                Your symptoms have been recorded for
                today.
              </Text>

              <Pressable
                onPress={() => router.back()}
                style={[
                  styles.doneButton,
                  { backgroundColor: theme.primary },
                ]}
              >
                <Text style={styles.doneText}>
                  Done
                </Text>
              </Pressable>
            </View>
          </View>
        )}

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    width: '100%',
    maxWidth: 700,
    alignSelf: 'center',
    paddingHorizontal: 22,
    paddingTop: 50,
    paddingBottom: 50,
  },

  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },

  back: {
    fontSize: 17,
    fontWeight: '600',
  },

  emoji: {
    fontSize: 42,
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    marginTop: 8,
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 23,
    marginTop: 10,
  },

  card: {
    borderRadius: 24,
    padding: 22,
    marginTop: 28,
  },

  cardLabel: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.4,
  },

  cardTitle: {
    fontSize: 21,
    fontWeight: '700',
    marginTop: 9,
    marginBottom: 18,
  },

  symptomsGrid: {
    gap: 10,
  },

  symptom: {
    borderRadius: 16,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
  },

  symptomEmoji: {
    fontSize: 25,
    marginRight: 13,
  },

  symptomText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
  },

  check: {
    fontSize: 18,
    fontWeight: '700',
  },

  summaryCard: {
    borderRadius: 20,
    padding: 18,
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },

  summaryEmoji: {
    fontSize: 28,
    marginRight: 12,
  },

  summaryContent: {
    flex: 1,
  },

  summaryTitle: {
    fontSize: 15,
    fontWeight: '700',
  },

  summaryText: {
    fontSize: 12,
    lineHeight: 18,
    marginTop: 5,
  },

  saveButton: {
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 22,
  },

  saveText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  successCard: {
    borderRadius: 22,
    padding: 20,
    marginTop: 22,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
  },

  successEmoji: {
    fontSize: 32,
    marginRight: 14,
  },

  successContent: {
    flex: 1,
  },

  successTitle: {
    fontSize: 17,
    fontWeight: '700',
  },

  successText: {
    fontSize: 13,
    lineHeight: 19,
    marginTop: 5,
  },

  doneButton: {
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 13,
  },

  doneText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});