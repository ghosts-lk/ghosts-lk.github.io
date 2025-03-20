import 'package:flutter/material.dart';
import 'package:ghost_protocol/app_theme.dart';

class HeroSection extends StatelessWidget {
  const HeroSection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final isMobile = screenWidth <= AppTheme.tabletBreakpoint;

    return isMobile
        ? _buildMobileLayout(context)
        : _buildDesktopLayout(context);
  }

  Widget _buildDesktopLayout(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Expanded(
          child: _buildHeroContent(),
        ),
        const SizedBox(width: AppTheme.spacingM),
        Expanded(
          child: _buildHeroImage(),
        ),
      ],
    );
  }

  Widget _buildMobileLayout(BuildContext context) {
    return Column(
      children: [
        _buildHeroContent(),
        _buildHeroImage(),
      ],
    );
  }

  Widget _buildHeroContent() {
    return Container(
      padding: const EdgeInsets.all(AppTheme.spacingXXL),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          _buildHeroTitle(),
          const SizedBox(height: AppTheme.spacingM),
          Text(
            'Enter the digital realm where security meets style.',
            style: TextStyle(
              fontFamily: 'PressStart2P',
              fontSize: AppTheme.fontSizeL,
              color: AppTheme.white,
              height: 1.6,
            ),
          ),
          const SizedBox(height: AppTheme.spacingL),
          _StartMissionButton(),
        ],
      ),
    );
  }

  Widget _buildHeroTitle() {
    return Stack(
      children: [
        Text(
          'Secure. Stealthy. Digital.',
          style: TextStyle(
            fontFamily: 'PressStart2P',
            fontSize: AppTheme.fontSizeHero,
            color: AppTheme.primaryGreen,
            shadows: [
              Shadow(
                offset: const Offset(3.0, 3.0),
                blurRadius: 0.0,
                color: AppTheme.black,
              ),
            ],
          ),
        ),
        Positioned(
          bottom: -10,
          left: 0,
          right: 0,
          child: CustomPaint(
            painter: DashedLinePainter(),
            size: const Size(double.infinity, 2),
          ),
        ),
      ],
    );
  }

  Widget _buildHeroImage() {
    return Container(
      padding: const EdgeInsets.all(AppTheme.spacingM),
      child: Stack(
        children: [
          // Border decoration
          CustomPaint(
            painter: ClippedBorderPainter(),
            child: Container(
              width: double.infinity,
              height: 600,
            ),
          ),

          // Image
          ClipRect(
            child: ColorFiltered(
              colorFilter: const ColorFilter.matrix([
                1.2, 0, 0, 0, 0,
                0, 1.2, 0, 0, 0,
                0, 0, 1.2, 0, 0,
                0, 0, 0, 1, 0,
              ]),
              child: Image.network(
                'https://placehold.co/600x600',
                fit: BoxFit.cover,
                width: double.infinity,
                height: 600,
              ),
            ),
          ),

          // Classified label
          Positioned(
            bottom: 30,
            right: 30,
            child: Transform.rotate(
              angle: -0.035, // About -2 degrees
              child: Stack(
                children: [
                  // Black border
                  Positioned(
                    top: -5,
                    left: -5,
                    right: -5,
                    bottom: -5,
                    child: Container(
                      decoration: BoxDecoration(
                        border: Border.all(
                          color: AppTheme.black,
                          width: 2,
                        ),
                      ),
                    ),
                  ),

                  // Green background with text
                  Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: AppTheme.spacingM,
                      vertical: AppTheme.spacingS,
                    ),
                    decoration: BoxDecoration(
                      color: AppTheme.primaryGreen,
                      boxShadow: [
                        BoxShadow(
                          color: AppTheme.black,
                          offset: const Offset(3, 3),
                          blurRadius: 0,
                        ),
                      ],
                    ),
                    child: Text(
                      'CLASSIFIED',
                      style: TextStyle(
                        fontFamily: 'PressStart2P',
                        fontSize: AppTheme.fontSizeS,
                        color: AppTheme.black,
                      ),
                    ),
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

class _StartMissionButton extends StatefulWidget {
  @override
  State<_StartMissionButton> createState() => _StartMissionButtonState();
}

class _StartMissionButtonState extends State<_StartMissionButton> {
  bool isHovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => isHovered = true),
      onExit: (_) => setState(() => isHovered = false),
      child: ElevatedButton(
        onPressed: () {
          // Handle button press
        },
        style: ButtonStyle(
          backgroundColor: MaterialStateProperty.all(
            isHovered ? AppTheme.lighterGreen : AppTheme.primaryGreen,
          ),
          foregroundColor: MaterialStateProperty.all(AppTheme.black),
          padding: MaterialStateProperty.all(
            const EdgeInsets.symmetric(
              horizontal: AppTheme.spacingL,
              vertical: AppTheme.spacingM,
            ),
          ),
          textStyle: MaterialStateProperty.all(
            TextStyle(
              fontFamily: 'PressStart2P',
              fontSize: AppTheme.fontSizeM,
            ),
          ),
          elevation: MaterialStateProperty.all(0),
          shape: MaterialStateProperty.all(
            RoundedRectangleBorder(
              borderRadius: BorderRadius.zero,
            ),
          ),
        ),
        child: const Text('START MISSION'),
      ),
    );
  }
}

class DashedLinePainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = AppTheme.primaryGreen
      ..strokeWidth = 2
      ..style = PaintingStyle.stroke;

    const dashWidth = 5;
    const dashSpace = 5;
    double startX = 0;

    while (startX < size.width) {
      canvas.drawLine(
        Offset(startX, 0),
        Offset(startX + dashWidth, 0),
        paint,
      );
      startX += dashWidth + dashSpace;
    }
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) => false;
}

class ClippedBorderPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = AppTheme.primaryGreen
      ..strokeWidth = 3
      ..style = PaintingStyle.stroke;

    final path = Path()
      ..moveTo(0, 0)
      ..lineTo(size.width, 0)
      ..lineTo(size.width, size.height * 0.9)
      ..lineTo(size.width * 0.9, size.height)
      ..lineTo(0, size.height)
      ..close();

    canvas.drawPath(path, paint);
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) => false;
}