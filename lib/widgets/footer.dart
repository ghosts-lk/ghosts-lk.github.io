import 'package:flutter/material.dart';

class Footer extends StatelessWidget {
  const Footer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 40, horizontal: 20),
      decoration: const BoxDecoration(
        border: Border(
          top: BorderSide(
            color: Color(0xFF33FF33),
            width: 2,
          ),
        ),
      ),
      child: const Center(
        child: Text(
          '© 2023 Ghost Protocol Private Limited. All rights reserved.',
          style: TextStyle(
            color: Colors.white,
            fontSize: 12,
          ),
          textAlign: TextAlign.center,
        ),
      ),
    );
  }
}