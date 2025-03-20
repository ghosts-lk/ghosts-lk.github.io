import 'package:flutter/material.dart';
import '../theme/app_theme.dart';

class AboutSection extends StatelessWidget {
  const AboutSection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(vertical: 60, horizontal: 20),
      color: AppTheme.darkSurface.withOpacity(0.95),
      child: Center(
        child: Container(
          constraints: const BoxConstraints(maxWidth: 1200),
          child: Column(
            children: [
              Text(
                'About Ghost Protocol',
                style: AppTheme.headingSmall,
                textAlign: TextAlign.center,
                semanticsLabel: 'About Ghost Protocol',
              ),
              const SizedBox(height: 20),
              Container(
                constraints: const BoxConstraints(maxWidth: 800),
                padding: const EdgeInsets.all(30),
                decoration: AppTheme.cardDecoration,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text(
                      'Founded in 2024, Ghost Protocol has emerged as a leading force in digital security and technology solutions. Our team of certified security experts and developers brings over 15 years of combined experience in cybersecurity, system administration, and software development.',
                      style: AppTheme.bodyText,
                    ),
                    const SizedBox(height: 20),
                    _buildFeatureItem('ISO 27001 Certified Security Practices'),
                    _buildFeatureItem('24/7 Emergency Response Team'),
                    _buildFeatureItem('End-to-End Encrypted Communications'),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildFeatureItem(String text) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 15),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            '✓',
            style: TextStyle(
              color: AppTheme.neonGreen,
              fontSize: 16,
            ),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Text(
              text,
              style: AppTheme.bodyText,
            ),
          ),
        ],
      ),
    );
  }
}