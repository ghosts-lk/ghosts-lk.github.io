import 'package:flutter/material.dart';

class HeroSection extends StatelessWidget {
  const HeroSection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final isSmallScreen = MediaQuery.of(context).size.width < 640;
    final screenSize = MediaQuery.of(context).size;

    return Container(
      width: double.infinity,
      constraints: BoxConstraints(
        minHeight: screenSize.height * 0.9,
      ),
      padding: EdgeInsets.symmetric(
        horizontal: isSmallScreen ? 20 : 40,
        vertical: isSmallScreen ? 80 : 100,
      ),
      child: Center(
        child: Container(
          constraints: const BoxConstraints(maxWidth: 1200),
          width: double.infinity,
          child: Column(
            crossAxisAlignment: isSmallScreen
                ? CrossAxisAlignment.center
                : CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              _buildHeading(context, isSmallScreen),
              const SizedBox(height: 30),
              _buildSubheading(isSmallScreen),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildHeading(BuildContext context, bool isSmallScreen) {
    return Column(
      crossAxisAlignment:
          isSmallScreen ? CrossAxisAlignment.center : CrossAxisAlignment.start,
      children: [
        Text(
          'Secure. Stealthy. Digital.',
          style: Theme.of(context).textTheme.displayLarge?.copyWith(
                fontSize: isSmallScreen ? 36 : 48,
                letterSpacing: 1,
                height: 1.2,
              ),
          textAlign: isSmallScreen ? TextAlign.center : TextAlign.start,
        ),
        const SizedBox(height: 10),
        Container(
          height: 2,
          width: isSmallScreen ? 200 : 300,
          decoration: BoxDecoration(
            gradient: LinearGradient(
              colors: [
                const Color(0xFF33FF33),
                const Color(0xFF33FF33),
                Colors.transparent,
              ],
              stops: const [0.0, 0.5, 1.0],
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildSubheading(bool isSmallScreen) {
    return Container(
      constraints: const BoxConstraints(maxWidth: 600),
      child: Text(
        'Enter the digital realm where security meets style.',
        style: TextStyle(
          fontSize: isSmallScreen ? 16 : 18,
          color: Colors.white.withOpacity(0.9),
          height: 1.8,
        ),
        textAlign: isSmallScreen ? TextAlign.center : TextAlign.start,
      ),
    );
  }
}