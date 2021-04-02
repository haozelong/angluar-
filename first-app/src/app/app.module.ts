import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {WelcomeComponent} from './welcome.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AddComponent} from './add/add.component';
import {FormsModule} from '@angular/forms';
import {EditComponent} from './edit/edit.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { PersonalCenterComponent } from './personal-center/personal-center.component';
import { SexPipe } from './personal-center/sex.pipe';
import { XAuthTokenInterceptor } from './x-auth-token.interceptor';
import { NavComponent } from './nav/nav.component';
import { ApiInterceptor } from 'src/app/api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    LoginComponent,
    IndexComponent,
    PersonalCenterComponent,
    SexPipe,
    WelcomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: XAuthTokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, multi: true, useClass: ApiInterceptor}
  ],
  bootstrap: [IndexComponent]
})
export class AppModule {
}
