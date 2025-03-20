import 'package:flutter/material.dart';
import 'widgets/nav_bar.dart';
import 'widgets/hero_section.dart';
import 'widgets/about_section.dart';
import 'widgets/services_section.dart';
import 'widgets/contact_section.dart';
import 'widgets/footer.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final ScrollController _scrollController = ScrollController();

  // Scroll to section
  void scrollToSection(String sectionId) {
    double offset = 0;

    switch (sectionId) {
      case 'about':
        offset = 700;
        break;
      case 'features':
        offset = 1200;
        break;
      case 'contact':
        offset = 2500;
        break;
    }

    _scrollController.animateTo(
      offset,
      duration: const Duration(milliseconds: 500),
      curve: Curves.easeInOut,
    );
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          SingleChildScrollView(
            controller: _scrollController,
            child: Column(
              children: [
                const SizedBox(height: 80), // Space for fixed navbar
                const HeroSection(),
                const AboutSection(),
                const ServicesSection(),
                const ContactSection(),
                const Footer(),
              ],
            ),
          ),
          NavBar(onSectionTap: scrollToSection),
        ],
      ),
    );
  }
}