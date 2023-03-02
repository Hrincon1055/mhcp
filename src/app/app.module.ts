import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { PrimengModule } from './core/primeng/primeng.module';
import { Page404Component } from './core/page404/page404.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './core/shared/shared.module';
import { LayoutsModule } from './layouts/layouts.module';
import { DemoComponent } from './modules/module1/components/demo/demo.component';
import { HttpAuthorizationService } from './core/interceptor/http-authorization.service';

export const httpInterceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpAuthorizationService,
    multi: true,
  },
  { provide: LocationStrategy, useClass: HashLocationStrategy },
];

@NgModule({
  declarations: [AppComponent, Page404Component, DemoComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PrimengModule,
    SharedModule,
    LayoutsModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
  ],
  providers: [httpInterceptors],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
