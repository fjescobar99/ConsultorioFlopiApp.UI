import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppConfigService } from './app/services/config/config-service.service';

// LEÉ el entorno de una variable global, que se puede setear en el HTML o por defecto
const env = (window as any).ENV || 'dev';

const configService = new AppConfigService();

configService.loadConfig(env).then(() => {
  bootstrapApplication(AppComponent, {
    providers: [
      { provide: AppConfigService, useValue: configService }
    ]
  });
});
