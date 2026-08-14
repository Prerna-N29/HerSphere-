import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { router } from 'expo-router';

export default function CycleNutritionScreen() {
  const phases = [
    {
      emoji: '🩸',
      title: 'During Your Period',
      description:
        'Focus on nourishing meals and foods containing iron, protein and fibre. Staying hydrated can also help you feel your best.',
      foods: 'Dal, beans, leafy greens, eggs, fruits and whole grains',
    },
    {
      emoji: '🌱',
      title: 'Follicular Phase',
      description:
        'As your body moves through this phase, aim for a varied diet with plenty of vegetables, fruits, whole grains and protein.',
      foods: 'Vegetables, fruits, pulses, oats, rice and nuts',
    },
    {
      emoji: '🥚',
      title: 'Around Ovulation',
      description:
        'A balanced eating pattern with colourful vegetables, fruits, protein and healthy fats can support overall wellbeing.',
      foods: 'Fruits, vegetables, eggs, fish, seeds and pulses',
    },
    {
      emoji: '🌙',
      title: 'Luteal Phase',
      description:
        'Some people notice changes in appetite or cravings during this phase. Regular balanced meals can help maintain steady energy.',
      foods: 'Whole grains, nuts, seeds, vegetables and protein-rich foods',
    },
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
        <Text style={styles.emoji}>🩸</Text>

        <Text style={styles.title}>
          Nutrition During Your Cycle
        </Text>

        <Text style={styles.subtitle}>
          Your nutritional needs don't follow a perfect
          schedule. Learn how balanced food choices can
          support you throughout your cycle.
        </Text>

        {/* Intro */}
        <View style={styles.introCard}>
          <Text style={styles.introEmoji}>
            🌷
          </Text>

          <Text style={styles.introTitle}>
            Listen to your body
          </Text>

          <Text style={styles.introText}>
            There is no single diet that everyone needs to
            follow during their menstrual cycle. Your appetite,
            energy and preferences can change, and that's okay.
          </Text>
        </View>

        {/* Phases */}
        <Text style={styles.sectionTitle}>
          Cycle & Nutrition
        </Text>

        {phases.map((phase) => (
          <View
            key={phase.title}
            style={styles.phaseCard}
          >
            <View style={styles.phaseHeader}>
              <Text style={styles.phaseEmoji}>
                {phase.emoji}
              </Text>

              <Text style={styles.phaseTitle}>
                {phase.title}
              </Text>
            </View>

            <Text style={styles.phaseDescription}>
              {phase.description}
            </Text>

            <View style={styles.foodBox}>
              <Text style={styles.foodLabel}>
                🌿 FOOD IDEAS
              </Text>

              <Text style={styles.foodText}>
                {phase.foods}
              </Text>
            </View>
          </View>
        ))}

        {/* Important note */}
        <View style={styles.note}>
          <Text style={styles.noteTitle}>
            💗 Remember
          </Text>

          <Text style={styles.noteText}>
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
    fontSize: 30,
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

  introCard: {
    backgroundColor: '#F8DDE5',
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
    color: '#7A4055',
    marginTop: 9,
  },

  introText: {
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

  phaseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#F3DDE3',
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
    color: '#7A4055',
  },

  phaseDescription: {
    fontSize: 13,
    lineHeight: 21,
    color: '#8A747B',
    marginTop: 12,
  },

  foodBox: {
    backgroundColor: '#FFF0F3',
    borderRadius: 15,
    padding: 14,
    marginTop: 14,
  },

  foodLabel: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#C96F89',
  },

  foodText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#7A4055',
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