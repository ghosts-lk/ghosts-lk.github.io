import 'package:flutter/material.dart';
import '../theme/app_theme.dart';

class Footer extends StatelessWidget {
  const Footer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(vertical: 40, horizontal: 20),
      decoration: const BoxDecoration(
        border: Border(
          top: BorderSide(color: AppTheme.neonGreen, width: 2),
        ),
      ),
      child: Column(
        children: [
          const Text(
            '© 2023 Ghost Protocol Private Limited. All rights reserved.',
            style: TextStyle(
              fontSize: 12,
              color: Colors.white,
            ),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 10),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Icon(
                Icons.lock,
                size: 12,
                color: Color(0xFF666666),
              ),
              const SizedBox(width: 5),
              Text(
                'All communications are end-to-end encrypted. SSL/TLS Protected.',
                style: TextStyle(
                  fontSize: 12,
                  color: Colors.grey[600],
                ),
                textAlign: TextAlign.center,
              ),
            ],
          ),
        ],
      ),
    );
  }
}