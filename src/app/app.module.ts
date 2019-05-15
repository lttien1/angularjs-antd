import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

// Libary
import { AngularSplitModule } from 'angular-split';

// Components
import { LayoutComponent } from './components/layout/layout.component';
import { ContactsComponent, SettingsComponent } from './containers';

// Services
import { httpInterceptorProviders } from './services/http-interceptors';
import { AuthService } from './services/auth.service';
import { HttpErrorHandler } from './services/http-error-handler.service';
import { HttpService } from './services/http.service';
import { MessageService } from './services/message.service';
import { TableComponent } from './components/table/table.component';

// Pipes
import { MapSelectItemPipe } from './pipes/map-select-item.pipe';
import { ConvertUndefinedValuePipe } from './pipes/convert-undefined-value.pipe';
import { SplitPaneComponent } from './components/split-pane/split-pane.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    // Components
    AppComponent,
    ContactsComponent,
    LayoutComponent,
    SettingsComponent,
    TableComponent,

    // Pipes
    MapSelectItemPipe,
    ConvertUndefinedValuePipe,
    SplitPaneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    AngularSplitModule.forRoot()
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    AuthService,
    HttpErrorHandler,
    MessageService,
    HttpService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  static injector: Injector;

  constructor(injector: Injector) {
    AppModule.injector = injector;
  }
}
