import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'my.react.app',
  appName: 'my-react-app',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
