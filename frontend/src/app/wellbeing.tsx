import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

export default function WellbeingScreen() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods = [
    { name: 'Great', emoji: '😊' },
    { name: 'Good', emoji: '🙂' },
    { name: 'Okay', emoji: '😐' },
    { name: 'Low', emoji: '😔' },
  ];

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
        <Text style={styles.emoji}>💭</Text>

        <Text style={styles.title}>
          Emotional Well-being
        </Text>

        <Text style={styles.subtitle}>
          Take a moment to check in with yourself and
          explore simple ways to support your emotional
          well-being.
        </Text>

        {/* Highlight */}
        <View style={styles.highlightCard}>
          <Text style={styles.highlightEmoji}>
            🌷
          </Text>

          <Text style={styles.highlightTitle}>
            Your feelings matter
          </Text>

          <Text style={styles.highlightText}>
            There is no right or wrong way to feel. Making
            space for your emotions and understanding your
            needs can be an important part of wellbeing.
          </Text>
        </View>

        {/* Mood Check-in */}
        <Text style={styles.sectionTitle}>
          How are you feeling today?
        </Text>

        <View style={styles.moodCard}>
          {moods.map((mood) => (
            <Pressable
              key={mood.name}
              onPress={() => setSelectedMood(mood.name)}
              style={[
                styles.moodOption,
                selectedMood === mood.name &&
                  styles.selectedMood,
              ]}
            >
              <Text style={styles.moodEmoji}>
                {mood.emoji}
              </Text>

              <Text style={styles.moodText}>
                {mood.name}
              </Text>

              {selectedMood === mood.name && (
                <Text style={styles.check}>
                  ✓
                </Text>
              )}
            </Pressable>
          ))}
        </View>

        {/* Selected Mood */}
        {selectedMood && (
          <View style={styles.moodSummary}>
            <Text style={styles.moodSummaryEmoji}>
              🌷
            </Text>

            <Text style={styles.moodSummaryText}>
              You're feeling <Text style={styles.bold}>{selectedMood}</Text> today.
            </Text>
          </View>
        )}

        {/* Wellbeing Areas */}
        <Text style={styles.sectionTitle}>
          Explore Well-being
        </Text>

        {/* Self Care */}
        <View style={styles.card}>
          <Text style={styles.cardEmoji}>🌸</Text>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              Small acts of self-care
            </Text>

            <Text style={styles.cardText}>
              Rest, take a short walk, listen to music,
              spend time with someone you trust, or simply
              give yourself some quiet time.
            </Text>
          </View>
        </View>

        {/* Breathing */}
        <View style={styles.card}>
          <Text style={styles.cardEmoji}>🧘</Text>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              Take a calming moment
            </Text>

            <Text style={styles.cardText}>
              Slow breathing, stretching or taking a short
              break can help you pause and reconnect with
              yourself.
            </Text>
          </View>
        </View>

        {/* Journal */}
        <View style={styles.card}>
          <Text style={styles.cardEmoji}>📝</Text>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              Write it down
            </Text>

            <Text style={styles.cardText}>
              Writing about your thoughts or emotions can
              help you notice patterns and understand what
              you may need.
            </Text>
          </View>
        </View>

        {/* Connection */}
        <View style={styles.card}>
          <Text style={styles.cardEmoji}>💗</Text>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              Stay connected
            </Text>

            <Text style={styles.cardText}>
              Talking with a trusted friend, family member
              or another supportive person can make difficult
              moments feel less overwhelming.
            </Text>
          </View>
        </View>

        {/* Gentle Reminder */}
        <View style={styles.note}>
          <Text style={styles.noteTitle}>
            🌷 Be gentle with yourself
          </Text>

          <Text style={styles.noteText}>
            You do not have to feel positive all the time.
            Looking after your emotional wellbeing can start
            with something as simple as acknowledging how
            you feel today.
          </Text>
        </View>

        {/* Professional Support */}
        <View style={styles.supportCard}>
          <Text style={styles.supportTitle}>
            🩺 When extra support may help
          </Text>

          <Text style={styles.supportText}>
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
    fontSize: 31,
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

  highlightCard: {
    backgroundColor: '#F8DDE5',
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
    color: '#7A4055',
    marginTop: 10,
  },

  highlightText: {
    fontSize: 13,
    lineHeight: 21,
    color: '#8A747B',
    marginTop: 7,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#7A4055',
    marginTop: 30,
    marginBottom: 14,
  },

  moodCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 14,
    flexDirection: 'row',
    gap: 8,
    borderWidth: 1,
    borderColor: '#F3DDE3',
  },

  moodOption: {
    flex: 1,
    backgroundColor: '#FFF0F3',
    borderRadius: 15,
    alignItems: 'center',
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: 'transparent',
  },

  selectedMood: {
    backgroundColor: '#F8DDE5',
    borderColor: '#C96F89',
  },

  moodEmoji: {
    fontSize: 24,
  },

  moodText: {
    fontSize: 11,
    color: '#7A4055',
    marginTop: 4,
    fontWeight: '600',
  },

  check: {
    position: 'absolute',
    top: 5,
    right: 7,
    fontSize: 13,
    fontWeight: '700',
    color: '#C96F89',
  },

  moodSummary: {
    backgroundColor: '#FFF0F3',
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
    color: '#7A4055',
  },

  bold: {
    fontWeight: '700',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 17,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: '#F3DDE3',
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
    color: '#7A4055',
  },

  cardText: {
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

  supportCard: {
    backgroundColor: '#F8DDE5',
    borderRadius: 20,
    padding: 18,
    marginTop: 16,
  },

  supportTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#7A4055',
  },

  supportText: {
    fontSize: 12,
    lineHeight: 19,
    color: '#8A747B',
    marginTop: 7,
  },
});