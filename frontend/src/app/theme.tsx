import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { useTheme } from '../theme/ThemeContext';
import { ThemeName, themes } from '../theme/themes';

export default function ThemeScreen() {
  const { themeName, setThemeName } = useTheme();

  const themeOptions = Object.entries(themes) as [
    ThemeName,
    (typeof themes)[ThemeName]
  ][];

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: themes[themeName].background },
      ]}
      contentContainerStyle={styles.content}
    >
      <Text
        style={[
          styles.step,
          { color: themes[themeName].primary },
        ]}
      >
        PERSONALIZE YOUR SPACE
      </Text>

      <Text
        style={[
          styles.title,
          { color: themes[themeName].heading },
        ]}
      >
        Choose your HerSphere 🌸
      </Text>

      <Text
        style={[
          styles.description,
          { color: themes[themeName].text },
        ]}
      >
        Pick a color theme that feels like you.
        You can change it anytime from your profile.
      </Text>

      <View style={styles.grid}>
        {themeOptions.map(([key, option]) => {
          const isSelected = themeName === key;

          return (
            <Pressable
              key={key}
              onPress={() => setThemeName(key)}
              style={[
                styles.themeCard,
                {
                  backgroundColor: option.card,
                  borderColor: isSelected
                    ? option.primary
                    : option.border,
                },
              ]}
            >
              <View
                style={[
                  styles.colorPreview,
                  { backgroundColor: option.primaryLight },
                ]}
              >
                <Text style={styles.emoji}>
                  {option.emoji}
                </Text>
              </View>

              <Text
                style={[
                  styles.themeName,
                  { color: option.heading },
                ]}
              >
                {option.name}
              </Text>

              <View style={styles.palette}>
                <View
                  style={[
                    styles.paletteDot,
                    { backgroundColor: option.primary },
                  ]}
                />

                <View
                  style={[
                    styles.paletteDot,
                    { backgroundColor: option.primaryLight },
                  ]}
                />

                <View
                  style={[
                    styles.paletteDot,
                    { backgroundColor: option.heading },
                  ]}
                />
              </View>

              {isSelected && (
                <View
                  style={[
                    styles.check,
                    { backgroundColor: option.primary },
                  ]}
                >
                  <Text style={styles.checkText}>
                    ✓
                  </Text>
                </View>
              )}
            </Pressable>
          );
        })}
      </View>

      <View
        style={[
          styles.previewCard,
          {
            backgroundColor: themes[themeName].card,
            borderColor: themes[themeName].border,
          },
        ]}
      >
        <Text
          style={[
            styles.previewLabel,
            { color: themes[themeName].text },
          ]}
        >
          PREVIEW
        </Text>

        <Text
          style={[
            styles.previewTitle,
            { color: themes[themeName].heading },
          ]}
        >
          Your space, your colors ✨
        </Text>

        <View
          style={[
            styles.previewButton,
            { backgroundColor: themes[themeName].primary },
          ]}
        >
          <Text style={styles.previewButtonText}>
            Looks beautiful!
          </Text>
        </View>
      </View>

      <Pressable
        style={[
          styles.continueButton,
          { backgroundColor: themes[themeName].primary },
        ]}
        onPress={() => router.replace('/profile')}
      >
        <Text style={styles.continueText}>
          Continue
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 70,
    paddingBottom: 40,
  },

  step: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    marginTop: 16,
    lineHeight: 40,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 12,
    marginBottom: 28,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  themeCard: {
    width: '48%',
    borderWidth: 2,
    borderRadius: 20,
    padding: 14,
    marginBottom: 16,
    position: 'relative',
  },

  colorPreview: {
    height: 82,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emoji: {
    fontSize: 34,
  },

  themeName: {
    fontSize: 15,
    fontWeight: '700',
    marginTop: 12,
  },

  palette: {
    flexDirection: 'row',
    marginTop: 9,
  },

  paletteDot: {
    width: 13,
    height: 13,
    borderRadius: 7,
    marginRight: 5,
  },

  check: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 25,
    height: 25,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },

  previewCard: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    marginTop: 8,
  },

  previewLabel: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.3,
  },

  previewTitle: {
    fontSize: 19,
    fontWeight: '700',
    marginTop: 8,
  },

  previewButton: {
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 16,
  },

  previewButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },

  continueButton: {
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 24,
  },

  continueText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});

