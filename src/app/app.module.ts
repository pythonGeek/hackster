import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { Ng2PaginationModule } from 'ng2-pagination';

import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { BucketlistComponent } from './bucketlist/bucketlist.component';
import { BucketlistItemComponent } from './bucketlistitem/bucketlistitem.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RegisterService } from './auth/register/register.service';
import { LoginService } from './auth/login/login.service';
import { BucketlistService } from './bucketlist/bucketlist.service';
import { StatusPipe } from './bucketlistitem/bucketlistitem.pipe';
import { BucketlistFilterPipe } from './bucketlist/bucketlist.filter';


const appRoutes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'auth/register', component: RegisterComponent },
   { path: 'auth/login', component: LoginComponent},
   { path: 'bucketlists', component: BucketlistComponent },
   { path: 'bucketlists/:bucketlist_id', component: BucketlistItemComponent },
   { path: '**', redirectTo: '/', pathMatch: 'full'},

];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent, 
    BucketlistComponent, 
    BucketlistItemComponent,
    LoginComponent, 
    HomeComponent,
    StatusPipe,
    BucketlistFilterPipe,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    FlashMessagesModule,
    Ng2PaginationModule,
    RouterModule.forRoot(appRoutes),
  ],
  
  providers: [RegisterService, LoginService, BucketlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
