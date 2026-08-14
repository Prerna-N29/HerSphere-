import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { router } from 'expo-router';

export default function SustainableFoodScreen() {
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
        <Text style={styles.emoji}>🌱</Text>

        <Text style={styles.title}>
          Sustainable Food Choices
        </Text>

        <Text style={styles.subtitle}>
          Discover food choices that can support your
          wellbeing while being kinder to the environment.
        </Text>

        {/* Highlight */}
        <View style={styles.highlightCard}>
          <Text style={styles.highlightEmoji}>
            🌍
          </Text>

          <Text style={styles.highlightTitle}>
            Small choices can make a difference
          </Text>

          <Text style={styles.highlightText}>
            Sustainable eating is not about following a
            perfect diet. It is about making thoughtful
            choices that work for your health, budget,
            culture and environment.
          </Text>
        </View>

        {/* Explore */}
        <Text style={styles.sectionTitle}>
          Simple Sustainable Choices
        </Text>

        {/* Seasonal & Local */}
        <View style={styles.card}>
          <Text style={styles.cardEmoji}>🥕</Text>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              Choose seasonal & local foods
            </Text>

            <Text style={styles.cardText}>
              Seasonal fruits and vegetables can be a
              fresh and practical choice. Local foods may
              also reduce the distance food travels.
            </Text>
          </View>
        </View>

        {/* Plant Protein */}
        <View style={styles.card}>
          <Text style={styles.cardEmoji}>🫘</Text>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              Include plant-based proteins
            </Text>

            <Text style={styles.cardText}>
              Pulses, beans, lentils, peas, nuts and seeds
              can provide useful sources of protein and
              other nutrients.
            </Text>
          </View>
        </View>

        {/* Whole Foods */}
        <View style={styles.card}>
          <Text style={styles.cardEmoji}>🌾</Text>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              Prefer nourishing whole foods
            </Text>

            <Text style={styles.cardText}>
              Foods such as whole grains, vegetables,
              fruits, pulses and nuts can add variety
              and nourishment to everyday meals.
            </Text>
          </View>
        </View>

        {/* Reduce Waste */}
        <View style={styles.card}>
          <Text style={styles.cardEmoji}>♻️</Text>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              Reduce food waste
            </Text>

            <Text style={styles.cardText}>
              Planning meals, storing food properly and
              using leftovers creatively can help reduce
              unnecessary food waste.
            </Text>
          </View>
        </View>

        {/* Practical Ideas */}
        <Text style={styles.sectionTitle}>
          Easy Ideas
        </Text>

        <View style={styles.ideaCard}>
          <Text style={styles.idea}>
            🌿 Add one seasonal fruit to your day
          </Text>

          <Text style={styles.idea}>
            🫘 Include pulses or beans in regular meals
          </Text>

          <Text style={styles.idea}>
            🥕 Buy only what you are likely to use
          </Text>

          <Text style={styles.idea}>
            ♻️ Turn suitable leftovers into another meal
          </Text>
        </View>

        {/* Reminder */}
        <View style={styles.note}>
          <Text style={styles.noteTitle}>
            💗 Sustainability without pressure
          </Text>

          <Text style={styles.noteText}>
            You do not need to completely change the way
            you eat. Even small, realistic choices can
            contribute to healthier and more sustainable
            habits over time.
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
    lineHeight: 18,
    color: '#8A747B',
    marginTop: 5,
  },

  ideaCard: {
    backgroundColor: '#FFF0F3',
    borderRadius: 20,
    padding: 18,
  },

  idea: {
    fontSize: 13,
    lineHeight: 21,
    color: '#7A4055',
    marginBottom: 10,
  },

  note: {
    backgroundColor: '#F8DDE5',
    borderRadius: 20,
    padding: 18,
    marginTop: 18,
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