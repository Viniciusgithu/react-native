import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function QuizScreen() {

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const quizData = [
    { question: 'What is 1+1?', options: ['1', '2', '3', '4'], correctAnswer: '2' },
    { question: 'What is 2+2?', options: ['1', '2', '3', '4'], correctAnswer: '4' },
    { question: 'What is 3+3?', options: ['1', '2', '3', '6'], correctAnswer: '6' },
    { question: 'What is 4+4?', options: ['1', '2', '8', '4'], correctAnswer: '8' },
    { question: 'What is 5+5?', options: ['1', '10', '3', '4'], correctAnswer: '10' },
    { question: 'What is 6+6?', options: ['1', '2', '3', '12'], correctAnswer: '12' },
  ];

  function handleAnswer(SelectedAnswer) {
    const correctAnswer = quizData[currentQuestion]?.correctAnswer;

    // if (correctAnswer === SelectedAnswer) {
    //   alert('Correct Answer');
    // }

    return (

      <View style={styles.container}>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{quizData[currentQuestion]?.question}</Text>
          {quizData[currentQuestion]?.options.map((item, index) => {
            return (
              <TouchableOpacity style={styles.optionsContainer} key={index} onPress={() => handleAnswer(item)}>
                <Text style={styles.optionStyle}>{item}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5474F2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    questionContainer: {
      backgroundColor: '#54788',
      borderRadius: 5,
      padding: 10,
      margin: 10,
    },
    optionStyle: {
      color: '#fff',
      padding: 5,
      alignSelf: 'center',
      fontSize: 18,
    },
    optionsContainer: {
      borderColor: 'black',
      borderWidth: 2,
      marginTop: 15,
    },
    questionText: {
      fontSize: 24,
    },
  },
  );
}