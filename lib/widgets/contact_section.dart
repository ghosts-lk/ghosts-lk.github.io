import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class ContactSection extends StatelessWidget {
  const ContactSection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final isSmallScreen = MediaQuery.of(context).size.width < 640;

    return Container(
      padding: const EdgeInsets.symmetric(vertical: 60, horizontal: 20),
      color: const Color(0xFF1A1A1A),
      decoration: const BoxDecoration(
        border: Border(
          top: BorderSide(
            color: Color(0xFF33FF33),
            width: 2,
          ),
        ),
      ),
      child: Column(
        children: [
          _buildSectionTitle(context),
          const SizedBox(height: 40),
          _buildContactCard(isSmallScreen),
        ],
      ),
    );
  }

  Widget _buildSectionTitle(BuildContext context) {
    return Column(
      children: [
        Text(
          'Contact Us',
          style: Theme.of(context).textTheme.displayMedium,
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 10),
        Container(
          width: 100,
          height: 2,
          decoration: BoxDecoration(
            gradient: LinearGradient(
              colors: [
                Colors.transparent,
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

  Widget _buildContactCard(bool isSmallScreen) {
    return Container(
      constraints: const BoxConstraints(maxWidth: 600),
      padding: const EdgeInsets.all(30),
      decoration: BoxDecoration(
        color: const Color(0xFF222222),
        border: Border.all(
          color: const Color(0xFF33FF33),
          width: 1,
        ),
      ),
      child: Stack(
        children: [
          // Border effect
          Positioned(
            top: 10,
            left: 10,
            right: 10,
            bottom: 10,
            child: Container(
              decoration: BoxDecoration(
                border: Border.all(
                  color: const Color(0xFF33FF33),
                  width: 2,
                ),
              ),
            ),
          ),
          // Content
          Column(
            children: [
              _buildContactItem(
                'Email:',
                'ghosts.lk@proton.me',
                'mailto:ghosts.lk@proton.me',
                isSmallScreen,
              ),
              const SizedBox(height: 20),
              _buildContactItem(
                'Phone:',
                '+94 710 555 055',
                'tel:+94710555055',
                isSmallScreen,
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildContactItem(
      String label, String value, String url, bool isSmallScreen) {
    return Flex(
      direction: isSmallScreen ? Axis.vertical : Axis.horizontal,
      mainAxisAlignment: isSmallScreen
          ? MainAxisAlignment.center
          : MainAxisAlignment.start,
      crossAxisAlignment:
          isSmallScreen ? CrossAxisAlignment.center : CrossAxisAlignment.center,
      children: [
        Text(
          label,
          style: const TextStyle(
            color: Color(0xFF33FF33),
            fontSize: 16,
            fontWeight: FontWeight.bold,
          ),
        ),
        SizedBox(width: isSmallScreen ? 0 : 10, height: isSmallScreen ? 10 : 0),
        GestureDetector(
          onTap: () async {
            final Uri uri = Uri.parse(url);
            if (await canLaunchUrl(uri)) {
              await launchUrl(uri);
            }
          },
          child: MouseRegion(
            cursor: SystemMouseCursors.click,
            child: Text(
              value,
              style: const TextStyle(
                color: Colors.white,
                fontSize: 16,
              ),
            ),
          ),
        ),
      ],
    );
  }
}