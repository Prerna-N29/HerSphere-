import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { router } from 'expo-router';
import { useTheme } from '../theme/ThemeContext';

export default function BalancedPlateScreen() {
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
          🍽️
        </Text>

        <Text
          style={[
            styles.title,
            { color: theme.heading },
          ]}
        >
          Build a Balanced Plate
        </Text>

        <Text
          style={[
            styles.subtitle,
            { color: theme.text },
          ]}
        >
          A balanced meal can include different food groups
          that work together to nourish your body.
        </Text>

        {/* Plate Guide */}
        <View
          style={[
            styles.plateCard,
            { backgroundColor: theme.primaryLight },
          ]}
        >
          <Text
            style={[
              styles.plateTitle,
              { color: theme.heading },
            ]}
          >
            🌷 A simple plate guide
          </Text>

          <Text
            style={[
              styles.plateText,
              { color: theme.text },
            ]}
          >
            Think of your plate as a combination of different
            food groups rather than focusing on one single food.
          </Text>

          {/* Vegetables */}
          <View
            style={[
              styles.foodRow,
              { backgroundColor: theme.background },
            ]}
          >
            <View
              style={[
                styles.iconCircle,
                { backgroundColor: theme.card },
              ]}
            >
              <Text style={styles.foodEmoji}>
                🥦
              </Text>
            </View>

            <View style={styles.foodContent}>
              <Text
                style={[
                  styles.foodTitle,
                  { color: theme.heading },
                ]}
              >
                Vegetables & Fruits
              </Text>

              <Text
                style={[
                  styles.foodText,
                  { color: theme.text },
                ]}
              >
                Add a variety of colourful vegetables and
                fruits for fibre, vitamins and minerals.
              </Text>
            </View>
          </View>

          {/* Protein */}
          <View
            style={[
              styles.foodRow,
              { backgroundColor: theme.background },
            ]}
          >
            <View
              style={[
                styles.iconCircle,
                { backgroundColor: theme.card },
              ]}
            >
              <Text style={styles.foodEmoji}>
                🥚
              </Text>
            </View>

            <View style={styles.foodContent}>
              <Text
                style={[
                  styles.foodTitle,
                  { color: theme.heading },
                ]}
              >
                Protein
              </Text>

              <Text
                style={[
                  styles.foodText,
                  { color: theme.text },
                ]}
              >
                Include foods such as pulses, beans, eggs,
                dairy, fish or other protein sources.
              </Text>
            </View>
          </View>

          {/* Grains */}
          <View
            style={[
              styles.foodRow,
              { backgroundColor: theme.background },
            ]}
          >
            <View
              style={[
                styles.iconCircle,
                { backgroundColor: theme.card },
              ]}
            >
              <Text style={styles.foodEmoji}>
                🌾
              </Text>
            </View>

            <View style={styles.foodContent}>
              <Text
                style={[
                  styles.foodTitle,
                  { color: theme.heading },
                ]}
              >
                Grains & Carbohydrates
              </Text>

              <Text
                style={[
                  styles.foodText,
                  { color: theme.text },
                ]}
              >
                Rice, whole grains, millets, oats and other
                carbohydrate sources can provide energy.
              </Text>
            </View>
          </View>

          {/* Healthy Fats */}
          <View
            style={[
              styles.foodRow,
              { backgroundColor: theme.background },
            ]}
          >
            <View
              style={[
                styles.iconCircle,
                { backgroundColor: theme.card },
              ]}
            >
              <Text style={styles.foodEmoji}>
                🥜
              </Text>
            </View>

            <View style={styles.foodContent}>
              <Text
                style={[
                  styles.foodTitle,
                  { color: theme.heading },
                ]}
              >
                Healthy Fats
              </Text>

              <Text
                style={[
                  styles.foodText,
                  { color: theme.text },
                ]}
              >
                Nuts, seeds and other sources of unsaturated
                fats can be part of a balanced diet.
              </Text>
            </View>
          </View>

        </View>

        {/* Example */}
        <Text
          style={[
            styles.sectionTitle,
            { color: theme.heading },
          ]}
        >
          Example Meal
        </Text>

        <View
          style={[
            styles.exampleCard,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
        >
          <Text style={styles.exampleEmoji}>
            🍛
          </Text>

          <Text
            style={[
              styles.exampleTitle,
              { color: theme.heading },
            ]}
          >
            A simple Indian-style meal
          </Text>

          <Text
            style={[
              styles.exampleText,
              { color: theme.text },
            ]}
          >
            Rice or roti + dal + vegetables + curd +
            a fruit can create a varied and nourishing meal.
          </Text>
        </View>

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
            💗 Balance, not perfection
          </Text>

          <Text
            style={[
              styles.noteText,
              { color: theme.text },
            ]}
          >
            Your meals don't have to look perfect every day.
            Aim for variety and balance over time, while
            considering your individual needs and preferences.
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

  plateCard: {
    borderRadius: 24,
    padding: 22,
    marginTop: 28,
  },

  plateTitle: {
    fontSize: 19,
    fontWeight: '700',
  },

  plateText: {
    fontSize: 13,
    lineHeight: 21,
    marginTop: 7,
    marginBottom: 18,
  },

  foodRow: {
    borderRadius: 18,
    padding: 14,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  foodEmoji: {
    fontSize: 25,
  },

  foodContent: {
    flex: 1,
  },

  foodTitle: {
    fontSize: 15,
    fontWeight: '700',
  },

  foodText: {
    fontSize: 12,
    lineHeight: 18,
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 30,
    marginBottom: 14,
  },

  exampleCard: {
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
  },

  exampleEmoji: {
    fontSize: 32,
  },

  exampleTitle: {
    fontSize: 17,
    fontWeight: '700',
    marginTop: 8,
  },

  exampleText: {
    fontSize: 13,
    lineHeight: 21,
    marginTop: 7,
  },

  note: {
    borderRadius: 20,
    padding: 18,
    marginTop: 20,
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