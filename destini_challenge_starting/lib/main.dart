import 'package:destini_challenge_starting/widgets/select_button.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        body: DestiniApp(),
      ),
    ),
  );
}

class DestiniApp extends StatefulWidget {
  @override
  _DestiniAppState createState() => _DestiniAppState();
}

class _DestiniAppState extends State<DestiniApp> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      bottom: false,
      top: false,
      child: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage('images/background.png'),
            fit: BoxFit.cover,
          ),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Expanded(
              flex: 6,
              child: Center(
                child: Text(
                  'question',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 30,
                  ),
                ),
              ),
            ),
            Expanded(
              child: SelectButton(
                buttonColor: Colors.red,
                text: 'button',
                textColor: Colors.white,
              ),
            ),
            Expanded(
              child: SelectButton(
                buttonColor: Colors.blue,
                text: 'button',
                textColor: Colors.white,
              ),
            )
          ],
        ),
      ),
    );
  }
}
