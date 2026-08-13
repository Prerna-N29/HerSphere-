import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good morning 🌸</Text>
            <Text style={styles.title}>Welcome to HerSphere</Text>
          </View>

          <View style={styles.profileCircle}>
            <Text style={styles.profileEmoji}>🌷</Text>
          </View>
        </View>

        {/* Wellness Check */}
        <View style={styles.wellnessCard}>
          <Text style={styles.cardTitle}>
            How are you feeling today?
          </Text>

          <Text style={styles.cardDescription}>
            Take a moment to check in with yourself.
          </Text>

          <View style={styles.moodRow}>
            <Pressable style={styles.moodButton}>
              <Text style={styles.moodEmoji}>😊</Text>
              <Text style={styles.moodText}>Great</Text>
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

        {/* Main Features */}
        <Text style={styles.sectionTitle}>
          Your Wellness Space
        </Text>

        <View style={styles.featureGrid}>

          <Pressable style={styles.featureCard}>
            <Text style={styles.featureEmoji}>🌸</Text>
            <Text style={styles.featureTitle}>
              Menstrual Health
            </Text>
            <Text style={styles.featureDescription}>
              Track and understand your cycle
            </Text>
          </Pressable>

          <Pressable style={styles.featureCard}>
            <Text style={styles.featureEmoji}>🥗</Text>
            <Text style={styles.featureTitle}>
              Smart Nutrition
            </Text>
            <Text style={styles.featureDescription}>
              Personalized food guidance
            </Text>
          </Pressable>

          <Pressable style={styles.featureCard}>
            <Text style={styles.featureEmoji}>💭</Text>
            <Text style={styles.featureTitle}>
              Well-being
            </Text>
            <Text style={styles.featureDescription}>
              Support your emotional health
            </Text>
          </Pressable>

          <Pressable style={styles.featureCard}>
            <Text style={styles.featureEmoji}>🤖</Text>
            <Text style={styles.featureTitle}>
              AI Health Buddy
            </Text>
            <Text style={styles.featureDescription}>
              Ask questions in a safe space
            </Text>
          </Pressable>

        </View>

        {/* Additional Features */}
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
              Know when and how to seek professional help.
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
    paddingHorizontal: 22,
    paddingTop: 55,
    paddingBottom: 40,
    maxWidth: 700,
    width: '100%',
    alignSelf: 'center',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  greeting: {
    fontSize: 15,
    color: '#C96F89',
    fontWeight: '600',
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
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileEmoji: {
    fontSize: 25,
  },

  wellnessCard: {
    backgroundColor: '#F8DDE5',
    borderRadius: 24,
    padding: 22,
    marginTop: 28,
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#7A4055',
  },

  cardDescription: {
    fontSize: 14,
    color: '#8A747B',
    marginTop: 6,
  },

  moodRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 18,
  },

  moodButton: {
    flex: 1,
    backgroundColor: '#FFF7F8',
    borderRadius: 16,
    alignItems: 'center',
    paddingVertical: 12,
  },

  moodEmoji: {
    fontSize: 25,
  },

  moodText: {
    fontSize: 12,
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
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    width: '48%',
    minHeight: 155,
    borderWidth: 1,
    borderColor: '#F3DDE3',
  },

  featureEmoji: {
    fontSize: 30,
    marginBottom: 12,
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