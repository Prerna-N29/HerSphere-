import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { router } from 'expo-router';

export default function MythFactScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const myths = [
    {
      myth: 'You should avoid exercise during your period.',
      fact: 'Gentle to moderate exercise can be comfortable for many people and may help with some period symptoms.',
    },
    {
      myth: 'Everyone has a 28-day menstrual cycle.',
      fact: 'Cycle length can vary between people and can also vary from one cycle to another.',
    },
    {
      myth: 'Period pain is always something you just have to tolerate.',
      fact: 'Some discomfort can be common, but severe or disruptive pain deserves attention from a healthcare professional.',
    },
    {
      myth: 'You cannot get pregnant during your period.',
      fact: 'Pregnancy is possible from sex during a period because ovulation timing can vary and sperm can survive for several days.',
    },
  ];

  const currentMyth = myths[currentIndex];

  const nextMyth = () => {
    setRevealed(false);

    if (currentIndex < myths.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
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
        <Text style={styles.emoji}>❓</Text>

        <Text style={styles.title}>
          Myth vs Fact
        </Text>

        <Text style={styles.subtitle}>
          Let's separate common menstrual health myths
          from evidence-based information.
        </Text>

        {/* Progress */}
        <Text style={styles.progress}>
          {currentIndex + 1} of {myths.length}
        </Text>

        {/* Myth Card */}
        <View style={styles.card}>

          <Text style={styles.label}>
            MYTH
          </Text>

          <Text style={styles.mythText}>
            “{currentMyth.myth}”
          </Text>

          {!revealed ? (
            <Pressable
              style={styles.revealButton}
              onPress={() => setRevealed(true)}
            >
              <Text style={styles.revealText}>
                Reveal Fact
              </Text>
            </Pressable>
          ) : (
            <View style={styles.factBox}>

              <Text style={styles.factLabel}>
                🌷 FACT
              </Text>

              <Text style={styles.factText}>
                {currentMyth.fact}
              </Text>

            </View>
          )}

        </View>

        {/* Next */}
        {revealed && (
          <Pressable
            style={styles.nextButton}
            onPress={nextMyth}
          >
            <Text style={styles.nextText}>
              Next Myth →
            </Text>
          </Pressable>
        )}

        {/* Reminder */}
        <View style={styles.note}>
          <Text style={styles.noteTitle}>
            💗 Remember
          </Text>

          <Text style={styles.noteText}>
            Menstrual health information can vary depending
            on individual circumstances. When something
            concerns you, a qualified healthcare professional
            can provide personalized guidance.
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

  progress: {
    fontSize: 13,
    fontWeight: '600',
    color: '#C96F89',
    marginTop: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#F3DDE3',
  },

  label: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: '#C96F89',
  },

  mythText: {
    fontSize: 21,
    lineHeight: 30,
    fontWeight: '700',
    color: '#7A4055',
    marginTop: 14,
  },

  revealButton: {
    backgroundColor: '#C96F89',
    paddingVertical: 14,
    borderRadius: 28,
    alignItems: 'center',
    marginTop: 25,
  },

  revealText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

  factBox: {
    backgroundColor: '#FFF0F3',
    borderRadius: 18,
    padding: 18,
    marginTop: 22,
  },

  factLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#C96F89',
  },

  factText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#7A4055',
    marginTop: 8,
  },

  nextButton: {
    backgroundColor: '#F8DDE5',
    paddingVertical: 15,
    borderRadius: 28,
    alignItems: 'center',
    marginTop: 18,
  },

  nextText: {
    color: '#7A4055',
    fontSize: 15,
    fontWeight: '700',
  },

  note: {
    backgroundColor: '#FFF0F3',
    borderRadius: 20,
    padding: 18,
    marginTop: 25,
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