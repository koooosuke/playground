import 'package:flutter/material.dart';
import 'package:flutter_complete_guide/quiz.dart';
import 'package:flutter_complete_guide/result.dart';

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _MyAppState();
  }
}

class _MyAppState extends State<MyApp> {
  var _questionIndex = 0;
  var _totalScore = 0;

  void _resetQuiz() {
    setState(() {
      _questionIndex = 0;
      _totalScore = 0;
    });
  }

  void _answerQuestion(int score) {
    _totalScore += score;

    setState(() {
      _questionIndex++;
    });
  }

  @override
  Widget build(BuildContext context) {
    const questions = [
      {
        'questionText': 'What\'s your favorite color?',
        'answers': [
          {
            'text': 'Black',
            'score': 10,
          },
          {
            'text': 'Red',
            'score': 5,
          },
          {
            'text': 'Green',
            'score': 3,
          },
          {
            'text': 'White',
            'score': 1,
          },
        ]
      },
      {
        'questionText': 'What\'s your favorite animal?',
        'answers': [
          {
            'text': 'Rabbit',
            'score': 5,
          },
          {
            'text': 'Snake',
            'score': 3,
          },
          {
            'text': 'Elephant',
            'score': 1,
          },
          {
            'text': 'Lion',
            'score': 10,
          },
        ]
      },
      {
        'questionText': 'What\'s your favorite instructor?',
        'answers': [
          {
            'text': 'Max',
            'score': 4,
          },
          {
            'text': 'Max',
            'score': 7,
          },
          {
            'text': 'Max',
            'score': 3,
          },
          {
            'text': 'Max',
            'score': 10,
          },
        ],
      },
    ];
    return MaterialApp(
      home: Scaffold(
          appBar: AppBar(
            title: Text('My First App'),
          ),
          body: _questionIndex < questions.length
              ? Quiz(
                  questionIndex: _questionIndex,
                  questions: questions,
                  answerQuestion: _answerQuestion,
                )
              : Result(_totalScore, _resetQuiz)),
    );
  }
}
