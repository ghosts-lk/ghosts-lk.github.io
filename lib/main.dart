import 'package:flutter/material.dart';
import 'package:flutter_web_plugins/flutter_web_plugins.dart';
import 'package:google_fonts/google_fonts.dart';
import 'ghost_protocol_app.dart';

void main() {
  // Configure the URL strategy for web
  setUrlStrategy(PathUrlStrategy());
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Ghost Protocol',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primaryColor: const Color(0xFF33FF33),
        scaffoldBackgroundColor: const Color(0xFF1A1A1A),
        textTheme: GoogleFonts.shareTechMonoTextTheme(
          Theme.of(context).textTheme.copyWith(
                displayLarge: TextStyle(
                  color: const Color(0xFF33FF33),
                  fontSize: 48,
                  fontWeight: FontWeight.bold,
                  shadows: [
                    const Shadow(
                      offset: Offset(3, 3),
                      color: Colors.black,
                      blurRadius: 0,
                    ),
                    const Shadow(
                      color: Color.fromRGBO(51, 255, 51, 0.3),
                      blurRadius: 20,
                    ),
                  ],
                ),
                displayMedium: const TextStyle(
                  color: Color(0xFF33FF33),
                  fontSize: 32,
                  fontWeight: FontWeight.bold,
                  shadows: [
                    Shadow(
                      offset: Offset(2, 2),
                      color: Colors.black,
                      blurRadius: 0,
                    ),
                  ],
                ),
                titleLarge: const TextStyle(
                  color: Color(0xFF33FF33),
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                  shadows: [
                    Shadow(
                      offset: Offset(2, 2),
                      color: Colors.black,
                      blurRadius: 0,
                    ),
                  ],
                ),
                bodyLarge: const TextStyle(
                  color: Color.fromRGBO(255, 255, 255, 0.9),
                  fontSize: 18,
                  height: 1.8,
                ),
                bodyMedium: const TextStyle(
                  color: Colors.white,
                  fontSize: 16,
                ),
                bodySmall: const TextStyle(
                  color: Color(0xFF999999),
                  fontSize: 14,
                  height: 1.6,
                ),
              ),
        ),
        colorScheme: ColorScheme.fromSwatch().copyWith(
          secondary: const Color(0xFF33FF33),
          background: const Color(0xFF1A1A1A),
        ),
      ),
      home: const GhostProtocolApp(),
    );
  }
}