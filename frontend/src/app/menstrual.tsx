import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { router } from 'expo-router';

export default function MenstrualHealthScreen() {
  const [periodStarted, setPeriodStarted] = useState(false);

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
        <Text style={styles.emoji}>🌸</Text>

        <Text style={styles.title}>
          Menstrual Health
        </Text>

        <Text style={styles.subtitle}>
          Understand your cycle, listen to your body,
          and learn what is normal for you.
        </Text>

        {/* Period Tracker */}
        <View style={styles.trackerCard}>
          <Text style={styles.cardLabel}>
            PERIOD TRACKER
          </Text>

          <Text style={styles.cardTitle}>
            When did your last period start?
          </Text>

          <Text style={styles.cardDescription}>
            Tracking your cycle can help you understand
            your body's patterns over time.
          </Text>

          {!periodStarted ? (
            <Pressable
              style={styles.primaryButton}
              onPress={() => setPeriodStarted(true)}
            >
              <Text style={styles.primaryButtonText}>
                🩸 I started my period today
              </Text>
            </Pressable>
          ) : (
            <View style={styles.successBox}>
              <Text style={styles.successEmoji}>
                🌷
              </Text>

              <Text style={styles.successTitle}>
                Period started today
              </Text>

              <Text style={styles.successText}>
                We've recorded today as Day 1 of your cycle.
              </Text>

              <Pressable
                style={styles.secondaryButton}
                onPress={() => setPeriodStarted(false)}
              >
                <Text style={styles.secondaryButtonText}>
                  Change
                </Text>
              </Pressable>
            </View>
          )}
        </View>

        {/* Cycle Overview */}
        <Text style={styles.sectionTitle}>
          Cycle Overview
        </Text>

        <View style={styles.statsRow}>

          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>🩸</Text>

            <Text style={styles.statValue}>
              {periodStarted ? 'Day 1' : '--'}
            </Text>

            <Text style={styles.statLabel}>
              Current cycle
            </Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>📅</Text>

            <Text style={styles.statValue}>
              28 days
            </Text>

            <Text style={styles.statLabel}>
              Typical cycle
            </Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>🌙</Text>

            <Text style={styles.statValue}>
              --
            </Text>

            <Text style={styles.statLabel}>
              Next period
            </Text>
          </View>

        </View>

        {/* Quick Access */}
        <Text style={styles.sectionTitle}>
          Explore
        </Text>

        <Pressable style={styles.exploreCard}>
          <Text style={styles.exploreEmoji}>
            📚
          </Text>

          <View style={styles.exploreContent}>
            <Text style={styles.exploreTitle}>
              Learn about your cycle
            </Text>

            <Text style={styles.exploreText}>
              Understand the different phases of the
              menstrual cycle.
            </Text>
          </View>

          <Text style={styles.arrow}>
            ›
          </Text>
        </Pressable>

        <Pressable style={styles.exploreCard}>
          <Text style={styles.exploreEmoji}>
            💗
          </Text>

          <View style={styles.exploreContent}>
            <Text style={styles.exploreTitle}>
              Track symptoms
            </Text>

            <Text style={styles.exploreText}>
              Keep track of cramps, mood, flow and
              other changes.
            </Text>
          </View>

          <Text style={styles.arrow}>
            ›
          </Text>
        </Pressable>

        <Pressable style={styles.exploreCard}>
          <Text style={styles.exploreEmoji}>
            ❓
          </Text>

          <View style={styles.exploreContent}>
            <Text style={styles.exploreTitle}>
              Myth vs Fact
            </Text>

            <Text style={styles.exploreText}>
              Learn the facts behind common menstrual
              health myths.
            </Text>
          </View>

          <Text style={styles.arrow}>
            ›
          </Text>
        </Pressable>

        {/* Reminder */}
        <View style={styles.noteCard}>
          <Text style={styles.noteTitle}>
            🌷 Your cycle is unique
          </Text>

          <Text style={styles.noteText}>
            Cycle length and symptoms can vary from
            person to person. HerSphere helps you
            understand your own patterns rather than
            comparing yourself with others.
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

  trackerCard: {
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

  cardTitle: {
    fontSize: 21,
    fontWeight: '700',
    color: '#7A4055',
    marginTop: 9,
  },

  cardDescription: {
    fontSize: 14,
    lineHeight: 21,
    color: '#8A747B',
    marginTop: 7,
  },

  primaryButton: {
    backgroundColor: '#C96F89',
    borderRadius: 26,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },

  successBox: {
    backgroundColor: '#FFF7F8',
    borderRadius: 18,
    padding: 18,
    marginTop: 20,
    alignItems: 'center',
  },

  successEmoji: {
    fontSize: 30,
  },

  successTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#7A4055',
    marginTop: 7,
  },

  successText: {
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
    color: '#8A747B',
    marginTop: 5,
  },

  secondaryButton: {
    borderWidth: 1,
    borderColor: '#C96F89',
    borderRadius: 22,
    paddingVertical: 9,
    paddingHorizontal: 25,
    marginTop: 14,
  },

  secondaryButtonText: {
    color: '#C96F89',
    fontSize: 13,
    fontWeight: '600',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#7A4055',
    marginTop: 30,
    marginBottom: 14,
  },

  statsRow: {
    flexDirection: 'row',
    gap: 10,
  },

  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F3DDE3',
  },

  statEmoji: {
    fontSize: 23,
  },

  statValue: {
    fontSize: 15,
    fontWeight: '700',
    color: '#7A4055',
    marginTop: 8,
  },

  statLabel: {
    fontSize: 10,
    color: '#8A747B',
    textAlign: 'center',
    marginTop: 4,
  },

  exploreCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 17,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F3DDE3',
  },

  exploreEmoji: {
    fontSize: 28,
    marginRight: 15,
  },

  exploreContent: {
    flex: 1,
  },

  exploreTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#7A4055',
  },

  exploreText: {
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

  noteCard: {
    backgroundColor: '#FFF0F3',
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