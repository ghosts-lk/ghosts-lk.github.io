import 'package:flutter/material.dart';
import 'package:ghost_protocol/app_theme.dart';

class Footer extends StatelessWidget {
  const Footer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(AppTheme.spacingXL),
      decoration: const BoxDecoration(
        border: Border(
          top: BorderSide(
            color: AppTheme.primaryGreen,
            width: 2.0,
          ),
        ),
      ),
      child: Center(
        child: Text(
          '© 2024 Ghost Protocol. All rights reserved.',
          style: TextStyle(
            fontFamily: 'PressStart2P',
            fontSize: AppTheme.fontSizeS,
            color: AppTheme.white,
          ),
          textAlign: TextAlign.center,
        ),
      ),
    );
  }
}