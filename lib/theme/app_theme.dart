import 'package:flutter/material.dart';

class AppTheme {
  // Colors
  static const Color neonGreen = Color(0xFF33FF33);
  static const Color darkBackground = Color(0xFF1A1A1A);
  static const Color darkSurface = Color(0xFF222222);
  static const Color darkBorder = Color(0x3333FF33); // 20% opacity

  // Text Styles
  static TextStyle headingLarge = const TextStyle(
    fontSize: 48,
    color: neonGreen,
    fontWeight: FontWeight.bold,
    letterSpacing: 1,
    shadows: [
      Shadow(
        color: Colors.black,
        offset: Offset(3, 3),
        blurRadius: 0,
      ),
      Shadow(
        color: Color(0x4D33FF33), // 30% opacity
        offset: Offset(0, 0),
        blurRadius: 20,
      ),
    ],
  );

  static TextStyle headingMedium = const TextStyle(
    fontSize: 32,
    color: neonGreen,
    fontWeight: FontWeight.bold,
    letterSpacing: 0.5,
    shadows: [
      Shadow(
        color: Colors.black,
        offset: Offset(2, 2),
        blurRadius: 0,
      ),
    ],
  );

  static TextStyle headingSmall = const TextStyle(
    fontSize: 24,
    color: neonGreen,
    fontWeight: FontWeight.bold,
    letterSpacing: 0.5,
  );

  static const TextStyle bodyText = TextStyle(
    fontSize: 16,
    color: Colors.white,
    letterSpacing: 0.5,
    height: 1.8,
  );

  static const TextStyle serviceTitle = TextStyle(
    fontSize: 22,
    color: neonGreen,
    fontWeight: FontWeight.bold,
    letterSpacing: 0.5,
  );

  static const TextStyle serviceDescription = TextStyle(
    fontSize: 14,
    color: Color(0xFF999999),
    height: 1.6,
  );

  static const TextStyle servicePrice = TextStyle(
    fontSize: 26,
    color: Colors.white,
    fontWeight: FontWeight.w800,
    letterSpacing: 0.5,
  );

  static const TextStyle servicePriceCurrency = TextStyle(
    fontSize: 14,
    color: Color(0xFF666666),
  );

  // Decorations
  static BoxDecoration cardDecoration = BoxDecoration(
    color: darkSurface.withOpacity(0.95),
    borderRadius: BorderRadius.circular(8),
    border: Border.all(color: darkBorder),
  );

  static BoxDecoration cardHoverDecoration = BoxDecoration(
    color: const Color(0xFF262626).withOpacity(0.98),
    borderRadius: BorderRadius.circular(8),
    border: Border.all(color: neonGreen.withOpacity(0.6)),
    boxShadow: [
      BoxShadow(
        color: neonGreen.withOpacity(0.15),
        blurRadius: 40,
        offset: const Offset(0, 12),
      ),
      BoxShadow(
        color: neonGreen.withOpacity(0.1),
        blurRadius: 20,
        offset: const Offset(0, 0),
      ),
    ],
  );
}