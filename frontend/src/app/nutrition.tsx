import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { router } from 'expo-router';
import { useTheme } from '../theme/ThemeContext';

export default function NutritionScreen() {
  const { theme } = useTheme();

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
        <Text style={styles.emoji}>
          🥗
        </Text>

        <Text
          style={[
            styles.title,
            { color: theme.heading },
          ]}
        >
          Smart Nutrition
        </Text>

        <Text
          style={[
            styles.subtitle,
            { color: theme.text },
          ]}
        >
          Nourish your body with balanced choices that
          support your health and wellbeing.
        </Text>

        {/* Daily Nutrition */}
        <View
          style={[
            styles.highlightCard,
            { backgroundColor: theme.primaryLight },
          ]}
        >
          <Text style={styles.highlightEmoji}>
            🌷
          </Text>

          <Text
            style={[
              styles.highlightTitle,
              { color: theme.heading },
            ]}
          >
            Food is part of your wellbeing
          </Text>

          <Text
            style={[
              styles.highlightText,
              { color: theme.text },
            ]}
          >
            Your nutritional needs can change throughout
            different stages of life and your menstrual cycle.
            Focus on balance, variety and nourishing foods.
          </Text>
        </View>

        {/* Nutrition Areas */}
        <Text
          style={[
            styles.sectionTitle,
            { color: theme.heading },
          ]}
        >
          Explore Nutrition
        </Text>

        {/* Balanced Plate */}
        <Pressable
          style={[
            styles.card,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
          onPress={() => router.push('/balanced-plate')}
        >
          <Text style={styles.cardEmoji}>
            🍽️
          </Text>

          <View style={styles.cardContent}>
            <Text
              style={[
                styles.cardTitle,
                { color: theme.heading },
              ]}
            >
              Build a Balanced Plate
            </Text>

            <Text
              style={[
                styles.cardText,
                { color: theme.text },
              ]}
            >
              Learn how to combine vegetables, proteins,
              grains and healthy fats.
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

        {/* Cycle Nutrition */}
        <Pressable
          style={[
            styles.card,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
          onPress={() => router.push('/cycle-nutrition')}
        >
          <Text style={styles.cardEmoji}>
            🩸
          </Text>

          <View style={styles.cardContent}>
            <Text
              style={[
                styles.cardTitle,
                { color: theme.heading },
              ]}
            >
              Nutrition During Your Cycle
            </Text>

            <Text
              style={[
                styles.cardText,
                { color: theme.text },
              ]}
            >
              Discover foods and nutrients that may support
              you during different cycle phases.
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

        {/* Hydration */}
        <Pressable
          style={[
            styles.card,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
          onPress={() => router.push('/hydration')}
        >
          <Text style={styles.cardEmoji}>
            💧
          </Text>

          <View style={styles.cardContent}>
            <Text
              style={[
                styles.cardTitle,
                { color: theme.heading },
              ]}
            >
              Hydration
            </Text>

            <Text
              style={[
                styles.cardText,
                { color: theme.text },
              ]}
            >
              Simple ways to stay hydrated throughout your day.
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
            styles.card,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
          onPress={() => router.push('/sustainable-food')}
        >
          <Text style={styles.cardEmoji}>
            🌱
          </Text>

          <View style={styles.cardContent}>
            <Text
              style={[
                styles.cardTitle,
                { color: theme.heading },
              ]}
            >
              Sustainable Food Choices
            </Text>

            <Text
              style={[
                styles.cardText,
                { color: theme.text },
              ]}
            >
              Explore nutritious choices that can also be
              kinder to the environment.
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

        {/* Reminder */}
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
            💗 A gentle reminder
          </Text>

          <Text
            style={[
              styles.noteText,
              { color: theme.text },
            ]}
          >
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

  card: {
    borderRadius: 18,
    padding: 17,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
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
    lineHeight: 18,
    marginTop: 4,
  },

  arrow: {
    fontSize: 27,
    marginLeft: 8,
  },

  note: {
    borderRadius: 20,
    padding: 18,
    marginTop: 10,
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