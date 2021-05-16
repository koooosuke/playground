import 'package:flutter/material.dart';
import 'package:audioplayers/audio_cache.dart';

void main() => runApp(XylophoneApp());

class XylophoneApp extends StatelessWidget {
  final tiles = [
    MapEntry(1, Colors.red),
    MapEntry(2, Colors.orange),
    MapEntry(3, Colors.yellow),
    MapEntry(4, Colors.greenAccent),
    MapEntry(5, Colors.green),
    MapEntry(6, Colors.blueAccent),
    MapEntry(7, Colors.purple),
  ];

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.black,
        body: SafeArea(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: tiles
                .map(
                  (tile) => XylophoneTile(
                    noteNumber: tile.key,
                    tileColor: tile.value,
                  ),
                )
                .toList(),
          ),
        ),
      ),
    );
  }
}

class XylophoneTile extends StatelessWidget {
  const XylophoneTile({Key key, this.noteNumber, this.tileColor})
      : super(key: key);

  final int noteNumber;
  final Color tileColor;

  clickTile() {
    final AudioCache player = AudioCache();
    player.play('note$noteNumber.wav');
  }

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Container(
        color: tileColor,
        child: TextButton(
          onPressed: clickTile,
          child: null,
        ),
      ),
    );
  }
}
