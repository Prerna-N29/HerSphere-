import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good morning 🌸</Text>

            <Text style={styles.title}>
              Welcome to HerSphere
            </Text>
          </View>

          <Pressable style={styles.profileCircle}>
            <Text style={styles.profileEmoji}>🌷</Text>
          </Pressable>
        </View>

        {/* Daily Check-in */}
        <View style={styles.checkInCard}>
          <Text style={styles.checkInTitle}>
            How are you feeling today?
          </Text>

          <Text style={styles.checkInSubtitle}>
            Take a moment to check in with yourself.
          </Text>

          <View style={styles.moodRow}>
            <Pressable style={styles.moodButton}>
              <Text style={styles.moodEmoji}>😊</Text>
              <Text style={styles.moodText}>Great</Text>
            </Pressable>

            <Pressable style={styles.moodButton}>
              <Text style={styles.moodEmoji}>🙂</Text>
              <Text style={styles.moodText}>Good</Text>
            </Pressable>

            <Pressable style={styles.moodButton}>
              <Text style={styles.moodEmoji}>😐</Text>
              <Text style={styles.moodText}>Okay</Text>
            </Pressable>

            <Pressable style={styles.moodButton}>
              <Text style={styles.moodEmoji}>😔</Text>
              <Text style={styles.moodText}>Low</Text>
            </Pressable>
          </View>
        </View>

        {/* Wellness Features */}
        <Text style={styles.sectionTitle}>
          Your Wellness Space
        </Text>

        <View style={styles.featureGrid}>

          {/* Menstrual Health */}
          <Pressable
            style={styles.featureCard}
            onPress={() => router.push('/menstrual')}
          >
            <View style={styles.iconCircle}>
              <Text style={styles.featureEmoji}>🌸</Text>
            </View>

            <Text style={styles.featureTitle}>
              Menstrual Health
            </Text>

            <Text style={styles.featureDescription}>
              Track and understand your cycle
            </Text>
          </Pressable>

          {/* Nutrition */}
<Pressable
  style={styles.featureCard}
  onPress={() => router.push('/nutrition')}
>
            <View style={styles.iconCircle}>
              <Text style={styles.featureEmoji}>🥗</Text>
            </View>

            <Text style={styles.featureTitle}>
              Smart Nutrition
            </Text>

            <Text style={styles.featureDescription}>
              Personalized food guidance
            </Text>
          </Pressable>

          {/* Emotional Well-being */}
          <Pressable style={styles.featureCard}>
            <View style={styles.iconCircle}>
              <Text style={styles.featureEmoji}>💭</Text>
            </View>

            <Text style={styles.featureTitle}>
              Well-being
            </Text>

            <Text style={styles.featureDescription}>
              Support your emotional health
            </Text>
          </Pressable>

          {/* AI Buddy */}
          <Pressable style={styles.featureCard}>
            <View style={styles.iconCircle}>
              <Text style={styles.featureEmoji}>🤖</Text>
            </View>

            <Text style={styles.featureTitle}>
              AI Health Buddy
            </Text>

            <Text style={styles.featureDescription}>
              Ask questions in a safe space
            </Text>
          </Pressable>

        </View>

        {/* Explore */}
        <Text style={styles.sectionTitle}>
          Explore HerSphere
        </Text>

        <Pressable style={styles.wideCard}>
          <Text style={styles.wideEmoji}>📚</Text>

          <View style={styles.wideContent}>
            <Text style={styles.wideTitle}>
              Myth vs Fact
            </Text>

            <Text style={styles.wideDescription}>
              Learn what is true and what isn't.
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </Pressable>

        <Pressable style={styles.wideCard}>
          <Text style={styles.wideEmoji}>🩺</Text>

          <View style={styles.wideContent}>
            <Text style={styles.wideTitle}>
              Doctor Visit Guidance
            </Text>

            <Text style={styles.wideDescription}>
              Know when professional guidance may help.
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </Pressable>

        <Pressable style={styles.wideCard}>
          <Text style={styles.wideEmoji}>🌱</Text>

          <View style={styles.wideContent}>
            <Text style={styles.wideTitle}>
              Sustainable Food
            </Text>

            <Text style={styles.wideDescription}>
              Discover healthier and sustainable choices.
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </Pressable>

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
    paddingTop: 55,
    paddingBottom: 50,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  greeting: {
    fontSize: 15,
    fontWeight: '600',
    color: '#C96F89',
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#7A4055',
    marginTop: 5,
  },

  profileCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#F8DDE5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileEmoji: {
    fontSize: 25,
  },

  checkInCard: {
    backgroundColor: '#F8DDE5',
    borderRadius: 24,
    padding: 22,
    marginTop: 28,
  },

  checkInTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#7A4055',
  },

  checkInSubtitle: {
    fontSize: 14,
    color: '#8A747B',
    marginTop: 6,
  },

  moodRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 18,
  },

  moodButton: {
    flex: 1,
    backgroundColor: '#FFF7F8',
    borderRadius: 15,
    alignItems: 'center',
    paddingVertical: 11,
  },

  moodEmoji: {
    fontSize: 23,
  },

  moodText: {
    fontSize: 11,
    color: '#7A4055',
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#7A4055',
    marginTop: 30,
    marginBottom: 14,
  },

  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },

  featureCard: {
    width: '48%',
    minHeight: 165,
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    borderColor: '#F3DDE3',
  },

  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFF0F3',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  featureEmoji: {
    fontSize: 25,
  },

  featureTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#7A4055',
  },

  featureDescription: {
    fontSize: 12,
    lineHeight: 18,
    color: '#8A747B',
    marginTop: 6,
  },

  wideCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 17,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F3DDE3',
  },

  wideEmoji: {
    fontSize: 28,
    marginRight: 15,
  },

  wideContent: {
    flex: 1,
  },

  wideTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#7A4055',
  },

  wideDescription: {
    fontSize: 12,
    lineHeight: 18,
    color: '#8A747B',
    marginTop: 3,
  },

  arrow: {
    fontSize: 27,
    color: '#C96F89',
    marginLeft: 8,
  },
});