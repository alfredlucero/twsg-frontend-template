interface Window {
  appConfig: AppConfig;
}

interface AppConfig {
  deployedEnvironment: DeployedEnvironment;
  apiHost: string;
}

type DeployedEnvironment = 'localhost' | 'staging' | 'production';
