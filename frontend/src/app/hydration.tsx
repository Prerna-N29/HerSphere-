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

export default function HydrationScreen() {
  const { theme } = useTheme();

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
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      <View style={styles.content}>

        {/* Back */}
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

        {/* Header */}
        <Text style={styles.emoji}>
          💧
        </Text>

        <Text
          style={[
            styles.title,
            { color: theme.heading },
          ]}
        >
          Hydration
        </Text>

        <Text
          style={[
            styles.subtitle,
            { color: theme.text },
          ]}
        >
          Simple ways to stay hydrated throughout your
          day and support your everyday wellbeing.
        </Text>

        {/* Tracker */}
        <View
          style={[
            styles.trackerCard,
            { backgroundColor: theme.primaryLight },
          ]}
        >
          <Text
            style={[
              styles.cardLabel,
              { color: theme.primary },
            ]}
          >
            TODAY'S HYDRATION
          </Text>

          <Text
            style={[
              styles.amount,
              { color: theme.heading },
            ]}
          >
            {water} ml
          </Text>

          <Text
            style={[
              styles.goal,
              { color: theme.text },
            ]}
          >
            of {goal} ml goal
          </Text>

          {/* Progress */}
          <View
            style={[
              styles.progressBackground,
              { backgroundColor: theme.background },
            ]}
          >
            <View
              style={[
                styles.progressFill,
                {
                  width: `${percentage}%`,
                  backgroundColor: theme.primary,
                },
              ]}
            />
          </View>

          <Text
            style={[
              styles.progressText,
              { color: theme.text },
            ]}
          >
            {percentage}% completed
          </Text>

          {/* Add Water */}
          <Text
            style={[
              styles.addTitle,
              { color: theme.heading },
            ]}
          >
            Add water
          </Text>

          <View style={styles.buttonRow}>

            <Pressable
              style={[
                styles.waterButton,
                { backgroundColor: theme.background },
              ]}
              onPress={() => addWater(250)}
            >
              <Text style={styles.waterEmoji}>
                💧
              </Text>

              <Text
                style={[
                  styles.waterText,
                  { color: theme.heading },
                ]}
              >
                +250 ml
              </Text>
            </Pressable>

            <Pressable
              style={[
                styles.waterButton,
                { backgroundColor: theme.background },
              ]}
              onPress={() => addWater(500)}
            >
              <Text style={styles.waterEmoji}>
                💧
              </Text>

              <Text
                style={[
                  styles.waterText,
                  { color: theme.heading },
                ]}
              >
                +500 ml
              </Text>
            </Pressable>

          </View>

          <Pressable
            onPress={resetWater}
            style={styles.resetButton}
          >
            <Text
              style={[
                styles.resetText,
                { color: theme.primary },
              ]}
            >
              Reset today's intake
            </Text>
          </Pressable>

        </View>

        {/* Tips */}
        <Text
          style={[
            styles.sectionTitle,
            { color: theme.heading },
          ]}
        >
          Simple Hydration Tips
        </Text>

        {/* Tip 1 */}
        <View
          style={[
            styles.tipCard,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
        >
          <Text style={styles.tipEmoji}>
            🥤
          </Text>

          <View style={styles.tipContent}>
            <Text
              style={[
                styles.tipTitle,
                { color: theme.heading },
              ]}
            >
              Keep water nearby
            </Text>

            <Text
              style={[
                styles.tipText,
                { color: theme.text },
              ]}
            >
              Keeping a bottle or glass of water nearby
              can make regular drinking easier.
            </Text>
          </View>
        </View>

        {/* Tip 2 */}
        <View
          style={[
            styles.tipCard,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
        >
          <Text style={styles.tipEmoji}>
            🍉
          </Text>

          <View style={styles.tipContent}>
            <Text
              style={[
                styles.tipTitle,
                { color: theme.heading },
              ]}
            >
              Eat water-rich foods
            </Text>

            <Text
              style={[
                styles.tipText,
                { color: theme.text },
              ]}
            >
              Fruits and vegetables can also contribute
              to your overall fluid intake.
            </Text>
          </View>
        </View>

        {/* Tip 3 */}
        <View
          style={[
            styles.tipCard,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
        >
          <Text style={styles.tipEmoji}>
            🌤️
          </Text>

          <View style={styles.tipContent}>
            <Text
              style={[
                styles.tipTitle,
                { color: theme.heading },
              ]}
            >
              Pay attention to your day
            </Text>

            <Text
              style={[
                styles.tipText,
                { color: theme.text },
              ]}
            >
              Fluid needs can vary depending on activity,
              weather and individual circumstances.
            </Text>
          </View>
        </View>

        {/* Reminder */}
        <View
          style={[
            styles.note,
            { backgroundColor: theme.primaryLight },
          ]}
        >
          <Text
            style={[
              styles.noteTitle,
              { color: theme.heading },
            ]}
          >
            💗 A gentle reminder
          </Text>

          <Text
            style={[
              styles.noteText,
              { color: theme.text },
            ]}
          >
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

  trackerCard: {
    borderRadius: 24,
    padding: 22,
    marginTop: 28,
  },

  cardLabel: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.4,
  },

  amount: {
    fontSize: 38,
    fontWeight: '700',
    marginTop: 12,
  },

  goal: {
    fontSize: 13,
    marginTop: 2,
  },

  progressBackground: {
    height: 12,
    borderRadius: 10,
    marginTop: 20,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    borderRadius: 10,
  },

  progressText: {
    fontSize: 12,
    marginTop: 8,
  },

  addTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 22,
    marginBottom: 10,
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },

  waterButton: {
    flex: 1,
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
  },

  resetButton: {
    alignItems: 'center',
    marginTop: 16,
  },

  resetText: {
    fontSize: 12,
    fontWeight: '600',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 30,
    marginBottom: 14,
  },

  tipCard: {
    borderRadius: 20,
    padding: 18,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
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
  },

  tipText: {
    fontSize: 12,
    lineHeight: 19,
    marginTop: 5,
  },

  note: {
    borderRadius: 20,
    padding: 18,
    marginTop: 8,
  },

  noteTitle: {
    fontSize: 15,
    fontWeight: '700',
  },

  noteText: {
    fontSize: 12,
    lineHeight: 19,
    marginTop: 7,
  },
});