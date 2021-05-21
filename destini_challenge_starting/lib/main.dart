import 'package:destini_challenge_starting/story_brain.dart';
import 'package:destini_challenge_starting/widgets/select_button.dart';
import 'package:flutter/material.dart';

StoryBrain storyBrain = StoryBrain();

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
  void onPressed() {
    setState(() {
      storyBrain.nextStory();
    });
  }

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
                  storyBrain.getStoryTitle(),
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 20,
                  ),
                ),
              ),
            ),
            Expanded(
              child: SelectButton(
                onPressed: onPressed,
                buttonColor: Colors.red,
                text: storyBrain.getStoryChoice1(),
                textColor: Colors.white,
              ),
            ),
            Expanded(
              child: SelectButton(
                onPressed: onPressed,
                buttonColor: Colors.blue,
                text: storyBrain.getStoryChoice2(),
                textColor: Colors.white,
              ),
            )
          ],
        ),
      ),
    );
  }
}
