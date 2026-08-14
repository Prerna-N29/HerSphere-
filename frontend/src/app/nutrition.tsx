import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { router } from 'expo-router';

export default function NutritionScreen() {
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
        <Text style={styles.emoji}>🥗</Text>

        <Text style={styles.title}>
          Smart Nutrition
        </Text>

        <Text style={styles.subtitle}>
          Nourish your body with balanced choices that
          support your health and wellbeing.
        </Text>

        {/* Daily Nutrition */}
        <View style={styles.highlightCard}>
          <Text style={styles.highlightEmoji}>
            🌷
          </Text>

          <Text style={styles.highlightTitle}>
            Food is part of your wellbeing
          </Text>

          <Text style={styles.highlightText}>
            Your nutritional needs can change throughout
            different stages of life and your menstrual cycle.
            Focus on balance, variety and nourishing foods.
          </Text>
        </View>

        {/* Nutrition Areas */}
        <Text style={styles.sectionTitle}>
          Explore Nutrition
        </Text>

        {/* Balanced Plate */}
        <Pressable
  style={styles.card}
  onPress={() => router.push('/balanced-plate')}
>
          <Text style={styles.cardEmoji}>
            🍽️
          </Text>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              Build a Balanced Plate
            </Text>

            <Text style={styles.cardText}>
              Learn how to combine vegetables, proteins,
              grains and healthy fats.
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </Pressable>

        {/* Cycle Nutrition */}
        
<Pressable
  style={styles.card}
  onPress={() => router.push('/cycle-nutrition')}
>
          <Text style={styles.cardEmoji}>
            🩸
          </Text>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              Nutrition During Your Cycle
            </Text>

            <Text style={styles.cardText}>
              Discover foods and nutrients that may support
              you during different cycle phases.
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </Pressable>

        {/* Hydration */}
        {/* Hydration */}
<Pressable
  style={styles.card}
  onPress={() => router.push('/hydration')}
>
  <Text style={styles.cardEmoji}>
    💧
  </Text>

  <View style={styles.cardContent}>
    <Text style={styles.cardTitle}>
      Hydration
    </Text>

    <Text style={styles.cardText}>
      Simple ways to stay hydrated throughout your day.
    </Text>
  </View>

  <Text style={styles.arrow}>
    ›
  </Text>
</Pressable>

        {/* Sustainable Food */}
        <Pressable style={styles.card}>
          <Text style={styles.cardEmoji}>
            🌱
          </Text>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              Sustainable Food Choices
            </Text>

            <Text style={styles.cardText}>
              Explore nutritious choices that can also be
              kinder to the environment.
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </Pressable>

        {/* Reminder */}
        <View style={styles.note}>
          <Text style={styles.noteTitle}>
            💗 A gentle reminder
          </Text>

          <Text style={styles.noteText}>
            There is no single perfect diet. Healthy eating
            is about finding balanced and sustainable choices
            that work for you.
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

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 17,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
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
    lineHeight: 18,
    color: '#8A747B',
    marginTop: 4,
  },

  arrow: {
    fontSize: 27,
    color: '#C96F89',
    marginLeft: 8,
  },

  note: {
    backgroundColor: '#FFF0F3',
    borderRadius: 20,
    padding: 18,
    marginTop: 10,
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