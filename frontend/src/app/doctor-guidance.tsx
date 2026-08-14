import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { router } from 'expo-router';

export default function DoctorGuidanceScreen() {
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
        <Text style={styles.emoji}>🩺</Text>

        <Text style={styles.title}>
          Doctor Visit Guidance
        </Text>

        <Text style={styles.subtitle}>
          Knowing when to seek professional guidance can
          help you take better care of your health.
        </Text>

        {/* Highlight */}
        <View style={styles.highlightCard}>
          <Text style={styles.highlightEmoji}>🌷</Text>

          <Text style={styles.highlightTitle}>
            Your health deserves attention
          </Text>

          <Text style={styles.highlightText}>
            You do not have to figure everything out on your
            own. A healthcare professional can help when
            symptoms are persistent, unusual, or concerning.
          </Text>
        </View>

        {/* When to seek help */}
        <Text style={styles.sectionTitle}>
          When to seek medical guidance
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardEmoji}>🚩</Text>

          <Text style={styles.cardTitle}>
            Symptoms that are severe or persistent
          </Text>

          <Text style={styles.cardText}>
            Consider speaking with a healthcare professional
            if pain, bleeding, fatigue, or other symptoms are
            severe, keep returning, or interfere with your
            daily activities.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardEmoji}>🩸</Text>

          <Text style={styles.cardTitle}>
            Unusual menstrual changes
          </Text>

          <Text style={styles.cardText}>
            Significant changes in your usual cycle pattern,
            unusually heavy bleeding, or periods that become
            unexpectedly irregular may be worth discussing
            with a healthcare professional.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardEmoji}>💭</Text>

          <Text style={styles.cardTitle}>
            Emotional well-being concerns
          </Text>

          <Text style={styles.cardText}>
            If changes in mood or emotional well-being are
            affecting your everyday life, reaching out for
            professional support can be a helpful step.
          </Text>
        </View>

        {/* Prepare */}
        <Text style={styles.sectionTitle}>
          Before your visit
        </Text>

        <View style={styles.prepareCard}>
          <Text style={styles.prepareTitle}>
            📝 Things you can note
          </Text>

          <Text style={styles.prepareItem}>
            • When your symptoms started
          </Text>

          <Text style={styles.prepareItem}>
            • How often they occur
          </Text>

          <Text style={styles.prepareItem}>
            • How severe they feel
          </Text>

          <Text style={styles.prepareItem}>
            • Any changes in your menstrual cycle
          </Text>

          <Text style={styles.prepareItem}>
            • Questions you would like to ask
          </Text>
        </View>

        {/* Emergency */}
        <View style={styles.warningCard}>
          <Text style={styles.warningTitle}>
            🚨 Need urgent help?
          </Text>

          <Text style={styles.warningText}>
            If you experience a serious or rapidly worsening
            health problem, seek urgent medical attention
            rather than relying only on an app.
          </Text>
        </View>

        {/* Reminder */}
        <View style={styles.note}>
          <Text style={styles.noteTitle}>
            💗 A gentle reminder
          </Text>

          <Text style={styles.noteText}>
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
    borderRadius: 20,
    padding: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F3DDE3',
  },

  cardEmoji: {
    fontSize: 28,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#7A4055',
    marginTop: 9,
  },

  cardText: {
    fontSize: 13,
    lineHeight: 21,
    color: '#8A747B',
    marginTop: 7,
  },

  prepareCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F3DDE3',
  },

  prepareTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#7A4055',
    marginBottom: 12,
  },

  prepareItem: {
    fontSize: 13,
    lineHeight: 21,
    color: '#8A747B',
    marginTop: 5,
  },

  warningCard: {
    backgroundColor: '#FFF0F3',
    borderRadius: 20,
    padding: 18,
    marginTop: 18,
  },

  warningTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#7A4055',
  },

  warningText: {
    fontSize: 12,
    lineHeight: 19,
    color: '#8A747B',
    marginTop: 7,
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