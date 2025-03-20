import 'package:flutter/material.dart';
import '../theme/app_theme.dart';

class HeroSection extends StatelessWidget {
  const HeroSection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final isMobile = screenWidth <= 640;

    return Container(
      width: double.infinity,
      padding: EdgeInsets.fromLTRB(
        40,
        isMobile ? 80 : 100,
        40,
        isMobile ? 40 : 60
      ),
      constraints: const BoxConstraints(
        minHeight: 90 * 0.9,
      ),
      child: Center(
        child: Container(
          constraints: const BoxConstraints(maxWidth: 1200),
          alignment: isMobile ? Alignment.center : Alignment.centerLeft,
          child: Column(
            crossAxisAlignment: isMobile ? CrossAxisAlignment.center : CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                'Secure. Stealthy. Digital.',
                style: AppTheme.headingLarge.copyWith(
                  fontSize: isMobile ? 36 : 48,
                ),
                textAlign: isMobile ? TextAlign.center : TextAlign.left,
                semanticsLabel: 'Secure. Stealthy. Digital.',
              ),
              const SizedBox(height: 30),
              Container(
                constraints: const BoxConstraints(maxWidth: 600),
                child: Text(
                  'Enter the digital realm where security meets style. We are Sri Lanka\'s premier cybersecurity and digital solutions provider, offering enterprise-grade security with cutting-edge innovation.',
                  style: AppTheme.bodyText.copyWith(
                    fontSize: isMobile ? 16 : 18,
                  ),
                  textAlign: isMobile ? TextAlign.center : TextAlign.left,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}