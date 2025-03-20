import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'home_screen.dart';
import 'theme/app_theme.dart';

class GhostProtocolApp extends StatelessWidget {
  const GhostProtocolApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Ghost Protocol',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
        colorScheme: ColorScheme.dark(
          primary: AppTheme.neonGreen,
          surface: AppTheme.darkBackground,
          background: AppTheme.darkBackground,
          onBackground: Colors.white,
        ),
        scaffoldBackgroundColor: AppTheme.darkBackground,
        textTheme: GoogleFonts.shareTechMonoTextTheme(
          Theme.of(context).textTheme.apply(
                bodyColor: Colors.white,
                displayColor: Colors.white,
              ),
        ),
      ),
      home: const HomeScreen(),
    );
  }
}