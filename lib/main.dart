import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'ghost_protocol_app.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
    DeviceOrientation.portraitDown,
  ]);
  runApp(const GhostProtocolApp());
}