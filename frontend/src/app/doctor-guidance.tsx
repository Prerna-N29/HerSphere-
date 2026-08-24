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

export default function DoctorGuidanceScreen() {
  const { themeName } = useTheme();
  const theme = themes[themeName];

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
        <Text style={styles.emoji}>🩺</Text>

        <Text
          style={[
            styles.title,
            { color: theme.heading },
          ]}
        >
          Doctor Visit Guidance
        </Text>

        <Text
          style={[
            styles.subtitle,
            { color: theme.text },
          ]}
        >
          Knowing when to seek professional guidance can
          help you take better care of your health.
        </Text>

        {/* Highlight */}
        <View
          style={[
            styles.highlightCard,
            { backgroundColor: theme.primaryLight },
          ]}
        >
          <Text style={styles.highlightEmoji}>🌷</Text>

          <Text
            style={[
              styles.highlightTitle,
              { color: theme.heading },
            ]}
          >
            Your health deserves attention
          </Text>

          <Text
            style={[
              styles.highlightText,
              { color: theme.text },
            ]}
          >
            You do not have to figure everything out on your
            own. A healthcare professional can help when
            symptoms are persistent, unusual, or concerning.
          </Text>
        </View>

        {/* When to seek help */}
        <Text
          style={[
            styles.sectionTitle,
            { color: theme.heading },
          ]}
        >
          When to seek medical guidance
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
          <Text style={styles.cardEmoji}>🚩</Text>

          <Text
            style={[
              styles.cardTitle,
              { color: theme.heading },
            ]}
          >
            Symptoms that are severe or persistent
          </Text>

          <Text
            style={[
              styles.cardText,
              { color: theme.text },
            ]}
          >
            Consider speaking with a healthcare professional
            if pain, bleeding, fatigue, or other symptoms are
            severe, keep returning, or interfere with your
            daily activities.
          </Text>
        </View>

        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
        >
          <Text style={styles.cardEmoji}>🩸</Text>

          <Text
            style={[
              styles.cardTitle,
              { color: theme.heading },
            ]}
          >
            Unusual menstrual changes
          </Text>

          <Text
            style={[
              styles.cardText,
              { color: theme.text },
            ]}
          >
            Significant changes in your usual cycle pattern,
            unusually heavy bleeding, or periods that become
            unexpectedly irregular may be worth discussing
            with a healthcare professional.
          </Text>
        </View>

        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
        >
          <Text style={styles.cardEmoji}>💭</Text>

          <Text
            style={[
              styles.cardTitle,
              { color: theme.heading },
            ]}
          >
            Emotional well-being concerns
          </Text>

          <Text
            style={[
              styles.cardText,
              { color: theme.text },
            ]}
          >
            If changes in mood or emotional well-being are
            affecting your everyday life, reaching out for
            professional support can be a helpful step.
          </Text>
        </View>

        {/* Prepare */}
        <Text
          style={[
            styles.sectionTitle,
            { color: theme.heading },
          ]}
        >
          Before your visit
        </Text>

        <View
          style={[
            styles.prepareCard,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
        >
          <Text
            style={[
              styles.prepareTitle,
              { color: theme.heading },
            ]}
          >
            📝 Things you can note
          </Text>

          <Text
            style={[
              styles.prepareItem,
              { color: theme.text },
            ]}
          >
            • When your symptoms started
          </Text>

          <Text
            style={[
              styles.prepareItem,
              { color: theme.text },
            ]}
          >
            • How often they occur
          </Text>

          <Text
            style={[
              styles.prepareItem,
              { color: theme.text },
            ]}
          >
            • How severe they feel
          </Text>

          <Text
            style={[
              styles.prepareItem,
              { color: theme.text },
            ]}
          >
            • Any changes in your menstrual cycle
          </Text>

          <Text
            style={[
              styles.prepareItem,
              { color: theme.text },
            ]}
          >
            • Questions you would like to ask
          </Text>
        </View>

        {/* Emergency */}
        <View
          style={[
            styles.warningCard,
            { backgroundColor: theme.primaryLight },
          ]}
        >
          <Text
            style={[
              styles.warningTitle,
              { color: theme.heading },
            ]}
          >
            🚨 Need urgent help?
          </Text>

          <Text
            style={[
              styles.warningText,
              { color: theme.text },
            ]}
          >
            If you experience a serious or rapidly worsening
            health problem, seek urgent medical attention
            rather than relying only on an app.
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
            💗 A gentle reminder
          </Text>

          <Text
            style={[
              styles.noteText,
              { color: theme.text },
            ]}
          >
            HerSphere provides general health information and
            is not a replacement for professional medical
            advice, diagnosis, or treatment.
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
    borderRadius: 20,
    padding: 20,
    marginBottom: 12,
    borderWidth: 1,
  },

  cardEmoji: {
    fontSize: 28,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 9,
  },

  cardText: {
    fontSize: 13,
    lineHeight: 21,
    marginTop: 7,
  },

  prepareCard: {
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
  },

  prepareTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },

  prepareItem: {
    fontSize: 13,
    lineHeight: 21,
    marginTop: 5,
  },

  warningCard: {
    borderRadius: 20,
    padding: 18,
    marginTop: 18,
  },

  warningTitle: {
    fontSize: 15,
    fontWeight: '700',
  },

  warningText: {
    fontSize: 12,
    lineHeight: 19,
    marginTop: 7,
  },

  note: {
    borderRadius: 20,
    padding: 18,
    marginTop: 18,
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