import 'package:flutter/material.dart';
import 'dart:math';

void main() {
  return runApp(
    MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.red,
        appBar: AppBar(
          title: Text('Dicee'),
          backgroundColor: Colors.red,
        ),
        body: DicePage(),
      ),
    ),
  );
}

class DicePage extends StatefulWidget {
  @override
  _DicePageState createState() => _DicePageState();
}

class _DicePageState extends State<DicePage> {
  int _leftDiceNumber = 1;
  int _rightDiceNumber = 1;
  final _diceMaxNumber = 6;

  _changeDice() {
    setState(() {
      _leftDiceNumber = Random().nextInt(_diceMaxNumber - 1) + 1;
      _rightDiceNumber = Random().nextInt(_diceMaxNumber - 1) + 1;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Row(
        children: <Widget>[
          DiceButton(
            diceNumber: _leftDiceNumber,
            changeDice: _changeDice,
          ),
          DiceButton(
            diceNumber: _rightDiceNumber,
            changeDice: _changeDice,
          )
        ],
      ),
    );
  }
}

class DiceButton extends StatelessWidget {
  const DiceButton({Key key, this.diceNumber, this.changeDice})
      : super(key: key);

  final int diceNumber;
  final Function changeDice;

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: TextButton(
        onPressed: changeDice,
        child: Image.asset('images/dice$diceNumber.png'),
      ),
    );
  }
}
