import 'package:flutter/material.dart';
import '../models/service.dart';
import 'package:url_launcher/url_launcher.dart';

class ServiceCard extends StatefulWidget {
  final Service service;

  const ServiceCard({
    Key? key,
    required this.service,
  }) : super(key: key);

  @override
  State<ServiceCard> createState() => _ServiceCardState();
}

class _ServiceCardState extends State<ServiceCard> {
  bool isHovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => isHovered = true),
      onExit: (_) => setState(() => isHovered = false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 400),
        curve: Curves.easeOutQuart,
        padding: const EdgeInsets.all(35),
        decoration: BoxDecoration(
          color: isHovered
              ? const Color(0xFF262626).withOpacity(0.98)
              : const Color(0xFF222222).withOpacity(0.95),
          borderRadius: BorderRadius.circular(8),
          border: Border.all(
            color: isHovered
                ? const Color(0xFF33FF33).withOpacity(0.6)
                : const Color(0xFF33FF33).withOpacity(0.2),
            width: 1,
          ),
          boxShadow: isHovered
              ? [
                  BoxShadow(
                    color: const Color(0xFF33FF33).withOpacity(0.15),
                    blurRadius: 40,
                    offset: const Offset(0, 12),
                  ),
                  BoxShadow(
                    color: const Color(0xFF33FF33).withOpacity(0.1),
                    blurRadius: 20,
                    offset: const Offset(0, 0),
                  ),
                ]
              : [],
        ),
        transform: isHovered
            ? Matrix4.translationValues(0, -8, 0)..scale(1.02)
            : Matrix4.translationValues(0, 0, 0)..scale(1.0),
        child: Stack(
          children: [
            // Gradient overlay when hovered
            if (isHovered)
              Positioned.fill(
                child: Container(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(8),
                    gradient: LinearGradient(
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                      colors: [
                        const Color(0xFF33FF33).withOpacity(0.1),
                        Colors.transparent,
                      ],
                      stops: const [0.0, 0.7],
                    ),
                  ),
                ),
              ),
            // Card content
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  widget.service.name,
                  style: TextStyle(
                    color: isHovered
                        ? const Color(0xFF66FF66)
                        : const Color(0xFF33FF33),
                    fontSize: 22,
                    fontWeight: FontWeight.bold,
                    letterSpacing: 0.5,
                  ),
                ),
                const SizedBox(height: 18),
                Text(
                  widget.service.description,
                  style: Theme.of(context).textTheme.bodySmall,
                ),
                const SizedBox(height: 20),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Row(
                      crossAxisAlignment: CrossAxisAlignment.baseline,
                      textBaseline: TextBaseline.alphabetic,
                      children: [
                        Text(
                          'LKR',
                          style: TextStyle(
                            fontSize: 14,
                            color: Colors.grey[600],
                          ),
                        ),
                        const SizedBox(width: 4),
                        Text(
                          widget.service.price,
                          style: const TextStyle(
                            color: Colors.white,
                            fontSize: 26,
                            fontWeight: FontWeight.w800,
                            letterSpacing: 0.5,
                          ),
                        ),
                      ],
                    ),
                    _buildCallButton(isHovered),
                  ],
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildCallButton(bool isHovered) {
    return GestureDetector(
      onTap: () async {
        final Uri phoneUri = Uri(scheme: 'tel', path: '+94710555055');
        if (await canLaunchUrl(phoneUri)) {
          await launchUrl(phoneUri);
        }
      },
      child: MouseRegion(
        cursor: SystemMouseCursors.click,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 400),
          curve: Curves.easeOutQuart,
          width: 45,
          height: 45,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            border: Border.all(
              color: isHovered
                  ? const Color(0xFF33FF33).withOpacity(0.8)
                  : const Color(0xFF33FF33).withOpacity(0.3),
              width: 1,
            ),
            color: isHovered
                ? const Color(0xFF33FF33).withOpacity(0.1)
                : Colors.transparent,
          ),
          child: Center(
            child: Transform.rotate(
              angle: isHovered ? 0.785398 : 0, // 45 degrees in radians
              child: Icon(
                Icons.arrow_forward,
                color: const Color(0xFF33FF33),
                size: 16,
              ),
            ),
          ),
        ),
      ),
    );
  }
}