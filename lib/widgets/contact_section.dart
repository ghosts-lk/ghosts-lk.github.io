import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import '../theme/app_theme.dart';

class ContactSection extends StatefulWidget {
  const ContactSection({Key? key}) : super(key: key);

  @override
  State<ContactSection> createState() => _ContactSectionState();
}

class _ContactSectionState extends State<ContactSection> {
  bool _isHovered = false;
  bool _isEmailHovered = false;
  bool _isPhoneHovered = false;

  Future<void> _launchEmail() async {
    final Uri emailUri = Uri(
      scheme: 'mailto',
      path: 'ghosts.lk@proton.me',
    );

    if (await canLaunchUrl(emailUri)) {
      await launchUrl(emailUri);
    }
  }

  Future<void> _makePhoneCall() async {
    final Uri phoneUri = Uri(
      scheme: 'tel',
      path: '+94710555055',
    );

    if (await canLaunchUrl(phoneUri)) {
      await launchUrl(phoneUri);
    }
  }

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final isMobile = screenWidth <= 640;

    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(vertical: 60, horizontal: 20),
      color: AppTheme.darkBackground,
      decoration: const BoxDecoration(
        border: Border(
          top: BorderSide(color: AppTheme.neonGreen, width: 2),
        ),
      ),
      child: Column(
        children: [
          Text(
            'Contact Us',
            style: AppTheme.headingMedium,
            textAlign: TextAlign.center,
            semanticsLabel: 'Contact Us',
          ),
          const SizedBox(height: 40),
          MouseRegion(
            onEnter: (_) => setState(() => _isHovered = true),
            onExit: (_) => setState(() => _isHovered = false),
            child: AnimatedContainer(
              duration: const Duration(milliseconds: 400),
              curve: Curves.easeOutQuart,
              constraints: const BoxConstraints(maxWidth: 600),
              padding: const EdgeInsets.all(35),
              decoration: _isHovered
                ? AppTheme.cardHoverDecoration
                : AppTheme.cardDecoration,
              transform: _isHovered
                ? (Matrix4.identity()..translate(0, -8))
                : Matrix4.identity(),
              child: Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Text(
                        'Email:',
                        style: TextStyle(
                          color: AppTheme.neonGreen,
                          fontWeight: FontWeight.bold,
                          fontSize: 16,
                        ),
                      ),
                      const SizedBox(width: 10),
                      MouseRegion(
                        onEnter: (_) => setState(() => _isEmailHovered = true),
                        onExit: (_) => setState(() => _isEmailHovered = false),
                        child: GestureDetector(
                          onTap: _launchEmail,
                          child: Text(
                            'ghosts.lk@proton.me',
                            style: TextStyle(
                              color: _isEmailHovered ? AppTheme.neonGreen : Colors.white,
                              fontSize: 16,
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 20),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Text(
                        'Phone:',
                        style: TextStyle(
                          color: AppTheme.neonGreen,
                          fontWeight: FontWeight.bold,
                          fontSize: 16,
                        ),
                      ),
                      const SizedBox(width: 10),
                      MouseRegion(
                        onEnter: (_) => setState(() => _isPhoneHovered = true),
                        onExit: (_) =>  setState(() => _isPhoneHovered = false),
                        child: GestureDetector(
                          onTap: _makePhoneCall,
                          child: Text(
                            '+94 710 555 055',
                            style: TextStyle(
                              color: _isPhoneHovered ? AppTheme.neonGreen : Colors.white,
                              fontSize: 16,
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}