import 'package:flutter/material.dart';
import '../theme/app_theme.dart';

class NavBar extends StatefulWidget {
  final Function(String) onSectionTap;

  const NavBar({
    Key? key,
    required this.onSectionTap,
  }) : super(key: key);

  @override
  State<NavBar> createState() => _NavBarState();
}

class _NavBarState extends State<NavBar> {
  bool _isMenuOpen = false;

  void _toggleMenu() {
    setState(() {
      _isMenuOpen = !_isMenuOpen;
    });
  }

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final isMobile = screenWidth <= 640;

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 40, vertical: 20),
      decoration: BoxDecoration(
        border: const Border(
          bottom: BorderSide(color: AppTheme.neonGreen, width: 2),
        ),
        color: AppTheme.darkBackground.withOpacity(0.95),
      ),
      child: isMobile
        ? _buildMobileNavBar()
        : _buildDesktopNavBar(),
    );
  }

  Widget _buildDesktopNavBar() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        _buildLogo(),
        Row(
          children: [
            _buildNavLink('About', 'about'),
            const SizedBox(width: 30),
            _buildNavLink('Features', 'features'),
            const SizedBox(width: 30),
            _buildNavLink('Contact', 'contact'),
          ],
        ),
      ],
    );
  }

  Widget _buildMobileNavBar() {
    return Column(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            _buildLogo(),
            IconButton(
              icon: Icon(
                _isMenuOpen ? Icons.close : Icons.menu,
                color: Colors.white,
              ),
              onPressed: _toggleMenu,
              tooltip: 'Toggle menu',
            ),
          ],
        ),
        if (_isMenuOpen)
          Column(
            children: [
              const SizedBox(height: 15),
              _buildNavLink('About', 'about'),
              const SizedBox(height: 15),
              _buildNavLink('Features', 'features'),
              const SizedBox(height: 15),
              _buildNavLink('Contact', 'contact'),
            ],
          ),
      ],
    );
  }

  Widget _buildLogo() {
    return Text(
      'GHOST PROTOCOL',
      style: TextStyle(
        fontSize: 24,
        color: AppTheme.neonGreen,
        fontWeight: FontWeight.bold,
        shadows: const [
          Shadow(
            color: Colors.black,
            offset: Offset(2, 2),
            blurRadius: 0,
          ),
        ],
      ),
      semanticsLabel: 'Ghost Protocol Logo',
    );
  }

  Widget _buildNavLink(String title, String sectionId) {
    return InkWell(
      onTap: () => widget.onSectionTap(sectionId),
      hoverColor: Colors.transparent,
      child: MouseRegion(
        cursor: SystemMouseCursors.click,
        child: _NavLink(title: title),
      ),
    );
  }
}

class _NavLink extends StatefulWidget {
  final String title;

  const _NavLink({
    Key? key,
    required this.title,
  }) : super(key: key);

  @override
  State<_NavLink> createState() => _NavLinkState();
}

class _NavLinkState extends State<_NavLink> {
  bool _isHovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => _isHovered = true),
      onExit: (_) => setState(() => _isHovered = false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 300),
        padding: const EdgeInsets.symmetric(vertical: 8),
        decoration: BoxDecoration(
          border: Border(
            bottom: BorderSide(
              color: _isHovered ? AppTheme.neonGreen : Colors.transparent,
              width: 2,
            ),
          ),
        ),
        child: Text(
          widget.title,
          style: TextStyle(
            color: _isHovered ? AppTheme.neonGreen : Colors.white,
            fontSize: 16,
          ),
        ),
      ),
    );
  }
}