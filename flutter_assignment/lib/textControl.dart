import 'package:flutter/material.dart';

import './textOutput.dart';

class TextControl extends StatefulWidget {
  @override
  _TextControlState createState() => _TextControlState();
}

class _TextControlState extends State<TextControl> {
  String _mainText = 'This is the first assignment!';

  void changeMainText() {
    setState(() {
      _mainText = 'Change Text!';
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        RaisedButton(
          onPressed: changeMainText,
          color: Colors.orange,
          textColor: Colors.white,
          child: Text('Click Button!'),
        ),
        TextOutput(_mainText)
      ],
    );
  }
}
