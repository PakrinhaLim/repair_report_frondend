import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes.service';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from './config/app.config';
import { ViewsModule } from './views/views.module';
import { SharedModule } from './shared/shared.module';
import { ErrorModule } from './views/errors/error.module';
// import {DatepickerModule} from 'ngx-date-picker';
// main layout
import { NavigationModule } from './main-layout/navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    BrowserModule,
    BrowserAnimationsModule,
    NavigationModule,
    AppRoutes,
    RouterModule,
    FormsModule,
    SharedModule,
    ViewsModule,
    ErrorModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
    // DatepickerModule
    // MDBBootstrapModulesPro.forRoot()
  ],
  providers: [
    // { provide: MDB_DATE_OPTIONS, useValue: { showTodayBtn: false } }
    { provide: 'APP_NAME', useValue: AppConfig.APP_NAME },
		{ provide: 'APP_LOGO', useValue: AppConfig.APP_LOGO },
		{ provide: 'APP_URL', useValue: AppConfig.APP_URL },
		{ provide: 'API_URL', useValue: AppConfig.API_URL },
		{ provide: 'FILEUPLOAD_URL', useValue: AppConfig.FILEUPLOAD_URL },
		{ provide: 'DEFAULT_IMG_PROFILE', useValue: AppConfig.DEFAULT_IMG_PROFILE },
		{ provide: 'DEFAULT_IMG', useValue: AppConfig.DEFAULT_IMG },
		{ provide: 'LIMIT_FILE_SIZE', useValue: AppConfig.LIMIT_FILE_SIZE }
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
