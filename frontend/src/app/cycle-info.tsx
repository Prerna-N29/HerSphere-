import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { router } from 'expo-router';
import { useTheme } from '../theme/ThemeContext';

export default function CycleInfoScreen() {
  const { theme } = useTheme();

  const phases = [
    {
      emoji: '🩸',
      title: '1. Menstrual Phase',
      text: 'This is when your period occurs and the uterus sheds its lining.',
    },
    {
      emoji: '🌱',
      title: '2. Follicular Phase',
      text: 'Your body prepares an egg for ovulation and estrogen levels gradually increase.',
    },
    {
      emoji: '🥚',
      title: '3. Ovulation',
      text: 'An ovary releases an egg. The timing can vary between people and between cycles.',
    },
    {
      emoji: '🌙',
      title: '4. Luteal Phase',
      text: 'Hormone levels change as your body prepares for the next stage of the cycle.',
    },
  ];

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

        <Text style={styles.emoji}>🌸</Text>

        <Text
          style={[
            styles.title,
            { color: theme.heading },
          ]}
        >
          Your Menstrual Cycle
        </Text>

        <Text
          style={[
            styles.subtitle,
            { color: theme.text },
          ]}
        >
          Understanding your cycle can help you learn more
          about your body and notice your own patterns.
        </Text>

        {phases.map((phase) => (
          <View
            key={phase.title}
            style={[
              styles.card,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
          >
            <Text style={styles.cardEmoji}>
              {phase.emoji}
            </Text>

            <Text
              style={[
                styles.cardTitle,
                { color: theme.heading },
              ]}
            >
              {phase.title}
            </Text>

            <Text
              style={[
                styles.cardText,
                { color: theme.text },
              ]}
            >
              {phase.text}
            </Text>
          </View>
        ))}

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
            💗 Remember
          </Text>

          <Text
            style={[
              styles.noteText,
              { color: theme.text },
            ]}
          >
            Every person's cycle can be different. Tracking
            your own patterns is more useful than comparing
            yourself with someone else.
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
    fontSize: 30,
    fontWeight: '700',
    marginTop: 8,
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 23,
    marginTop: 10,
    marginBottom: 24,
  },

  card: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
  },

  cardEmoji: {
    fontSize: 30,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 8,
  },

  cardText: {
    fontSize: 13,
    lineHeight: 21,
    marginTop: 8,
  },

  note: {
    borderRadius: 20,
    padding: 18,
    marginTop: 5,
  },

  noteTitle: {
    fontSize: 16,
    fontWeight: '700',
  },

  noteText: {
    fontSize: 12,
    lineHeight: 19,
    marginTop: 7,
  },
});