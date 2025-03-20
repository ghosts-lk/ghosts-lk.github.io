class Service {
  final String name;
  final String price;
  final String description;

  Service({
    required this.name,
    required this.price,
    required this.description,
  });

  static List<Service> getServices() {
    return [
      Service(
        name: "System Repair",
        price: "10,000+",
        description: "Expert diagnostics and repairs for both hardware and software issues. We bring your system back from the dead.",
      ),
      Service(
        name: "Update and OS installations",
        price: "15,000+",
        description: "Clean OS installations and system updates with zero downtime. Your system, evolved.",
      ),
      Service(
        name: "Virus Removal and Recovery",
        price: "10,000+",
        description: "Advanced malware elimination and data recovery. We purge the infection, preserve your data.",
      ),
      Service(
        name: "Maintenance and Optimizing",
        price: "10,000+",
        description: "Performance tuning and system optimization. Unlock your machine's true potential.",
      ),
      Service(
        name: "Security Assessments",
        price: "20,000+",
        description: "Comprehensive security audits and vulnerability analysis. Know your weaknesses before others do.",
      ),
      Service(
        name: "Pentests",
        price: "50,000+",
        description: "Professional penetration testing with detailed reports. We break in so others can't.",
      ),
      Service(
        name: "OSINT Reports",
        price: "20,000+",
        description: "Deep-dive intelligence gathering and digital footprint analysis. See what the network sees.",
      ),
      Service(
        name: "Web Hosting",
        price: "15,000+",
        description: "Secure, high-performance hosting with 99.9% uptime. Your digital fortress in the cloud.",
      ),
      Service(
        name: "Website Building",
        price: "60,000+",
        description: "Custom website development with cutting-edge tech. Your vision, our execution.",
      ),
      Service(
        name: "App Building",
        price: "60,000+",
        description: "Native and cross-platform app development. Transform your idea into digital reality.",
      ),
      Service(
        name: "UI/UX",
        price: "30,000+",
        description: "Intuitive interface design and user experience optimization. Where form meets function.",
      ),
    ];
  }
}