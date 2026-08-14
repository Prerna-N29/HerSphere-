import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function MenstrualHealthScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

        {/* Back */}
        <Pressable onPress={() => router.back()}>
          <Text style={styles.back}>‹ Back</Text>
        </Pressable>

        {/* Header */}
        <Text style={styles.emoji}>🌸</Text>

        <Text style={styles.title}>Menstrual Health</Text>

        <Text style={styles.subtitle}>
          Understand your cycle, listen to your body,
          and learn what is normal for you.
        </Text>

        {/* Cycle Overview */}
        <View style={styles.cycleCard}>
          <Text style={styles.cardLabel}>YOUR CYCLE</Text>

          <Text style={styles.cycleTitle}>
            Period information
          </Text>

          <Text style={styles.cycleDescription}>
            Start tracking your cycle to receive
            personalized insights.
          </Text>

          <Pressable style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>
              Start Tracking
            </Text>
          </Pressable>
        </View>

        {/* Quick Access */}
        <Text style={styles.sectionTitle}>
          Quick Access
        </Text>

        <View style={styles.grid}>

          {/* Period Tracker */}
          <Pressable style={styles.smallCard}>
            <Text style={styles.smallEmoji}>🩸</Text>

            <Text style={styles.smallTitle}>
              Period Tracker
            </Text>

            <Text style={styles.smallDescription}>
              Record your period and symptoms.
            </Text>
          </Pressable>

          {/* Learn */}
          <Pressable style={styles.smallCard}>
            <Text style={styles.smallEmoji}>💡</Text>

            <Text style={styles.smallTitle}>
              Learn
            </Text>

            <Text style={styles.smallDescription}>
              Understand your menstrual health.
            </Text>
          </Pressable>

          {/* Myth vs Fact */}
          <Pressable style={styles.smallCard}>
            <Text style={styles.smallEmoji}>📚</Text>

            <Text style={styles.smallTitle}>
              Myth vs Fact
            </Text>

            <Text style={styles.smallDescription}>
              Separate common myths from facts.
            </Text>
          </Pressable>

          {/* Seek Help */}
          <Pressable style={styles.smallCard}>
            <Text style={styles.smallEmoji}>🩺</Text>

            <Text style={styles.smallTitle}>
              When to Seek Help
            </Text>

            <Text style={styles.smallDescription}>
              Learn when professional guidance may help.
            </Text>
          </Pressable>

        </View>

        {/* Educational Section */}
        <Text style={styles.sectionTitle}>
          Know Your Body 🌷
        </Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>
            Your menstrual cycle is unique
          </Text>

          <Text style={styles.infoText}>
            Cycle length, symptoms, flow and emotions
            can vary from person to person. Tracking
            these changes can help you understand
            your own patterns.
          </Text>
        </View>

        {/* Important Note */}
        <View style={styles.noteCard}>
          <Text style={styles.noteTitle}>
            💗 Remember
          </Text>

          <Text style={styles.noteText}>
            HerSphere provides educational guidance and
            does not replace professional medical advice.
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
    paddingHorizontal: 22,
    paddingTop: 50,
    paddingBottom: 40,
    maxWidth: 700,
    width: '100%',
    alignSelf: 'center',
  },

  back: {
    fontSize: 17,
    color: '#C96F89',
    fontWeight: '600',
    marginBottom: 22,
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

  cycleCard: {
    backgroundColor: '#F8DDE5',
    borderRadius: 24,
    padding: 22,
    marginTop: 28,
  },

  cardLabel: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.4,
    color: '#C96F89',
  },

  cycleTitle: {
    fontSize: 21,
    fontWeight: '700',
    color: '#7A4055',
    marginTop: 8,
  },

  cycleDescription: {
    fontSize: 14,
    lineHeight: 21,
    color: '#8A747B',
    marginTop: 6,
  },

  primaryButton: {
    backgroundColor: '#C96F89',
    borderRadius: 25,
    paddingVertical: 13,
    alignItems: 'center',
    marginTop: 18,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#7A4055',
    marginTop: 30,
    marginBottom: 14,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },

  smallCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 17,
    width: '48%',
    minHeight: 145,
    borderWidth: 1,
    borderColor: '#F3DDE3',
  },

  smallEmoji: {
    fontSize: 27,
    marginBottom: 10,
  },

  smallTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#7A4055',
  },

  smallDescription: {
    fontSize: 12,
    lineHeight: 17,
    color: '#8A747B',
    marginTop: 5,
  },

  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F3DDE3',
  },

  infoTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#7A4055',
  },

  infoText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#8A747B',
    marginTop: 8,
  },

  noteCard: {
    backgroundColor: '#FFF0F3',
    borderRadius: 18,
    padding: 18,
    marginTop: 20,
  },

  noteTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#7A4055',
  },

  noteText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#8A747B',
    marginTop: 6,
  },
});