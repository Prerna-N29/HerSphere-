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
import { useTheme } from '../theme/ThemeContext';

export default function MenstrualHealthScreen() {
  const { theme } = useTheme();

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

    const month = String(date.getMonth() + 1).padStart(2, '0');

    const day = String(date.getDate()).padStart(2, '0');

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
  const handleWebDateChange = (event: any) => {
    const value = event.target.value;

    if (!value) {
      return;
    }

    const selectedDate = new Date(`${value}T00:00:00`);

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
        (today.getTime() - startDate.getTime()) /
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
    <ScrollView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
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
              {
                color: theme.primary,
              },
            ]}
          >
            ‹ Back
          </Text>
        </Pressable>

        {/* Header */}
        <Text style={styles.emoji}>
          🌸
        </Text>

        <Text
          style={[
            styles.title,
            {
              color: theme.heading,
            },
          ]}
        >
          Menstrual Health
        </Text>

        <Text
          style={[
            styles.subtitle,
            {
              color: theme.text,
            },
          ]}
        >
          Understand your cycle, listen to your body,
          and learn what is normal for you.
        </Text>

        {/* Period Tracker */}
        <View
          style={[
            styles.trackerCard,
            {
              backgroundColor: theme.primaryLight,
            },
          ]}
        >
          <Text
            style={[
              styles.cardLabel,
              {
                color: theme.primary,
              },
            ]}
          >
            PERIOD TRACKER
          </Text>

          <Text
            style={[
              styles.cardTitle,
              {
                color: theme.heading,
              },
            ]}
          >
            When did your last period start?
          </Text>

          <Text
            style={[
              styles.cardDescription,
              {
                color: theme.text,
              },
            ]}
          >
            Choose the date your most recent period began.
          </Text>

          {/* Date Button */}
          <Pressable
            style={[
              styles.dateButton,
              {
                backgroundColor: theme.background,
              },
            ]}
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
              <Text
                style={[
                  styles.dateLabel,
                  {
                    color: theme.text,
                  },
                ]}
              >
                Last period started
              </Text>

              <Text
                style={[
                  styles.dateValue,
                  {
                    color: theme.heading,
                  },
                ]}
              >
                {periodDate
                  ? formatDate(periodDate)
                  : 'Select a date'}
              </Text>
            </View>

            <Text
              style={[
                styles.arrow,
                {
                  color: theme.primary,
                },
              ]}
            >
              ›
            </Text>
          </Pressable>

          {/* WEB CALENDAR */}
          {Platform.OS === 'web' && (
            <View
              style={[
                styles.webDateContainer,
                {
                  backgroundColor: theme.background,
                },
              ]}
            >
              <Text
                style={[
                  styles.webDateLabel,
                  {
                    color: theme.text,
                  },
                ]}
              >
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
                  border: `1px solid ${theme.border}`,
                  padding: '0 12px',
                  fontSize: 15,
                  color: theme.heading,
                  backgroundColor: theme.card,
                  boxSizing: 'border-box',
                }}
              />
            </View>
          )}

          {/* ANDROID / IOS CALENDAR */}
          {showDatePicker &&
            Platform.OS !== 'web' && (
              <View
                style={[
                  styles.datePickerContainer,
                  {
                    backgroundColor: theme.background,
                  },
                ]}
              >
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
            <View
              style={[
                styles.successBox,
                {
                  backgroundColor: theme.background,
                },
              ]}
            >
              <Text style={styles.successEmoji}>
                🌷
              </Text>

              <View style={styles.successContent}>
                <Text
                  style={[
                    styles.successTitle,
                    {
                      color: theme.heading,
                    },
                  ]}
                >
                  Period date recorded
                </Text>

                <Text
                  style={[
                    styles.successText,
                    {
                      color: theme.text,
                    },
                  ]}
                >
                  Your last period started on{' '}
                  {formatDate(periodDate)}.
                </Text>
              </View>
            </View>
          )}
        </View>

        {/* Cycle Overview */}
        <Text
          style={[
            styles.sectionTitle,
            {
              color: theme.heading,
            },
          ]}
        >
          Cycle Overview
        </Text>

        <View style={styles.statsRow}>

          {/* Current Cycle */}
          <View
            style={[
              styles.statCard,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
          >
            <Text style={styles.statEmoji}>
              🩸
            </Text>

            <Text
              style={[
                styles.statValue,
                {
                  color: theme.heading,
                },
              ]}
            >
              {getCycleDay()}
            </Text>

            <Text
              style={[
                styles.statLabel,
                {
                  color: theme.text,
                },
              ]}
            >
              Current cycle
            </Text>
          </View>

          {/* Typical Cycle */}
          <View
            style={[
              styles.statCard,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
          >
            <Text style={styles.statEmoji}>
              📅
            </Text>

            <Text
              style={[
                styles.statValue,
                {
                  color: theme.heading,
                },
              ]}
            >
              {cycleLength} days
            </Text>

            <Text
              style={[
                styles.statLabel,
                {
                  color: theme.text,
                },
              ]}
            >
              Typical cycle
            </Text>
          </View>

          {/* Next Period */}
          <View
            style={[
              styles.statCard,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
          >
            <Text style={styles.statEmoji}>
              🌙
            </Text>

            <Text
              style={[
                styles.statValue,
                {
                  color: theme.heading,
                },
              ]}
            >
              {getNextPeriodDate()
                ? formatDate(
                    getNextPeriodDate()!
                  )
                : '--'}
            </Text>

            <Text
              style={[
                styles.statLabel,
                {
                  color: theme.text,
                },
              ]}
            >
              Next period
            </Text>
          </View>
        </View>

        {/* Explore */}
        <Text
          style={[
            styles.sectionTitle,
            {
              color: theme.heading,
            },
          ]}
        >
          Explore
        </Text>

        {/* Learn About Cycle */}
        <Pressable
          style={[
            styles.exploreCard,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
          onPress={() => router.push('/cycle-info')}
        >
          <Text style={styles.exploreEmoji}>
            📚
          </Text>

          <View style={styles.exploreContent}>
            <Text
              style={[
                styles.exploreTitle,
                {
                  color: theme.heading,
                },
              ]}
            >
              Learn about your cycle
            </Text>

            <Text
              style={[
                styles.exploreText,
                {
                  color: theme.text,
                },
              ]}
            >
              Understand the different phases of the
              menstrual cycle.
            </Text>
          </View>

          <Text
            style={[
              styles.arrow,
              {
                color: theme.primary,
              },
            ]}
          >
            ›
          </Text>
        </Pressable>

        {/* Track Symptoms */}
        <Pressable
          style={[
            styles.exploreCard,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
          onPress={() => router.push('/symptoms')}
        >
          <Text style={styles.exploreEmoji}>
            💗
          </Text>

          <View style={styles.exploreContent}>
            <Text
              style={[
                styles.exploreTitle,
                {
                  color: theme.heading,
                },
              ]}
            >
              Track symptoms
            </Text>

            <Text
              style={[
                styles.exploreText,
                {
                  color: theme.text,
                },
              ]}
            >
              Keep track of cramps, mood, flow and
              other changes.
            </Text>
          </View>

          <Text
            style={[
              styles.arrow,
              {
                color: theme.primary,
              },
            ]}
          >
            ›
          </Text>
        </Pressable>

        {/* Myth vs Fact */}
        <Pressable
          style={[
            styles.exploreCard,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
          onPress={() => router.push('/myth-fact')}
        >
          <Text style={styles.exploreEmoji}>
            ❓
          </Text>

          <View style={styles.exploreContent}>
            <Text
              style={[
                styles.exploreTitle,
                {
                  color: theme.heading,
                },
              ]}
            >
              Myth vs Fact
            </Text>

            <Text
              style={[
                styles.exploreText,
                {
                  color: theme.text,
                },
              ]}
            >
              Learn the facts behind common menstrual
              health myths.
            </Text>
          </View>

          <Text
            style={[
              styles.arrow,
              {
                color: theme.primary,
              },
            ]}
          >
            ›
          </Text>
        </Pressable>

        {/* Note */}
        <View
          style={[
            styles.noteCard,
            {
              backgroundColor: theme.primaryLight,
            },
          ]}
        >
          <Text
            style={[
              styles.noteTitle,
              {
                color: theme.heading,
              },
            ]}
          >
            🌷 Your cycle is unique
          </Text>

          <Text
            style={[
              styles.noteText,
              {
                color: theme.text,
              },
            ]}
          >
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

  trackerCard: {
    borderRadius: 24,
    padding: 22,
    marginTop: 28,
  },

  cardLabel: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.4,
  },

  cardTitle: {
    fontSize: 21,
    fontWeight: '700',
    marginTop: 9,
  },

  cardDescription: {
    fontSize: 14,
    lineHeight: 21,
    marginTop: 7,
  },

  dateButton: {
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
  },

  dateValue: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 3,
  },

  webDateContainer: {
    borderRadius: 18,
    padding: 15,
    marginTop: 12,
  },

  webDateLabel: {
    fontSize: 12,
    marginBottom: 8,
  },

  datePickerContainer: {
    borderRadius: 18,
    marginTop: 12,
    alignItems: 'center',
    overflow: 'hidden',
  },

  successBox: {
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
  },

  successText: {
    fontSize: 12,
    lineHeight: 18,
    marginTop: 3,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 30,
    marginBottom: 14,
  },

  statsRow: {
    flexDirection: 'row',
    gap: 10,
  },

  statCard: {
    flex: 1,
    borderRadius: 18,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
  },

  statEmoji: {
    fontSize: 23,
  },

  statValue: {
    fontSize: 15,
    fontWeight: '700',
    marginTop: 8,
    textAlign: 'center',
  },

  statLabel: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 4,
  },

  exploreCard: {
    borderRadius: 18,
    padding: 17,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
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
  },

  exploreText: {
    fontSize: 12,
    lineHeight: 18,
    marginTop: 4,
  },

  arrow: {
    fontSize: 27,
    marginLeft: 8,
  },

  noteCard: {
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