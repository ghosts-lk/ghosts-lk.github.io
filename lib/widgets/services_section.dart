import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import '../theme/app_theme.dart';
import '../models/service.dart';

class ServicesSection extends StatelessWidget {
  const ServicesSection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final crossAxisCount = screenWidth > 1200 ? 3 : (screenWidth > 800 ? 2 : 1);

    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(vertical: 60, horizontal: 20),
      color: AppTheme.darkBackground,
      child: Column(
        children: [
          Text(
            'Services & Pricing',
            style: AppTheme.headingMedium,
            textAlign: TextAlign.center,
            semanticsLabel: 'Services and Pricing',
          ),
          const SizedBox(height: 40),
          Container(
            constraints: const BoxConstraints(maxWidth: 1200),
            child: GridView.builder(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: crossAxisCount,
                crossAxisSpacing: 20,
                mainAxisSpacing: 20,
                childAspectRatio: 1.2,
              ),
              itemCount: Service.getServices().length,
              itemBuilder: (context, index) {
                final service = Service.getServices()[index];
                return ServiceCard(service: service);
              },
            ),
          ),
        ],
      ),
    );
  }
}

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
  bool _isHovered = false;
  bool _isButtonHovered = false;

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
    return MouseRegion(
      onEnter: (_) => setState(() => _isHovered = true),
      onExit: (_) => setState(() => _isHovered = false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 400),
        curve: Curves.easeOutQuart,
        padding: const EdgeInsets.all(35),
        decoration: _isHovered
          ? AppTheme.cardHoverDecoration
          : AppTheme.cardDecoration,
        transform: _isHovered
          ? (Matrix4.identity()..translate(0, -8)..scale(1.02))
          : Matrix4.identity(),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              widget.service.name,
              style: AppTheme.serviceTitle,
              semanticsLabel: 'Service: ${widget.service.name}',
            ),
            const SizedBox(height: 18),
            Text(
              widget.service.description,
              style: AppTheme.serviceDescription,
              maxLines: 3,
              overflow: TextOverflow.ellipsis,
            ),
            const Spacer(),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                RichText(
                  text: TextSpan(
                    children: [
                      const TextSpan(
                        text: 'LKR ',
                        style: AppTheme.servicePriceCurrency,
                      ),
                      TextSpan(
                        text: widget.service.price,
                        style: AppTheme.servicePrice,
                      ),
                    ],
                  ),
                ),
                MouseRegion(
                  onEnter: (_) => setState(() => _isButtonHovered = true),
                  onExit: (_) => setState(() => _isButtonHovered = false),
                  child: GestureDetector(
                    onTap: _makePhoneCall,
                    child: AnimatedContainer(
                      duration: const Duration(milliseconds: 400),
                      width: 45,
                      height: 45,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        border: Border.all(
                          color: _isButtonHovered
                            ? AppTheme.neonGreen.withOpacity(0.8)
                            : AppTheme.neonGreen.withOpacity(0.3),
                        ),
                        color: _isButtonHovered
                          ? AppTheme.neonGreen.withOpacity(0.1)
                          : Colors.transparent,
                      ),
                      transform: _isButtonHovered
                        ? (Matrix4.identity()..rotateZ(0.785)) // 45 degrees
                        : Matrix4.identity(),
                      child: const Center(
                        child: Icon(
                          Icons.arrow_forward,
                          color: AppTheme.neonGreen,
                          size: 16,
                        ),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}