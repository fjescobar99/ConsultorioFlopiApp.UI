import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private config: any;

  async loadConfig(env: string): Promise<void> {
    const fileName = `assets/config.${env}.json`;
    const response = await fetch(fileName);
    if (!response.ok) throw new Error(`No se pudo cargar ${fileName}`);
    const json = await response.json();
    this.config = json;
  }

  get apiUrl(): string {
    return this.config.apiUrl;
  }

}
