import 'package:flutter/material.dart';

class TextOutput extends StatelessWidget {
  final String text;
  TextOutput(this.text);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(
        text,
        style: TextStyle(
          fontSize: 36,
          color: Colors.blue
        ),
        textAlign: TextAlign.center,
      ),
    );
  }
}
