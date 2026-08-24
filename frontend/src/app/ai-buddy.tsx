import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { router } from 'expo-router';
import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';

export default function AIBuddyScreen() {
  const { themeName } = useTheme();
  const theme = themes[themeName];

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<
    { text: string; sender: 'user' | 'ai' }[]
  >([]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const userMessage = message.trim();

    setMessages((prev) => [
      ...prev,
      { text: userMessage, sender: 'user' },
      {
        text: 'Thanks for sharing. I’m here to help you understand your health better. 💗',
        sender: 'ai',
      },
    ]);

    setMessage('');
  };

  const askQuestion = (question: string) => {
    setMessage(question);
  };

  return (
    <KeyboardAvoidingView
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Pressable
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text
            style={[
              styles.back,
              { color: theme.primary },
            ]}
          >
            ‹ Back
          </Text>
        </Pressable>

        <View style={styles.header}>
          <View
            style={[
              styles.botCircle,
              { backgroundColor: theme.primaryLight },
            ]}
          >
            <Text style={styles.botEmoji}>🤖</Text>
          </View>

          <View style={styles.headerText}>
            <Text
              style={[
                styles.title,
                { color: theme.heading },
              ]}
            >
              AI Health Buddy
            </Text>

            <Text
              style={[
                styles.status,
                { color: theme.text },
              ]}
            >
              Your supportive health companion
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.welcomeCard,
            { backgroundColor: theme.primaryLight },
          ]}
        >
          <Text style={styles.welcomeEmoji}>🌷</Text>

          <Text
            style={[
              styles.welcomeTitle,
              { color: theme.heading },
            ]}
          >
            Hi! I'm your HerSphere health buddy.
          </Text>

          <Text
            style={[
              styles.welcomeText,
              { color: theme.text },
            ]}
          >
            Ask me questions about menstrual health,
            nutrition or emotional wellbeing. I'll help
            you find simple, understandable information.
          </Text>
        </View>

        <Text
          style={[
            styles.sectionTitle,
            { color: theme.heading },
          ]}
        >
          You can ask me about...
        </Text>

        <View style={styles.quickQuestions}>
          <Pressable
            style={[
              styles.questionButton,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
            onPress={() =>
              askQuestion(
                'Why do I feel tired during my period?'
              )
            }
          >
            <Text style={styles.questionEmoji}>🌸</Text>

            <Text
              style={[
                styles.questionText,
                { color: theme.heading },
              ]}
            >
              Menstrual health
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.questionButton,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
            onPress={() =>
              askQuestion(
                'What does a balanced meal look like?'
              )
            }
          >
            <Text style={styles.questionEmoji}>🥗</Text>

            <Text
              style={[
                styles.questionText,
                { color: theme.heading },
              ]}
            >
              Nutrition
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.questionButton,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
            onPress={() =>
              askQuestion(
                'What can I do when I feel overwhelmed?'
              )
            }
          >
            <Text style={styles.questionEmoji}>💭</Text>

            <Text
              style={[
                styles.questionText,
                { color: theme.heading },
              ]}
            >
              Well-being
            </Text>
          </Pressable>
        </View>

        {messages.length > 0 && (
          <View style={styles.chatSection}>
            {messages.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.messageBubble,
                  item.sender === 'user'
                    ? [
                        styles.userBubble,
                        { backgroundColor: theme.primary },
                      ]
                    : [
                        styles.aiBubble,
                        {
                          backgroundColor: theme.card,
                          borderColor: theme.border,
                        },
                      ],
                ]}
              >
                <Text
                  style={[
                    styles.messageText,
                    item.sender === 'user'
                      ? styles.userText
                      : [
                          styles.aiText,
                          { color: theme.heading },
                        ],
                  ]}
                >
                  {item.text}
                </Text>
              </View>
            ))}
          </View>
        )}

        <View
          style={[
            styles.inputContainer,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
        >
          <TextInput
            style={[
              styles.input,
              { color: theme.heading },
            ]}
            placeholder="Ask something..."
            placeholderTextColor={theme.text}
            value={message}
            onChangeText={setMessage}
            multiline
          />

          <Pressable
            style={[
              styles.sendButton,
              {
                backgroundColor: message.trim()
                  ? theme.primary
                  : theme.border,
              },
            ]}
            onPress={sendMessage}
            disabled={!message.trim()}
          >
            <Text style={styles.sendText}>➤</Text>
          </Pressable>
        </View>

        <View
          style={[
            styles.disclaimer,
            { backgroundColor: theme.primaryLight },
          ]}
        >
          <Text
            style={[
              styles.disclaimerText,
              { color: theme.text },
            ]}
          >
            💗 HerSphere provides general health information
            and is not a substitute for professional medical
            advice. If you have a serious or persistent concern,
            please consult a qualified healthcare professional.
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    paddingBottom: 40,
  },

  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },

  back: {
    fontSize: 17,
    fontWeight: '600',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  botCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    alignItems: 'center',
    justifyContent: 'center',
  },

  botEmoji: {
    fontSize: 30,
  },

  headerText: {
    marginLeft: 14,
    flex: 1,
  },

  title: {
    fontSize: 27,
    fontWeight: '700',
  },

  status: {
    fontSize: 12,
    marginTop: 3,
  },

  welcomeCard: {
    borderRadius: 24,
    padding: 22,
    marginTop: 25,
  },

  welcomeEmoji: {
    fontSize: 30,
  },

  welcomeTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 9,
  },

  welcomeText: {
    fontSize: 13,
    lineHeight: 21,
    marginTop: 7,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '700',
    marginTop: 28,
    marginBottom: 13,
  },

  quickQuestions: {
    gap: 10,
  },

  questionButton: {
    borderRadius: 17,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
  },

  questionEmoji: {
    fontSize: 23,
    marginRight: 12,
  },

  questionText: {
    fontSize: 14,
    fontWeight: '600',
  },

  chatSection: {
    marginTop: 22,
    gap: 10,
  },

  messageBubble: {
    maxWidth: '85%',
    padding: 14,
    borderRadius: 18,
  },

  userBubble: {
    alignSelf: 'flex-end',
    borderBottomRightRadius: 5,
  },

  aiBubble: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderBottomLeftRadius: 5,
  },

  messageText: {
    fontSize: 13,
    lineHeight: 19,
  },

  userText: {
    color: '#FFFFFF',
  },

  aiText: {},

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderRadius: 22,
    padding: 7,
    marginTop: 22,
    borderWidth: 1,
  },

  input: {
    flex: 1,
    minHeight: 42,
    maxHeight: 100,
    paddingHorizontal: 13,
    paddingVertical: 10,
    fontSize: 14,
  },

  sendButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },

  sendText: {
    color: '#FFFFFF',
    fontSize: 18,
  },

  disclaimer: {
    borderRadius: 18,
    padding: 15,
    marginTop: 18,
  },

  disclaimerText: {
    fontSize: 11,
    lineHeight: 17,
    textAlign: 'center',
  },
});