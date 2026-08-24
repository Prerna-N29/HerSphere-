import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';
import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';

export default function WellbeingScreen() {
  const { themeName } = useTheme();
  const theme = themes[themeName];

  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods = [
    { name: 'Great', emoji: '😊' },
    { name: 'Good', emoji: '🙂' },
    { name: 'Okay', emoji: '😐' },
    { name: 'Low', emoji: '😔' },
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

        <Text style={styles.emoji}>💭</Text>

        <Text
          style={[
            styles.title,
            { color: theme.heading },
          ]}
        >
          Emotional Well-being
        </Text>

        <Text
          style={[
            styles.subtitle,
            { color: theme.text },
          ]}
        >
          Take a moment to check in with yourself and
          explore simple ways to support your emotional
          well-being.
        </Text>

        <View
          style={[
            styles.highlightCard,
            { backgroundColor: theme.primaryLight },
          ]}
        >
          <Text style={styles.highlightEmoji}>🌷</Text>

          <Text
            style={[
              styles.highlightTitle,
              { color: theme.heading },
            ]}
          >
            Your feelings matter
          </Text>

          <Text
            style={[
              styles.highlightText,
              { color: theme.text },
            ]}
          >
            There is no right or wrong way to feel. Making
            space for your emotions and understanding your
            needs can be an important part of wellbeing.
          </Text>
        </View>

        <Text
          style={[
            styles.sectionTitle,
            { color: theme.heading },
          ]}
        >
          How are you feeling today?
        </Text>

        <View
          style={[
            styles.moodCard,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
        >
          {moods.map((mood) => (
            <Pressable
              key={mood.name}
              onPress={() => setSelectedMood(mood.name)}
              style={[
                styles.moodOption,
                {
                  backgroundColor: theme.primaryLight,
                  borderColor: 'transparent',
                },
                selectedMood === mood.name && {
                  backgroundColor: theme.primaryLight,
                  borderColor: theme.primary,
                },
              ]}
            >
              <Text style={styles.moodEmoji}>
                {mood.emoji}
              </Text>

              <Text
                style={[
                  styles.moodText,
                  { color: theme.heading },
                ]}
              >
                {mood.name}
              </Text>

              {selectedMood === mood.name && (
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
          ))}
        </View>

        {selectedMood && (
          <View
            style={[
              styles.moodSummary,
              { backgroundColor: theme.primaryLight },
            ]}
          >
            <Text style={styles.moodSummaryEmoji}>
              🌷
            </Text>

            <Text
              style={[
                styles.moodSummaryText,
                { color: theme.heading },
              ]}
            >
              You're feeling{' '}
              <Text style={styles.bold}>
                {selectedMood}
              </Text>{' '}
              today.
            </Text>
          </View>
        )}

        <Text
          style={[
            styles.sectionTitle,
            { color: theme.heading },
          ]}
        >
          Explore Well-being
        </Text>

        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
        >
          <Text style={styles.cardEmoji}>🌸</Text>

          <View style={styles.cardContent}>
            <Text
              style={[
                styles.cardTitle,
                { color: theme.heading },
              ]}
            >
              Small acts of self-care
            </Text>

            <Text
              style={[
                styles.cardText,
                { color: theme.text },
              ]}
            >
              Rest, take a short walk, listen to music,
              spend time with someone you trust, or simply
              give yourself some quiet time.
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
        >
          <Text style={styles.cardEmoji}>🧘</Text>

          <View style={styles.cardContent}>
            <Text
              style={[
                styles.cardTitle,
                { color: theme.heading },
              ]}
            >
              Take a calming moment
            </Text>

            <Text
              style={[
                styles.cardText,
                { color: theme.text },
              ]}
            >
              Slow breathing, stretching or taking a short
              break can help you pause and reconnect with
              yourself.
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
        >
          <Text style={styles.cardEmoji}>📝</Text>

          <View style={styles.cardContent}>
            <Text
              style={[
                styles.cardTitle,
                { color: theme.heading },
              ]}
            >
              Write it down
            </Text>

            <Text
              style={[
                styles.cardText,
                { color: theme.text },
              ]}
            >
              Writing about your thoughts or emotions can
              help you notice patterns and understand what
              you may need.
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
        >
          <Text style={styles.cardEmoji}>💗</Text>

          <View style={styles.cardContent}>
            <Text
              style={[
                styles.cardTitle,
                { color: theme.heading },
              ]}
            >
              Stay connected
            </Text>

            <Text
              style={[
                styles.cardText,
                { color: theme.text },
              ]}
            >
              Talking with a trusted friend, family member
              or another supportive person can make difficult
              moments feel less overwhelming.
            </Text>
          </View>
        </View>

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
            🌷 Be gentle with yourself
          </Text>

          <Text
            style={[
              styles.noteText,
              { color: theme.text },
            ]}
          >
            You do not have to feel positive all the time.
            Looking after your emotional wellbeing can start
            with something as simple as acknowledging how
            you feel today.
          </Text>
        </View>

        <View
          style={[
            styles.supportCard,
            { backgroundColor: theme.primaryLight },
          ]}
        >
          <Text
            style={[
              styles.supportTitle,
              { color: theme.heading },
            ]}
          >
            🩺 When extra support may help
          </Text>

          <Text
            style={[
              styles.supportText,
              { color: theme.text },
            ]}
          >
            If difficult feelings are persistent, become
            overwhelming, or start affecting your everyday
            life, consider talking to a qualified mental
            health professional or another trusted adult.
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
    fontSize: 31,
    fontWeight: '700',
    marginTop: 8,
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 23,
    marginTop: 10,
  },

  highlightCard: {
    borderRadius: 24,
    padding: 22,
    marginTop: 28,
  },

  highlightEmoji: {
    fontSize: 30,
  },

  highlightTitle: {
    fontSize: 19,
    fontWeight: '700',
    marginTop: 10,
  },

  highlightText: {
    fontSize: 13,
    lineHeight: 21,
    marginTop: 7,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 30,
    marginBottom: 14,
  },

  moodCard: {
    borderRadius: 20,
    padding: 14,
    flexDirection: 'row',
    gap: 8,
    borderWidth: 1,
  },

  moodOption: {
    flex: 1,
    borderRadius: 15,
    alignItems: 'center',
    paddingVertical: 12,
    borderWidth: 1,
  },

  moodEmoji: {
    fontSize: 24,
  },

  moodText: {
    fontSize: 11,
    marginTop: 4,
    fontWeight: '600',
  },

  check: {
    position: 'absolute',
    top: 5,
    right: 7,
    fontSize: 13,
    fontWeight: '700',
  },

  moodSummary: {
    borderRadius: 18,
    padding: 15,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  moodSummaryEmoji: {
    fontSize: 23,
    marginRight: 10,
  },

  moodSummaryText: {
    fontSize: 13,
  },

  bold: {
    fontWeight: '700',
  },

  card: {
    borderRadius: 18,
    padding: 17,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
  },

  cardEmoji: {
    fontSize: 28,
    marginRight: 15,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
  },

  cardText: {
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

  supportCard: {
    borderRadius: 20,
    padding: 18,
    marginTop: 16,
  },

  supportTitle: {
    fontSize: 15,
    fontWeight: '700',
  },

  supportText: {
    fontSize: 12,
    lineHeight: 19,
    marginTop: 7,
  },
});