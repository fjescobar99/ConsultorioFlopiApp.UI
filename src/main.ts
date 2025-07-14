import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { AppConfigService } from './app/services/config/config-service.service';

const env = (window as any).ENV || 'dev';

bootstrapApplication(AppComponent, appConfig).then(appRef => {
  const configService = appRef.injector.get(AppConfigService);
  return configService.loadConfig(env);
});
