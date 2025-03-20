import 'package:flutter/material.dart';
import 'package:ghost_protocol/app_theme.dart';
import 'package:ghost_protocol/widgets/feature_card.dart';

class FeaturesSection extends StatelessWidget {
  const FeaturesSection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final isMobile = screenWidth <= AppTheme.mobileBreakpoint;

    return Container(
      padding: const EdgeInsets.symmetric(
        vertical: AppTheme.spacingXXL,
        horizontal: AppTheme.spacingM,
      ),
      color: AppTheme.darkSurface,
      child: isMobile
          ? _buildMobileLayout()
          : _buildDesktopLayout(),
    );
  }

  Widget _buildDesktopLayout() {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Expanded(
          child: _buildFeatureCard(
            'https://placehold.co/100x100',
            'Enhanced Security',
            'State-of-the-art protection',
          ),
        ),
        const SizedBox(width: AppTheme.spacingM),
        Expanded(
          child: _buildFeatureCard(
            'https://placehold.co/100x100',
            'Lightning Fast',
            'Optimized performance',
          ),
        ),
        const SizedBox(width: AppTheme.spacingM),
        Expanded(
          child: _buildFeatureCard(
            'https://placehold.co/100x100',
            'Cloud Sync',
            'Seamless integration',
          ),
        ),
      ],
    );
  }

  Widget _buildMobileLayout() {
    return Column(
      children: [
        _buildFeatureCard(
          'https://placehold.co/100x100',
          'Enhanced Security',
          'State-of-the-art protection',
        ),
        const SizedBox(height: AppTheme.spacingL),
        _buildFeatureCard(
          'https://placehold.co/100x100',
          'Lightning Fast',
          'Optimized performance',
        ),
        const SizedBox(height: AppTheme.spacingL),
        _buildFeatureCard(
          'https://placehold.co/100x100',
          'Cloud Sync',
          'Seamless integration',
        ),
      ],
    );
  }

  Widget _buildFeatureCard(String imageUrl, String title, String description) {
    return FeatureCard(
      imageUrl: imageUrl,
      title: title,
      description: description,
    );
  }
}