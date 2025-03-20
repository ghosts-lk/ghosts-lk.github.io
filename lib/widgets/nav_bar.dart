import 'package:flutter/material.dart';
import 'dart:ui';

class NavBar extends StatelessWidget {
  const NavBar({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final isSmallScreen = MediaQuery.of(context).size.width < 640;

    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFF1A1A1A).withOpacity(0.95),
        border: const Border(
          bottom: BorderSide(
            color: Color(0xFF33FF33),
            width: 2,
          ),
        ),
      ),
      child: ClipRect(
        child: BackdropFilter(
          filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 40, vertical: 20),
            child: isSmallScreen
                ? Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      _buildLogo(),
                      const SizedBox(height: 15),
                    ],
                  )
                : Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      _buildLogo(),
                      _buildNavLinks(),
                    ],
                  ),
          ),
        ),
      ),
    );
  }

  Widget _buildLogo() {
    return Text(
      'GHOST PROTOCOL',
      style: TextStyle(
        fontSize: 24,
        color: const Color(0xFF33FF33),
        fontWeight: FontWeight.bold,
        shadows: [
          Shadow(
            offset: const Offset(2, 2),
            color: Colors.black,
            blurRadius: 0,
          ),
        ],
      ),
    );
  }

  Widget _buildNavLinks() {
    return Row(
      children: [
        _buildNavLink('ABOUT', '#about'),
        const SizedBox(width: 30),
        _buildNavLink('FEATURES', '#features'),
        const SizedBox(width: 30),
        _buildNavLink('CONTACT', '#contact'),
      ],
    );
  }

  Widget _buildNavLink(String text, String href) {
    return NavLink(text: text, href: href);
  }
}

class NavLink extends StatefulWidget {
  final String text;
  final String href;

  const NavLink({
    Key? key,
    required this.text,
    required this.href,
  }) : super(key: key);

  @override
  State<NavLink> createState() => _NavLinkState();
}

class _NavLinkState extends State<NavLink> {
  bool isHovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => isHovered = true),
      onExit: (_) => setState(() => isHovered = false),
      child: GestureDetector(
        onTap: () {
          // Handle navigation
        },
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              widget.text,
              style: TextStyle(
                color: isHovered ? const Color(0xFF33FF33) : Colors.white,
                fontSize: 16,
              ),
            ),
            const SizedBox(height: 4),
            AnimatedContainer(
              duration: const Duration(milliseconds: 300),
              height: 2,
              width: isHovered ? 100 : 0,
              color: const Color(0xFF33FF33),
            ),
          ],
        ),
      ),
    );
  }
}