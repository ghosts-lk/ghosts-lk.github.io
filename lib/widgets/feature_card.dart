import 'package:flutter/material.dart';
import 'package:ghost_protocol/app_theme.dart';

class FeatureCard extends StatelessWidget {
  final String imageUrl;
  final String title;
  final String description;

  const FeatureCard({
    Key? key,
    required this.imageUrl,
    required this.title,
    required this.description,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(AppTheme.spacingM),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Image.network(
            imageUrl,
            width: 100,
            height: 100,
            fit: BoxFit.contain,
          ),
          const SizedBox(height: AppTheme.spacingM),
          Text(
            title,
            style: TextStyle(
              fontFamily: 'PressStart2P',
              fontSize: AppTheme.fontSizeM,
              color: AppTheme.primaryGreen,
            ),
          ),
          const SizedBox(height: AppTheme.spacingS),
          Text(
            description,
            style: TextStyle(
              fontFamily: 'PressStart2P',
              fontSize: AppTheme.fontSizeS,
              color: AppTheme.white,
            ),
            textAlign: TextAlign.center,
          ),
        ],
      ),
    );
  }
}