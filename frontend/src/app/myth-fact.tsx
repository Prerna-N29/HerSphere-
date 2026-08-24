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

export default function MythFactScreen() {
  const { theme } = useTheme();

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

        <Text style={styles.emoji}>❓</Text>

        <Text
          style={[
            styles.title,
            { color: theme.heading },
          ]}
        >
          Myth vs Fact
        </Text>

        <Text
          style={[
            styles.subtitle,
            { color: theme.text },
          ]}
        >
          Let's separate common menstrual health myths
          from evidence-based information.
        </Text>

        <Text
          style={[
            styles.progress,
            { color: theme.primary },
          ]}
        >
          {currentIndex + 1} of {myths.length}
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
          <Text
            style={[
              styles.label,
              { color: theme.primary },
            ]}
          >
            MYTH
          </Text>

          <Text
            style={[
              styles.mythText,
              { color: theme.heading },
            ]}
          >
            “{currentMyth.myth}”
          </Text>

          {!revealed ? (
            <Pressable
              style={[
                styles.revealButton,
                { backgroundColor: theme.primary },
              ]}
              onPress={() => setRevealed(true)}
            >
              <Text style={styles.revealText}>
                Reveal Fact
              </Text>
            </Pressable>
          ) : (
            <View
              style={[
                styles.factBox,
                { backgroundColor: theme.primaryLight },
              ]}
            >
              <Text
                style={[
                  styles.factLabel,
                  { color: theme.primary },
                ]}
              >
                🌷 FACT
              </Text>

              <Text
                style={[
                  styles.factText,
                  { color: theme.heading },
                ]}
              >
                {currentMyth.fact}
              </Text>
            </View>
          )}
        </View>

        {revealed && (
          <Pressable
            style={[
              styles.nextButton,
              { backgroundColor: theme.primaryLight },
            ]}
            onPress={nextMyth}
          >
            <Text
              style={[
                styles.nextText,
                { color: theme.heading },
              ]}
            >
              Next Myth →
            </Text>
          </Pressable>
        )}

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

  progress: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 20,
  },

  card: {
    borderRadius: 24,
    padding: 24,
    marginTop: 12,
    borderWidth: 1,
  },

  label: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
  },

  mythText: {
    fontSize: 21,
    lineHeight: 30,
    fontWeight: '700',
    marginTop: 14,
  },

  revealButton: {
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
    borderRadius: 18,
    padding: 18,
    marginTop: 22,
  },

  factLabel: {
    fontSize: 13,
    fontWeight: '700',
  },

  factText: {
    fontSize: 14,
    lineHeight: 22,
    marginTop: 8,
  },

  nextButton: {
    paddingVertical: 15,
    borderRadius: 28,
    alignItems: 'center',
    marginTop: 18,
  },

  nextText: {
    fontSize: 15,
    fontWeight: '700',
  },

  note: {
    borderRadius: 20,
    padding: 18,
    marginTop: 25,
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