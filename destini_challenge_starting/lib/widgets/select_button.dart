import 'package:flutter/material.dart';

class SelectButton extends StatelessWidget {
  SelectButton({Key key, this.buttonColor, this.text, this.textColor})
      : super(key: key);

  final Color buttonColor;
  final String text;
  final Color textColor;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: buttonColor,
      child: Center(
        child: Text(
          text,
          style: TextStyle(
            color: textColor,
          ),
        ),
      ),
    );
  }
}
