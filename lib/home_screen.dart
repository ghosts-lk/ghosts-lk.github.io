import 'package:flutter/material.dart';
import 'package:ghost_protocol/app_theme.dart';
import 'package:ghost_protocol/widgets/nav_bar.dart';
import 'package:ghost_protocol/widgets/hero_section.dart';
import 'package:ghost_protocol/widgets/features_section.dart';
import 'package:ghost_protocol/widgets/footer.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  bool isMenuOpen = false;

  void toggleMenu() {
    setState(() {
      isMenuOpen = !isMenuOpen;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        color: AppTheme.darkBackground,
        child: SingleChildScrollView(
          child: Column(
            children: [
              NavBar(
                isMenuOpen: isMenuOpen,
                toggleMenu: toggleMenu,
              ),
              const HeroSection(),
              const FeaturesSection(),
              const Footer(),
            ],
          ),
        ),
      ),
    );
  }
}