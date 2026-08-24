import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { router } from 'expo-router';
import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';

export default function CycleNutritionScreen() {
  const { themeName } = useTheme();
  const theme = themes[themeName];

  const phases = [
    {
      emoji: '🩸',
      title: 'During Your Period',
      description:
        'Focus on nourishing meals and foods containing iron, protein and fibre. Staying hydrated can also help you feel your best.',
      foods:
        'Dal, beans, leafy greens, eggs, fruits and whole grains',
    },
    {
      emoji: '🌱',
      title: 'Follicular Phase',
      description:
        'As your body moves through this phase, aim for a varied diet with plenty of vegetables, fruits, whole grains and protein.',
      foods:
        'Vegetables, fruits, pulses, oats, rice and nuts',
    },
    {
      emoji: '🥚',
      title: 'Around Ovulation',
      description:
        'A balanced eating pattern with colourful vegetables, fruits, protein and healthy fats can support overall wellbeing.',
      foods:
        'Fruits, vegetables, eggs, fish, seeds and pulses',
    },
    {
      emoji: '🌙',
      title: 'Luteal Phase',
      description:
        'Some people notice changes in appetite or cravings during this phase. Regular balanced meals can help maintain steady energy.',
      foods:
        'Whole grains, nuts, seeds, vegetables and protein-rich foods',
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
        <Text style={styles.emoji}>🩸</Text>

        <Text
          style={[
            styles.title,
            { color: theme.heading },
          ]}
        >
          Nutrition During Your Cycle
        </Text>

        <Text
          style={[
            styles.subtitle,
            { color: theme.text },
          ]}
        >
          Your nutritional needs don't follow a perfect
          schedule. Learn how balanced food choices can
          support you throughout your cycle.
        </Text>

        {/* Intro */}
        <View
          style={[
            styles.introCard,
            { backgroundColor: theme.primaryLight },
          ]}
        >
          <Text style={styles.introEmoji}>
            🌷
          </Text>

          <Text
            style={[
              styles.introTitle,
              { color: theme.heading },
            ]}
          >
            Listen to your body
          </Text>

          <Text
            style={[
              styles.introText,
              { color: theme.text },
            ]}
          >
            There is no single diet that everyone needs to
            follow during their menstrual cycle. Your appetite,
            energy and preferences can change, and that's okay.
          </Text>
        </View>

        {/* Phases */}
        <Text
          style={[
            styles.sectionTitle,
            { color: theme.heading },
          ]}
        >
          Cycle & Nutrition
        </Text>

        {phases.map((phase) => (
          <View
            key={phase.title}
            style={[
              styles.phaseCard,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
          >
            <View style={styles.phaseHeader}>
              <Text style={styles.phaseEmoji}>
                {phase.emoji}
              </Text>

              <Text
                style={[
                  styles.phaseTitle,
                  { color: theme.heading },
                ]}
              >
                {phase.title}
              </Text>
            </View>

            <Text
              style={[
                styles.phaseDescription,
                { color: theme.text },
              ]}
            >
              {phase.description}
            </Text>

            <View
              style={[
                styles.foodBox,
                { backgroundColor: theme.primaryLight },
              ]}
            >
              <Text
                style={[
                  styles.foodLabel,
                  { color: theme.primary },
                ]}
              >
                🌿 FOOD IDEAS
              </Text>

              <Text
                style={[
                  styles.foodText,
                  { color: theme.heading },
                ]}
              >
                {phase.foods}
              </Text>
            </View>
          </View>
        ))}

        {/* Important Note */}
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
            You don't need to completely change your diet
            based on your cycle. A varied, balanced eating
            pattern over time matters more than following
            strict rules for each phase.
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
  },

  introCard: {
    borderRadius: 24,
    padding: 22,
    marginTop: 28,
  },

  introEmoji: {
    fontSize: 30,
  },

  introTitle: {
    fontSize: 19,
    fontWeight: '700',
    marginTop: 9,
  },

  introText: {
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

  phaseCard: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 14,
    borderWidth: 1,
  },

  phaseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  phaseEmoji: {
    fontSize: 28,
    marginRight: 12,
  },

  phaseTitle: {
    flex: 1,
    fontSize: 17,
    fontWeight: '700',
  },

  phaseDescription: {
    fontSize: 13,
    lineHeight: 21,
    marginTop: 12,
  },

  foodBox: {
    borderRadius: 15,
    padding: 14,
    marginTop: 14,
  },

  foodLabel: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },

  foodText: {
    fontSize: 12,
    lineHeight: 18,
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
