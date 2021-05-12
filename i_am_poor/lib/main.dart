import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: Scaffold(
      appBar: AppBar(
        title: Text('I Am Poor'),
        backgroundColor: Colors.blueGrey[900],
      ),
      backgroundColor: Colors.blueGrey,
      body: Center(
        child: Image(
          image: NetworkImage(
              'https://icotto.k-img.com/system/press_eye_catches/000/003/602/977703324c299ddf5334cd2824c4bb90bc4c2c24.jpeg?1468399594'),
        ),
      ),
    ),
  ));
}
