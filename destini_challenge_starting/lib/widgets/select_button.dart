import 'package:flutter/material.dart';

class SelectButton extends StatelessWidget {
  SelectButton(
      {Key key, this.onPressed, this.buttonColor, this.text, this.textColor})
      : super(key: key);

  final void Function() onPressed;
  final Color buttonColor;
  final String text;
  final Color textColor;

  @override
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: () {
        onPressed();
      },
      child: Container(
        color: buttonColor,
        child: Center(
          child: Text(
            text,
            style: TextStyle(
              color: textColor,
            ),
          ),
        ),
      ),
    );
  }
}
