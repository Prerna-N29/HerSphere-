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

export default function AIBuddyScreen() {
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
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >

        {/* Back */}
        <Pressable
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.back}>‹ Back</Text>
        </Pressable>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.botCircle}>
            <Text style={styles.botEmoji}>🤖</Text>
          </View>

          <View style={styles.headerText}>
            <Text style={styles.title}>
              AI Health Buddy
            </Text>

            <Text style={styles.status}>
              Your supportive health companion
            </Text>
          </View>
        </View>

        {/* Welcome */}
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeEmoji}>
            🌷
          </Text>

          <Text style={styles.welcomeTitle}>
            Hi! I'm your HerSphere health buddy.
          </Text>

          <Text style={styles.welcomeText}>
            Ask me questions about menstrual health,
            nutrition or emotional wellbeing. I'll help
            you find simple, understandable information.
          </Text>
        </View>

        {/* Quick Questions */}
        <Text style={styles.sectionTitle}>
          You can ask me about...
        </Text>

        <View style={styles.quickQuestions}>

          <Pressable
            style={styles.questionButton}
            onPress={() =>
              askQuestion(
                'Why do I feel tired during my period?'
              )
            }
          >
            <Text style={styles.questionEmoji}>
              🌸
            </Text>

            <Text style={styles.questionText}>
              Menstrual health
            </Text>
          </Pressable>

          <Pressable
            style={styles.questionButton}
            onPress={() =>
              askQuestion(
                'What does a balanced meal look like?'
              )
            }
          >
            <Text style={styles.questionEmoji}>
              🥗
            </Text>

            <Text style={styles.questionText}>
              Nutrition
            </Text>
          </Pressable>

          <Pressable
            style={styles.questionButton}
            onPress={() =>
              askQuestion(
                'What can I do when I feel overwhelmed?'
              )
            }
          >
            <Text style={styles.questionEmoji}>
              💭
            </Text>

            <Text style={styles.questionText}>
              Well-being
            </Text>
          </Pressable>

        </View>

        {/* Chat */}
        {messages.length > 0 && (
          <View style={styles.chatSection}>

            {messages.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.messageBubble,
                  item.sender === 'user'
                    ? styles.userBubble
                    : styles.aiBubble,
                ]}
              >
                <Text
                  style={[
                    styles.messageText,
                    item.sender === 'user'
                      ? styles.userText
                      : styles.aiText,
                  ]}
                >
                  {item.text}
                </Text>
              </View>
            ))}

          </View>
        )}

        {/* Input */}
        <View style={styles.inputContainer}>

          <TextInput
            style={styles.input}
            placeholder="Ask something..."
            placeholderTextColor="#B69AA4"
            value={message}
            onChangeText={setMessage}
            multiline
          />

          <Pressable
            style={[
              styles.sendButton,
              !message.trim() && styles.disabledSend,
            ]}
            onPress={sendMessage}
            disabled={!message.trim()}
          >
            <Text style={styles.sendText}>
              ➤
            </Text>
          </Pressable>

        </View>

        {/* Disclaimer */}
        <View style={styles.disclaimer}>
          <Text style={styles.disclaimerText}>
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
    backgroundColor: '#FFF7F8',
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
    color: '#C96F89',
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
    backgroundColor: '#F8DDE5',
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
    color: '#7A4055',
  },

  status: {
    fontSize: 12,
    color: '#8A747B',
    marginTop: 3,
  },

  welcomeCard: {
    backgroundColor: '#F8DDE5',
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
    color: '#7A4055',
    marginTop: 9,
  },

  welcomeText: {
    fontSize: 13,
    lineHeight: 21,
    color: '#8A747B',
    marginTop: 7,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#7A4055',
    marginTop: 28,
    marginBottom: 13,
  },

  quickQuestions: {
    gap: 10,
  },

  questionButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F3DDE3',
  },

  questionEmoji: {
    fontSize: 23,
    marginRight: 12,
  },

  questionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7A4055',
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
    backgroundColor: '#C96F89',
    borderBottomRightRadius: 5,
  },

  aiBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F3DDE3',
    borderBottomLeftRadius: 5,
  },

  messageText: {
    fontSize: 13,
    lineHeight: 19,
  },

  userText: {
    color: '#FFFFFF',
  },

  aiText: {
    color: '#7A4055',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 7,
    marginTop: 22,
    borderWidth: 1,
    borderColor: '#F3DDE3',
  },

  input: {
    flex: 1,
    minHeight: 42,
    maxHeight: 100,
    paddingHorizontal: 13,
    paddingVertical: 10,
    fontSize: 14,
    color: '#7A4055',
  },

  sendButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#C96F89',
    alignItems: 'center',
    justifyContent: 'center',
  },

  disabledSend: {
    backgroundColor: '#DDB8C3',
  },

  sendText: {
    color: '#FFFFFF',
    fontSize: 18,
  },

  disclaimer: {
    backgroundColor: '#FFF0F3',
    borderRadius: 18,
    padding: 15,
    marginTop: 18,
  },

  disclaimerText: {
    fontSize: 11,
    lineHeight: 17,
    color: '#8A747B',
    textAlign: 'center',
  },
});