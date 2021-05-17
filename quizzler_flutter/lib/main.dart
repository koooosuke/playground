import 'package:flutter/material.dart';

void main() {
  runApp(
    Quizzler(),
  );
}

class Quizzler extends StatefulWidget {
  @override
  _QuizzlerState createState() => _QuizzlerState();
}

class _QuizzlerState extends State<Quizzler> {
  final results = [];
  int questionIndex = 0;

  onAnswer(bool answer) {
    setState(() {
      results.add(answer == questions[questionIndex]['result']);
      questionIndex++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.black,
        body: SafeArea(
          child: Container(
            padding: EdgeInsets.symmetric(horizontal: 30),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Quizz(
                  question: questions[questionIndex]['question'],
                ),
                QuizzButton(
                  color: Colors.green,
                  text: 'True',
                  onAnswer: () {
                    print('good');
                    onAnswer(true);
                    print(results);
                  },
                ),
                QuizzButton(
                  color: Colors.red,
                  text: 'False',
                  onAnswer: () {
                    onAnswer(false);
                  },
                ),
                Row(
                  children: results
                      .map(
                        (result) => QuizzResult(
                          result: result,
                        ),
                      )
                      .toList(),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class Quizz extends StatelessWidget {
  const Quizz({Key key, this.question}) : super(key: key);

  final String question;

  @override
  Widget build(BuildContext context) {
    return Expanded(
      flex: 5,
      child: Center(
        child: Text(
          question,
          style: TextStyle(color: Colors.white, fontSize: 20.0),
          textAlign: TextAlign.center,
        ),
      ),
    );
  }
}

class QuizzButton extends StatelessWidget {
  const QuizzButton({
    Key key,
    this.color,
    this.text,
    this.onAnswer,
  }) : super(key: key);

  final Color color;
  final String text;
  final Function onAnswer;

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Container(
        margin: EdgeInsets.symmetric(vertical: 15),
        color: color,
        child: TextButton(
          onPressed: () {
            onAnswer();
          },
          child: Text(
            text,
            style: TextStyle(color: Colors.white),
          ),
        ),
      ),
    );
  }
}

class QuizzResult extends StatelessWidget {
  const QuizzResult({Key key, this.result}) : super(key: key);

  final bool result;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Icon(
        result ? Icons.check : Icons.clear,
        color: result ? Colors.green : Colors.red,
      ),
    );
  }
}

final questions = [
  {
    'question': 'Some cats are actually allergic to humans',
    'result': true,
  },
  {
    'question': 'Approximately one quarter of human bones are in the feet.',
    'result': true,
  },
  {
    'question': 'A slug\'s blood is green.',
    'result': true,
  },
  {
    'question': 'Buzz Aldrin\'s mother\'s maiden name was \"Moon\".',
    'result': true,
  },
  {
    'question': 'It is illegal to pee in the Ocean in Portugal.',
    'result': true,
  },
  {
    'question':
        'No piece of square dry paper can be folded in half more than 7 times.',
    'result': false,
  },
  {
    'question':
        'In London, UK, if you happen to die in the House of Parliament, you are technically entitled to a state funeral, because the building is considered too sacred a place.',
    'result': true,
  },
  {
    'question':
        'The loudest sound produced by any animal is 188 decibels. That animal is the African Elephant.',
    'result': false,
  },
  {
    'question':
        'The total surface area of two human lungs is approximately 70 square metres.',
    'result': true,
  },
  {
    'question': 'Google was originally called \"Backrub\".',
    'result': true,
  },
  {
    'question':
        'Chocolate affects a dog\'s heart and nervous system; a few ounces are enough to kill a small dog.',
    'result': true,
  },
  {
    'question':
        'In West Virginia, USA, if you accidentally hit an animal with your car, you are free to take it home to eat.',
    'result': true,
  }
];
