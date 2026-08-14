import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { router } from 'expo-router';

export default function HydrationScreen() {
  const [water, setWater] = useState(0);

  const goal = 2000;
  const percentage = Math.min(
    Math.round((water / goal) * 100),
    100
  );

  const addWater = (amount: number) => {
    setWater((current) =>
      Math.min(current + amount, goal)
    );
  };

  const resetWater = () => {
    setWater(0);
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
        <Text style={styles.emoji}>💧</Text>

        <Text style={styles.title}>
          Hydration
        </Text>

        <Text style={styles.subtitle}>
          Simple ways to stay hydrated throughout your
          day and support your everyday wellbeing.
        </Text>

        {/* Tracker */}
        <View style={styles.trackerCard}>

          <Text style={styles.cardLabel}>
            TODAY'S HYDRATION
          </Text>

          <Text style={styles.amount}>
            {water} ml
          </Text>

          <Text style={styles.goal}>
            of {goal} ml goal
          </Text>

          {/* Progress */}
          <View style={styles.progressBackground}>
            <View
              style={[
                styles.progressFill,
                { width: `${percentage}%` },
              ]}
            />
          </View>

          <Text style={styles.progressText}>
            {percentage}% completed
          </Text>

          {/* Add Water */}
          <Text style={styles.addTitle}>
            Add water
          </Text>

          <View style={styles.buttonRow}>

            <Pressable
              style={styles.waterButton}
              onPress={() => addWater(250)}
            >
              <Text style={styles.waterEmoji}>
                💧
              </Text>

              <Text style={styles.waterText}>
                +250 ml
              </Text>
            </Pressable>

            <Pressable
              style={styles.waterButton}
              onPress={() => addWater(500)}
            >
              <Text style={styles.waterEmoji}>
                💧
              </Text>

              <Text style={styles.waterText}>
                +500 ml
              </Text>
            </Pressable>

          </View>

          <Pressable
            onPress={resetWater}
            style={styles.resetButton}
          >
            <Text style={styles.resetText}>
              Reset today's intake
            </Text>
          </Pressable>

        </View>

        {/* Tips */}
        <Text style={styles.sectionTitle}>
          Simple Hydration Tips
        </Text>

        <View style={styles.tipCard}>
          <Text style={styles.tipEmoji}>🥤</Text>

          <View style={styles.tipContent}>
            <Text style={styles.tipTitle}>
              Keep water nearby
            </Text>

            <Text style={styles.tipText}>
              Keeping a bottle or glass of water nearby
              can make regular drinking easier.
            </Text>
          </View>
        </View>

        <View style={styles.tipCard}>
          <Text style={styles.tipEmoji}>🍉</Text>

          <View style={styles.tipContent}>
            <Text style={styles.tipTitle}>
              Eat water-rich foods
            </Text>

            <Text style={styles.tipText}>
              Fruits and vegetables can also contribute
              to your overall fluid intake.
            </Text>
          </View>
        </View>

        <View style={styles.tipCard}>
          <Text style={styles.tipEmoji}>🌤️</Text>

          <View style={styles.tipContent}>
            <Text style={styles.tipTitle}>
              Pay attention to your day
            </Text>

            <Text style={styles.tipText}>
              Fluid needs can vary depending on activity,
              weather and individual circumstances.
            </Text>
          </View>
        </View>

        {/* Reminder */}
        <View style={styles.note}>
          <Text style={styles.noteTitle}>
            💗 A gentle reminder
          </Text>

          <Text style={styles.noteText}>
            The 2,000 ml value shown here is only a
            simple tracking target, not a medical
            requirement. Individual needs can vary.
          </Text>
        </View>

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

  trackerCard: {
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

  amount: {
    fontSize: 38,
    fontWeight: '700',
    color: '#7A4055',
    marginTop: 12,
  },

  goal: {
    fontSize: 13,
    color: '#8A747B',
    marginTop: 2,
  },

  progressBackground: {
    height: 12,
    backgroundColor: '#FFF7F8',
    borderRadius: 10,
    marginTop: 20,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    backgroundColor: '#C96F89',
    borderRadius: 10,
  },

  progressText: {
    fontSize: 12,
    color: '#8A747B',
    marginTop: 8,
  },

  addTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#7A4055',
    marginTop: 22,
    marginBottom: 10,
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },

  waterButton: {
    flex: 1,
    backgroundColor: '#FFF7F8',
    borderRadius: 16,
    paddingVertical: 13,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  waterEmoji: {
    fontSize: 20,
    marginRight: 7,
  },

  waterText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#7A4055',
  },

  resetButton: {
    alignItems: 'center',
    marginTop: 16,
  },

  resetText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#C96F89',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#7A4055',
    marginTop: 30,
    marginBottom: 14,
  },

  tipCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: '#F3DDE3',
  },

  tipEmoji: {
    fontSize: 28,
    marginRight: 14,
  },

  tipContent: {
    flex: 1,
  },

  tipTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#7A4055',
  },

  tipText: {
    fontSize: 12,
    lineHeight: 19,
    color: '#8A747B',
    marginTop: 5,
  },

  note: {
    backgroundColor: '#FFF0F3',
    borderRadius: 20,
    padding: 18,
    marginTop: 8,
  },

  noteTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#7A4055',
  },

  noteText: {
    fontSize: 12,
    lineHeight: 19,
    color: '#8A747B',
    marginTop: 7,
  },
});