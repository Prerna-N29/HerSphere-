import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { router } from 'expo-router';
import { useTheme } from '../theme/ThemeContext';
import { useUser } from '../context/UserContext';

export default function ProfileScreen() {
  const { theme } = useTheme();
  const { user } = useUser();

  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      setSelected(
        selected.filter((item) => item !== option)
      );
    } else {
      setSelected([...selected, option]);
    }
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      <Text
        style={[
          styles.step,
          { color: theme.primary },
        ]}
      >
        A LITTLE ABOUT YOU
      </Text>

      <Text
        style={[
          styles.title,
          { color: theme.heading },
        ]}
      >
        Let's personalize your HerSphere 🌷
      </Text>

      <Text
        style={[
          styles.description,
          { color: theme.text },
        ]}
      >
        A few details will help us make your experience
        more relevant to you.
      </Text>

      {user && (
        <View
          style={[
            styles.userCard,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
        >
          <Text
            style={[
              styles.userGreeting,
              { color: theme.heading },
            ]}
          >
            Welcome, {user.name} 🌸
          </Text>

          <Text
            style={[
              styles.userEmail,
              { color: theme.text },
            ]}
          >
            {user.email}
          </Text>
        </View>
      )}

      <View
        style={[
          styles.card,
          { backgroundColor: theme.card },
        ]}
      >
        <Text
          style={[
            styles.cardTitle,
            { color: theme.heading },
          ]}
        >
          What would you like help with?
        </Text>

        <Pressable
          style={[
            styles.option,
            {
              backgroundColor: theme.primaryLight,
              borderColor: 'transparent',
            },
            selected.includes('Menstrual Health') && {
              backgroundColor: theme.selectedBackground,
              borderColor: theme.primary,
            },
          ]}
          onPress={() =>
            toggleOption('Menstrual Health')
          }
        >
          <Text
            style={[
              styles.optionText,
              { color: theme.heading },
            ]}
          >
            🌸 Menstrual Health
          </Text>

          {selected.includes('Menstrual Health') && (
            <Text
              style={[
                styles.check,
                { color: theme.primary },
              ]}
            >
              ✓
            </Text>
          )}
        </Pressable>

        <Pressable
          style={[
            styles.option,
            {
              backgroundColor: theme.primaryLight,
              borderColor: 'transparent',
            },
            selected.includes('Nutrition & Food') && {
              backgroundColor: theme.selectedBackground,
              borderColor: theme.primary,
            },
          ]}
          onPress={() =>
            toggleOption('Nutrition & Food')
          }
        >
          <Text
            style={[
              styles.optionText,
              { color: theme.heading },
            ]}
          >
            🥗 Nutrition & Food
          </Text>

          {selected.includes('Nutrition & Food') && (
            <Text
              style={[
                styles.check,
                { color: theme.primary },
              ]}
            >
              ✓
            </Text>
          )}
        </Pressable>

        <Pressable
          style={[
            styles.option,
            {
              backgroundColor: theme.primaryLight,
              borderColor: 'transparent',
            },
            selected.includes('Emotional Well-being') && {
              backgroundColor: theme.selectedBackground,
              borderColor: theme.primary,
            },
          ]}
          onPress={() =>
            toggleOption('Emotional Well-being')
          }
        >
          <Text
            style={[
              styles.optionText,
              { color: theme.heading },
            ]}
          >
            💭 Emotional Well-being
          </Text>

          {selected.includes('Emotional Well-being') && (
            <Text
              style={[
                styles.check,
                { color: theme.primary },
              ]}
            >
              ✓
            </Text>
          )}
        </Pressable>

        <Pressable
          style={[
            styles.option,
            {
              backgroundColor: theme.primaryLight,
              borderColor: 'transparent',
            },
            selected.includes('Healthy Lifestyle') && {
              backgroundColor: theme.selectedBackground,
              borderColor: theme.primary,
            },
          ]}
          onPress={() =>
            toggleOption('Healthy Lifestyle')
          }
        >
          <Text
            style={[
              styles.optionText,
              { color: theme.heading },
            ]}
          >
            🌱 Healthy Lifestyle
          </Text>

          {selected.includes('Healthy Lifestyle') && (
            <Text
              style={[
                styles.check,
                { color: theme.primary },
              ]}
            >
              ✓
            </Text>
          )}
        </Pressable>
      </View>

      <Pressable
        style={[
          styles.button,
          {
            backgroundColor:
              selected.length === 0
                ? theme.border
                : theme.primary,
          },
        ]}
        disabled={selected.length === 0}
        onPress={() => router.replace('/explore')}
      >
        <Text style={styles.buttonText}>
          Continue
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 70,
  },

  step: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.5,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    marginTop: 18,
    lineHeight: 40,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 14,
  },

  userCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    marginTop: 20,
  },

  userGreeting: {
    fontSize: 16,
    fontWeight: '700',
  },

  userEmail: {
    fontSize: 13,
    marginTop: 4,
  },

  card: {
    borderRadius: 22,
    padding: 22,
    marginTop: 24,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 16,
  },

  option: {
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderRadius: 14,
    marginVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
  },

  optionText: {
    fontSize: 15,
  },

  check: {
    fontSize: 18,
    fontWeight: '700',
  },

  button: {
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 28,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});