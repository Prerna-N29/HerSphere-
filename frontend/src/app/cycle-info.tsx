import React from 'react';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function CycleInfoScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

        <Pressable
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.back}>‹ Back</Text>
        </Pressable>

        <Text style={styles.emoji}>🌸</Text>

        <Text style={styles.title}>
          Your Menstrual Cycle
        </Text>

        <Text style={styles.subtitle}>
          Understanding your cycle can help you learn more
          about your body and notice your own patterns.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardEmoji}>🩸</Text>

          <Text style={styles.cardTitle}>
            1. Menstrual Phase
          </Text>

          <Text style={styles.cardText}>
            This is when your period occurs and the uterus
            sheds its lining.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardEmoji}>🌱</Text>

          <Text style={styles.cardTitle}>
            2. Follicular Phase
          </Text>

          <Text style={styles.cardText}>
            Your body prepares an egg for ovulation and
            estrogen levels gradually increase.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardEmoji}>🥚</Text>

          <Text style={styles.cardTitle}>
            3. Ovulation
          </Text>

          <Text style={styles.cardText}>
            An ovary releases an egg. The timing can vary
            between people and between cycles.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardEmoji}>🌙</Text>

          <Text style={styles.cardTitle}>
            4. Luteal Phase
          </Text>

          <Text style={styles.cardText}>
            Hormone levels change as your body prepares
            for the next stage of the cycle.
          </Text>
        </View>

        <View style={styles.note}>
          <Text style={styles.noteTitle}>
            💗 Remember
          </Text>

          <Text style={styles.noteText}>
            Every person's cycle can be different. Tracking
            your own patterns is more useful than comparing
            yourself with someone else.
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
    marginBottom: 24,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#F3DDE3',
  },

  cardEmoji: {
    fontSize: 30,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#7A4055',
    marginTop: 8,
  },

  cardText: {
    fontSize: 13,
    lineHeight: 21,
    color: '#8A747B',
    marginTop: 8,
  },

  note: {
    backgroundColor: '#FFF0F3',
    borderRadius: 20,
    padding: 18,
    marginTop: 5,
  },

  noteTitle: {
    fontSize: 16,
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