import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.mobile',
  appName: 'mobile',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
