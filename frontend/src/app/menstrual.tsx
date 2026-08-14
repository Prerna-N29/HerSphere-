import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { router } from 'expo-router';

export default function MenstrualHealthScreen() {
  const [periodDate, setPeriodDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const cycleLength = 28;

  // Format date for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  // Format date for browser input
  const formatDateForWeb = (date: Date) => {
    const year = date.getFullYear();

    const month = String(
      date.getMonth() + 1
    ).padStart(2, '0');

    const day = String(
      date.getDate()
    ).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  // Handle Android / iOS date picker
  const handleNativeDateChange = (
    event: any,
    selectedDate?: Date
  ) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }

    if (selectedDate) {
      setPeriodDate(selectedDate);

      if (Platform.OS === 'ios') {
        setShowDatePicker(false);
      }
    }
  };

  // Handle browser calendar
  const handleWebDateChange = (
    event: any
  ) => {
    const value = event.target.value;

    if (!value) {
      return;
    }

    const selectedDate = new Date(
      `${value}T00:00:00`
    );

    if (!isNaN(selectedDate.getTime())) {
      setPeriodDate(selectedDate);
    }
  };

  // Calculate current cycle day
  const getCycleDay = () => {
    if (!periodDate) {
      return '--';
    }

    const today = new Date();
    const startDate = new Date(periodDate);

    today.setHours(0, 0, 0, 0);
    startDate.setHours(0, 0, 0, 0);

    const difference =
      Math.floor(
        (today.getTime() -
          startDate.getTime()) /
          (1000 * 60 * 60 * 24)
      ) + 1;

    return `Day ${Math.max(difference, 1)}`;
  };

  // Calculate next expected period
  const getNextPeriodDate = () => {
    if (!periodDate) {
      return null;
    }

    const nextDate = new Date(periodDate);

    nextDate.setDate(
      nextDate.getDate() + cycleLength
    );

    return nextDate;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

        {/* Back */}
        <Pressable
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.back}>
            ‹ Back
          </Text>
        </Pressable>

        {/* Header */}
        <Text style={styles.emoji}>
          🌸
        </Text>

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
            Choose the date your most recent period began.
          </Text>

          {/* Date Button */}
          <Pressable
            style={styles.dateButton}
            onPress={() => {
              if (Platform.OS !== 'web') {
                setShowDatePicker(true);
              }
            }}
          >
            <Text style={styles.calendarEmoji}>
              📅
            </Text>

            <View style={styles.dateTextContainer}>

              <Text style={styles.dateLabel}>
                Last period started
              </Text>

              <Text style={styles.dateValue}>
                {periodDate
                  ? formatDate(periodDate)
                  : 'Select a date'}
              </Text>

            </View>

            <Text style={styles.arrow}>
              ›
            </Text>

          </Pressable>

          {/* WEB CALENDAR */}
          {Platform.OS === 'web' && (
            <View style={styles.webDateContainer}>

              <Text style={styles.webDateLabel}>
                Choose a date
              </Text>

              <input
                type="date"
                max={
                  new Date()
                    .toISOString()
                    .split('T')[0]
                }
                value={
                  periodDate
                    ? formatDateForWeb(periodDate)
                    : ''
                }
                onChange={handleWebDateChange}
                style={{
                  width: '100%',
                  height: 45,
                  borderRadius: 12,
                  border: '1px solid #E8C7D1',
                  padding: '0 12px',
                  fontSize: 15,
                  color: '#7A4055',
                  backgroundColor: '#FFFFFF',
                  boxSizing: 'border-box',
                }}
              />

            </View>
          )}

          {/* ANDROID / IOS CALENDAR */}
          {showDatePicker &&
            Platform.OS !== 'web' && (
              <View style={styles.datePickerContainer}>

                <DateTimePicker
                  value={
                    periodDate || new Date()
                  }
                  mode="date"
                  display={
                    Platform.OS === 'ios'
                      ? 'spinner'
                      : 'default'
                  }
                  maximumDate={new Date()}
                  onChange={handleNativeDateChange}
                />

              </View>
            )}

          {/* Selected Date */}
          {periodDate && (
            <View style={styles.successBox}>

              <Text style={styles.successEmoji}>
                🌷
              </Text>

              <View style={styles.successContent}>

                <Text style={styles.successTitle}>
                  Period date recorded
                </Text>

                <Text style={styles.successText}>
                  Your last period started on{' '}
                  {formatDate(periodDate)}.
                </Text>

              </View>

            </View>
          )}

        </View>

        {/* Cycle Overview */}
        <Text style={styles.sectionTitle}>
          Cycle Overview
        </Text>

        <View style={styles.statsRow}>

          {/* Current Cycle */}
          <View style={styles.statCard}>

            <Text style={styles.statEmoji}>
              🩸
            </Text>

            <Text style={styles.statValue}>
              {getCycleDay()}
            </Text>

            <Text style={styles.statLabel}>
              Current cycle
            </Text>

          </View>

          {/* Typical Cycle */}
          <View style={styles.statCard}>

            <Text style={styles.statEmoji}>
              📅
            </Text>

            <Text style={styles.statValue}>
              {cycleLength} days
            </Text>

            <Text style={styles.statLabel}>
              Typical cycle
            </Text>

          </View>

          {/* Next Period */}
          <View style={styles.statCard}>

            <Text style={styles.statEmoji}>
              🌙
            </Text>

            <Text style={styles.statValue}>
              {getNextPeriodDate()
                ? formatDate(
                    getNextPeriodDate()!
                  )
                : '--'}
            </Text>

            <Text style={styles.statLabel}>
              Next period
            </Text>

          </View>

        </View>

        {/* Explore */}
        <Text style={styles.sectionTitle}>
          Explore
        </Text>

        {/* Learn About Cycle */}
        <Pressable
  style={styles.exploreCard}
  onPress={() => router.push('/cycle-info')}
>
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

        {/* Track Symptoms */}
        {/* Track Symptoms */}
<Pressable
  style={styles.exploreCard}
  onPress={() => router.push('/symptoms')}
>

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

        {/* Myth vs Fact */}
        {/* Myth vs Fact */}
<Pressable
  style={styles.exploreCard}
  onPress={() => router.push('/myth-fact')}
>

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

        {/* Note */}
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

  dateButton: {
    backgroundColor: '#FFF7F8',
    borderRadius: 18,
    padding: 15,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  calendarEmoji: {
    fontSize: 28,
    marginRight: 13,
  },

  dateTextContainer: {
    flex: 1,
  },

  dateLabel: {
    fontSize: 11,
    color: '#8A747B',
  },

  dateValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#7A4055',
    marginTop: 3,
  },

  webDateContainer: {
    backgroundColor: '#FFF7F8',
    borderRadius: 18,
    padding: 15,
    marginTop: 12,
  },

  webDateLabel: {
    fontSize: 12,
    color: '#8A747B',
    marginBottom: 8,
  },

  datePickerContainer: {
    backgroundColor: '#FFF7F8',
    borderRadius: 18,
    marginTop: 12,
    alignItems: 'center',
    overflow: 'hidden',
  },

  successBox: {
    backgroundColor: '#FFF7F8',
    borderRadius: 18,
    padding: 15,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  successEmoji: {
    fontSize: 28,
    marginRight: 12,
  },

  successContent: {
    flex: 1,
  },

  successTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#7A4055',
  },

  successText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#8A747B',
    marginTop: 3,
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
    textAlign: 'center',
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

