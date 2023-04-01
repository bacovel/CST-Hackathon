import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './_core/core.module';
import { SharedModule } from './_shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServerConfigService } from './_core/services/server-config.service';
import { ErrorPagesComponent } from './pages/error-pages/error-pages.component';
import { HttpRequestsInterceptor } from './_core/interceptors/http-requests.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPagesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ServerConfigService],
      useFactory: (serverConfigService: ServerConfigService) => {
        return () => {
          return serverConfigService.loadServerConfig();
        };
      }
    },
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestsInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
