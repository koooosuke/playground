import 'package:flutter/material.dart';

class Result extends StatelessWidget {
  final int resultScore;

  Result(this.resultScore);

  String get resultText {
    String resultText;
    if (resultScore < 8) {
      resultText = 'You are awesome and inoccent!';
    } else if (resultScore < 12) {
      resultText = 'Pleaty likeable!';
    } else if (resultScore < 16) {
      resultText = 'You are ... storange?!';
    } else {
      resultText = 'You are bad!';
    }
    return resultText;
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(
        resultText,
        style: TextStyle(
          fontSize: 36,
          fontWeight: FontWeight.bold,
        ),
        textAlign: TextAlign.center,
      ),
    );
  }
}
