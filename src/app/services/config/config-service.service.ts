import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private config: any;

  loadConfig(env: string): Promise<void> {
    const fileName = `assets/configs/config.${env}.json`;
    return fetch(fileName)
      .then(res => res.json())
      .then(json => {
        this.config = json;
      });
  }

  get apiUrl(): string {
    return this.config?.apiUrl;
  }
}

