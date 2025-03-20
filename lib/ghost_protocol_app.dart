import 'package:flutter/material.dart';
import 'package:ghost_protocol/app_theme.dart';
import 'package:ghost_protocol/home_screen.dart';
import 'package:google_fonts/google_fonts.dart';

class GhostProtocolApp extends StatelessWidget {
  const GhostProtocolApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Ghost Protocol',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primaryColor: AppTheme.primaryGreen,
        scaffoldBackgroundColor: AppTheme.darkBackground,
        textTheme: TextTheme(
          displayLarge: GoogleFonts.pressStart2p(
            color: AppTheme.primaryGreen,
            fontSize: 24,
            shadows: [
              const Shadow(
                offset: Offset(2.0, 2.0),
                blurRadius: 0.0,
                color: Colors.black,
              ),
            ],
          ),
          displayMedium: GoogleFonts.pressStart2p(
            color: AppTheme.primaryGreen,
            fontSize: 20,
            shadows: [
              const Shadow(
                offset: Offset(2.0, 2.0),
                blurRadius: 0.0,
                color: Colors.black,
              ),
            ],
          ),
          headlineMedium: GoogleFonts.pressStart2p(
            color: AppTheme.primaryGreen,
            fontSize: 16,
          ),
          bodyLarge: GoogleFonts.pressStart2p(
            color: Colors.white,
            fontSize: 14,
          ),
          bodyMedium: GoogleFonts.pressStart2p(
            color: Colors.white,
            fontSize: 12,
          ),
          bodySmall: GoogleFonts.pressStart2p(
            color: Colors.white,
            fontSize: 10,
          ),
        ),
        colorScheme: ColorScheme.dark(
          primary: AppTheme.primaryGreen,
          secondary: AppTheme.primaryGreen,
          background: AppTheme.darkBackground,
          surface: AppTheme.darkSurface,
        ),
      ),
      home: const HomeScreen(),
    );
  }
}