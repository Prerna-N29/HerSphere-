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

export default function ExploreScreen() {
  const { theme } = useTheme();

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

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text
              style={[
                styles.greeting,
                { color: theme.primary },
              ]}
            >
              Good morning 🌸
            </Text>

            <Text
              style={[
                styles.title,
                { color: theme.heading },
              ]}
            >
              Welcome to HerSphere
            </Text>
          </View>

          <Pressable
            style={[
              styles.profileCircle,
              { backgroundColor: theme.primaryLight },
            ]}
            onPress={() => router.push('/profile')}
          >
            <Text style={styles.profileEmoji}>
              🌷
            </Text>
          </Pressable>
        </View>

        {/* Daily Check-in */}
        <View
          style={[
            styles.checkInCard,
            { backgroundColor: theme.primaryLight },
          ]}
        >
          <Text
            style={[
              styles.checkInTitle,
              { color: theme.heading },
            ]}
          >
            How are you feeling today?
          </Text>

          <Text
            style={[
              styles.checkInSubtitle,
              { color: theme.text },
            ]}
          >
            Take a moment to check in with yourself.
          </Text>

          <View style={styles.moodRow}>
            {moods.map((mood) => (
              <Pressable
                key={mood.name}
                onPress={() => setSelectedMood(mood.name)}
                style={[
                  styles.moodButton,
                  {
                    backgroundColor: theme.background,
                    borderColor: 'transparent',
                  },
                  selectedMood === mood.name && {
                    backgroundColor: theme.card,
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

          {/* Mood Summary */}
          {selectedMood && (
            <View
              style={[
                styles.moodSummary,
                {
                  backgroundColor: theme.card,
                },
              ]}
            >
              <Text style={styles.summaryEmoji}>
                🌷
              </Text>

              <Text
                style={[
                  styles.summaryText,
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
        </View>

        {/* Wellness Features */}
        <Text
          style={[
            styles.sectionTitle,
            { color: theme.heading },
          ]}
        >
          Your Wellness Space
        </Text>

        <View style={styles.featureGrid}>

          {/* Menstrual Health */}
          <Pressable
            style={[
              styles.featureCard,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
            onPress={() => router.push('/menstrual')}
          >
            <View
              style={[
                styles.iconCircle,
                { backgroundColor: theme.primaryLight },
              ]}
            >
              <Text style={styles.featureEmoji}>
                🌸
              </Text>
            </View>

            <Text
              style={[
                styles.featureTitle,
                { color: theme.heading },
              ]}
            >
              Menstrual Health
            </Text>

            <Text
              style={[
                styles.featureDescription,
                { color: theme.text },
              ]}
            >
              Track and understand your cycle
            </Text>
          </Pressable>

          {/* Nutrition */}
          <Pressable
            style={[
              styles.featureCard,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
            onPress={() => router.push('/nutrition')}
          >
            <View
              style={[
                styles.iconCircle,
                { backgroundColor: theme.primaryLight },
              ]}
            >
              <Text style={styles.featureEmoji}>
                🥗
              </Text>
            </View>

            <Text
              style={[
                styles.featureTitle,
                { color: theme.heading },
              ]}
            >
              Smart Nutrition
            </Text>

            <Text
              style={[
                styles.featureDescription,
                { color: theme.text },
              ]}
            >
              Personalized food guidance
            </Text>
          </Pressable>

          {/* Emotional Well-being */}
          <Pressable
            style={[
              styles.featureCard,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
            onPress={() => router.push('/wellbeing')}
          >
            <View
              style={[
                styles.iconCircle,
                { backgroundColor: theme.primaryLight },
              ]}
            >
              <Text style={styles.featureEmoji}>
                💭
              </Text>
            </View>

            <Text
              style={[
                styles.featureTitle,
                { color: theme.heading },
              ]}
            >
              Well-being
            </Text>

            <Text
              style={[
                styles.featureDescription,
                { color: theme.text },
              ]}
            >
              Support your emotional health
            </Text>
          </Pressable>

          {/* AI Buddy */}
          <Pressable
            style={[
              styles.featureCard,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
            onPress={() => router.push('/ai-buddy')}
          >
            <View
              style={[
                styles.iconCircle,
                { backgroundColor: theme.primaryLight },
              ]}
            >
              <Text style={styles.featureEmoji}>
                🤖
              </Text>
            </View>

            <Text
              style={[
                styles.featureTitle,
                { color: theme.heading },
              ]}
            >
              AI Health Buddy
            </Text>

            <Text
              style={[
                styles.featureDescription,
                { color: theme.text },
              ]}
            >
              Ask questions in a safe space
            </Text>
          </Pressable>

        </View>

        {/* Explore */}
        <Text
          style={[
            styles.sectionTitle,
            { color: theme.heading },
          ]}
        >
          Explore HerSphere
        </Text>

        {/* Myth vs Fact */}
        <Pressable
          style={[
            styles.wideCard,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
          onPress={() => router.push('/myth-fact')}
        >
          <Text style={styles.wideEmoji}>
            📚
          </Text>

          <View style={styles.wideContent}>
            <Text
              style={[
                styles.wideTitle,
                { color: theme.heading },
              ]}
            >
              Myth vs Fact
            </Text>

            <Text
              style={[
                styles.wideDescription,
                { color: theme.text },
              ]}
            >
              Learn what is true and what isn't.
            </Text>
          </View>

          <Text
            style={[
              styles.arrow,
              { color: theme.primary },
            ]}
          >
            ›
          </Text>
        </Pressable>

        {/* Doctor Guidance */}
        <Pressable
          style={[
            styles.wideCard,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
          onPress={() => router.push('/doctor-guidance')}
        >
          <Text style={styles.wideEmoji}>
            🩺
          </Text>

          <View style={styles.wideContent}>
            <Text
              style={[
                styles.wideTitle,
                { color: theme.heading },
              ]}
            >
              Doctor Visit Guidance
            </Text>

            <Text
              style={[
                styles.wideDescription,
                { color: theme.text },
              ]}
            >
              Know when professional guidance may help.
            </Text>
          </View>

          <Text
            style={[
              styles.arrow,
              { color: theme.primary },
            ]}
          >
            ›
          </Text>
        </Pressable>

        {/* Sustainable Food */}
        <Pressable
          style={[
            styles.wideCard,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
          onPress={() => router.push('/sustainable-food')}
        >
          <Text style={styles.wideEmoji}>
            🌱
          </Text>

          <View style={styles.wideContent}>
            <Text
              style={[
                styles.wideTitle,
                { color: theme.heading },
              ]}
            >
              Sustainable Food
            </Text>

            <Text
              style={[
                styles.wideDescription,
                { color: theme.text },
              ]}
            >
              Discover healthier and sustainable choices.
            </Text>
          </View>

          <Text
            style={[
              styles.arrow,
              { color: theme.primary },
            ]}
          >
            ›
          </Text>
        </Pressable>

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
    paddingTop: 55,
    paddingBottom: 50,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  greeting: {
    fontSize: 15,
    fontWeight: '600',
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    marginTop: 5,
  },

  profileCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileEmoji: {
    fontSize: 25,
  },

  checkInCard: {
    borderRadius: 24,
    padding: 22,
    marginTop: 28,
  },

  checkInTitle: {
    fontSize: 19,
    fontWeight: '700',
  },

  checkInSubtitle: {
    fontSize: 14,
    marginTop: 6,
  },

  moodRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 18,
  },

  moodButton: {
    flex: 1,
    borderRadius: 15,
    alignItems: 'center',
    paddingVertical: 11,
    borderWidth: 1,
  },

  moodEmoji: {
    fontSize: 23,
  },

  moodText: {
    fontSize: 11,
    marginTop: 4,
    fontWeight: '600',
  },

  check: {
    position: 'absolute',
    top: 4,
    right: 6,
    fontSize: 13,
    fontWeight: '700',
  },

  moodSummary: {
    borderRadius: 16,
    padding: 12,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  summaryEmoji: {
    fontSize: 21,
    marginRight: 9,
  },

  summaryText: {
    fontSize: 12,
  },

  bold: {
    fontWeight: '700',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 30,
    marginBottom: 14,
  },

  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },

  featureCard: {
    width: '48%',
    minHeight: 165,
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
  },

  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  featureEmoji: {
    fontSize: 25,
  },

  featureTitle: {
    fontSize: 16,
    fontWeight: '700',
  },

  featureDescription: {
    fontSize: 12,
    lineHeight: 18,
    marginTop: 6,
  },

  wideCard: {
    borderRadius: 18,
    padding: 17,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
  },

  wideEmoji: {
    fontSize: 28,
    marginRight: 15,
  },

  wideContent: {
    flex: 1,
  },

  wideTitle: {
    fontSize: 15,
    fontWeight: '700',
  },

  wideDescription: {
    fontSize: 12,
    lineHeight: 18,
    marginTop: 3,
  },

  arrow: {
    fontSize: 27,
    marginLeft: 8,
  },
});