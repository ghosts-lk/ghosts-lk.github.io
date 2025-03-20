import 'package:flutter/material.dart';
import 'package:ghost_protocol/app_theme.dart';

class NavBar extends StatelessWidget {
  final bool isMenuOpen;
  final VoidCallback toggleMenu;

  const NavBar({
    Key? key,
    required this.isMenuOpen,
    required this.toggleMenu,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final isMobile = screenWidth <= AppTheme.mobileBreakpoint;

    return Container(
      padding: const EdgeInsets.all(AppTheme.spacingM),
      decoration: const BoxDecoration(
        border: Border(
          bottom: BorderSide(
            color: AppTheme.primaryGreen,
            width: 2.0,
          ),
        ),
      ),
      child: isMobile
          ? _buildMobileNavBar(context)
          : _buildDesktopNavBar(context),
    );
  }

  Widget _buildDesktopNavBar(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        _buildLogo(),
        _buildNavLinks(),
      ],
    );
  }

  Widget _buildMobileNavBar(BuildContext context) {
    return Column(
      children: [
        _buildLogo(),
        const SizedBox(height: AppTheme.spacingM),
        _buildNavLinks(),
      ],
    );
  }

  Widget _buildLogo() {
    return Text(
      'GHOST PROTOCOL',
      style: TextStyle(
        fontSize: AppTheme.fontSizeXXL,
        color: AppTheme.primaryGreen,
        fontFamily: 'PressStart2P',
        shadows: [
          Shadow(
            offset: const Offset(2.0, 2.0),
            blurRadius: 0.0,
            color: AppTheme.black,
          ),
        ],
      ),
    );
  }

  Widget _buildNavLinks() {
    return LayoutBuilder(
      builder: (context, constraints) {
        final isMobile = constraints.maxWidth <= AppTheme.mobileBreakpoint;

        return Flex(
          direction: isMobile ? Axis.vertical : Axis.horizontal,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            _buildNavLink('About', '#about'),
            SizedBox(width: isMobile ? 0 : AppTheme.spacingM, height: isMobile ? AppTheme.spacingM : 0),
            _buildNavLink('Features', '#features'),
            SizedBox(width: isMobile ? 0 : AppTheme.spacingM, height: isMobile ? AppTheme.spacingM : 0),
            _buildNavLink('Contact', '#contact'),
          ],
        );
      },
    );
  }

  Widget _buildNavLink(String title, String href) {
    return MouseRegion(
      cursor: SystemMouseCursors.click,
      child: GestureDetector(
        onTap: () {
          // Handle navigation
        },
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
  bool isHovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => isHovered = true),
      onExit: (_) => setState(() => isHovered = false),
      child: Text(
        widget.title,
        style: TextStyle(
          color: isHovered ? AppTheme.primaryGreen : AppTheme.white,
          fontFamily: 'PressStart2P',
          fontSize: AppTheme.fontSizeM,
          decoration: TextDecoration.none,
        ),
      ),
    );
  }
}