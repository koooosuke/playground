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
  final results = [true];

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
                  question: 'Some cats are actually allergic to humans',
                ),
                QuizzButton(
                  color: Colors.green,
                  text: 'True',
                ),
                QuizzButton(
                  color: Colors.red,
                  text: 'False',
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
  const QuizzButton({Key key, this.color, this.text}) : super(key: key);

  final Color color;
  final String text;

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Container(
        margin: EdgeInsets.symmetric(vertical: 15),
        color: color,
        child: TextButton(
          onPressed: () {},
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
        result ? Icons.check : Icons.ballot,
        color: result ? Colors.green : Colors.red,
      ),
    );
  }
}
