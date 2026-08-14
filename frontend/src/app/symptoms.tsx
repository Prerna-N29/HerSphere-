import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { router } from 'expo-router';

export default function SymptomsScreen() {
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
    <ScrollView style={styles.container}>
      <View style={styles.content}>

        {/* Back */}
        <Pressable
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.back}>‹ Back</Text>
        </Pressable>

        {/* Header */}
        <Text style={styles.emoji}>💗</Text>

        <Text style={styles.title}>
          Track Symptoms
        </Text>

        <Text style={styles.subtitle}>
          How are you feeling today? Select anything
          you're experiencing.
        </Text>

        {/* Symptoms Card */}
        <View style={styles.card}>

          <Text style={styles.cardLabel}>
            TODAY'S SYMPTOMS
          </Text>

          <Text style={styles.cardTitle}>
            What are you experiencing?
          </Text>

          <View style={styles.symptomsGrid}>
            {symptoms.map((symptom) => (
              <Pressable
                key={symptom.name}
                style={[
                  styles.symptom,
                  selectedSymptoms.includes(symptom.name) &&
                    styles.selectedSymptom,
                ]}
                onPress={() =>
                  toggleSymptom(symptom.name)
                }
              >
                <Text style={styles.symptomEmoji}>
                  {symptom.emoji}
                </Text>

                <Text style={styles.symptomText}>
                  {symptom.name}
                </Text>

                {selectedSymptoms.includes(
                  symptom.name
                ) && (
                  <Text style={styles.check}>
                    ✓
                  </Text>
                )}
              </Pressable>
            ))}
          </View>
        </View>

        {/* Selected count */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryEmoji}>
            🌷
          </Text>

          <View style={styles.summaryContent}>
            <Text style={styles.summaryTitle}>
              {selectedSymptoms.length === 0
                ? 'No symptoms selected'
                : `${selectedSymptoms.length} symptom${
                    selectedSymptoms.length > 1
                      ? 's'
                      : ''
                  } selected`}
            </Text>

            <Text style={styles.summaryText}>
              Your symptoms help you understand your
              personal cycle patterns over time.
            </Text>
          </View>
        </View>

        {/* Save Button */}
        {!saved && (
          <Pressable
            style={[
              styles.saveButton,
              selectedSymptoms.length === 0 &&
                styles.disabledButton,
            ]}
            disabled={selectedSymptoms.length === 0}
            onPress={() => setSaved(true)}
          >
            <Text style={styles.saveText}>
              Save Symptoms
            </Text>
          </Pressable>
        )}

        {/* Success Message */}
        {saved && (
          <View style={styles.successCard}>
            <Text style={styles.successEmoji}>
              🌷
            </Text>

            <View style={styles.successContent}>
              <Text style={styles.successTitle}>
                Symptoms saved!
              </Text>

              <Text style={styles.successText}>
                Your symptoms have been recorded for
                today.
              </Text>

              <Pressable
                onPress={() => router.back()}
                style={styles.doneButton}
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
    backgroundColor: '#FFF7F8',
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
    color: '#C96F89',
    fontWeight: '600',
  },

  emoji: {
    fontSize: 42,
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#7A4055',
    marginTop: 8,
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 23,
    color: '#8A747B',
    marginTop: 10,
  },

  card: {
    backgroundColor: '#F8DDE5',
    borderRadius: 24,
    padding: 22,
    marginTop: 28,
  },

  cardLabel: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.4,
    color: '#C96F89',
  },

  cardTitle: {
    fontSize: 21,
    fontWeight: '700',
    color: '#7A4055',
    marginTop: 9,
    marginBottom: 18,
  },

  symptomsGrid: {
    gap: 10,
  },

  symptom: {
    backgroundColor: '#FFF7F8',
    borderRadius: 16,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },

  selectedSymptom: {
    backgroundColor: '#FFFFFF',
    borderColor: '#C96F89',
  },

  symptomEmoji: {
    fontSize: 25,
    marginRight: 13,
  },

  symptomText: {
    flex: 1,
    fontSize: 15,
    color: '#7A4055',
    fontWeight: '600',
  },

  check: {
    fontSize: 18,
    fontWeight: '700',
    color: '#C96F89',
  },

  summaryCard: {
    backgroundColor: '#FFF0F3',
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
    color: '#7A4055',
  },

  summaryText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#8A747B',
    marginTop: 5,
  },

  saveButton: {
    backgroundColor: '#C96F89',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 22,
  },

  disabledButton: {
    backgroundColor: '#DDB8C3',
  },

  saveText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  successCard: {
    backgroundColor: '#FFF0F3',
    borderRadius: 22,
    padding: 20,
    marginTop: 22,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: '#F3DDE3',
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
    color: '#7A4055',
  },

  successText: {
    fontSize: 13,
    lineHeight: 19,
    color: '#8A747B',
    marginTop: 5,
  },

  doneButton: {
    backgroundColor: '#C96F89',
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