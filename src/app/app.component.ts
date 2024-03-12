import { Component, inject } from "@angular/core";
import { ConfigService } from "../util/config.service";

@Component({
  selector: "app-root",
  template: `
    <h1>Welcome to {{ title }}!</h1>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = "agular-build-once-all-env-with-Docker-and-nginx";

  configService = inject(ConfigService);

  apiUrl = this.configService.readConfig().API_URL;

  constructor() {
    console.log(this.configService.readConfig().API_URL);
  }
}
