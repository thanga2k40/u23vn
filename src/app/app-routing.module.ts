import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }        from './home/home.component';
import { AccountComponent }     from './account/account.component';
import { AboutComponent }       from './about/about.component';
import { LoginComponent }       from './login/login.component';
import { SignupComponent }      from './signup/signup.component';
import { RoomDetailComponent }  from './room-detail/room-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'account', component: AccountComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'room/:id', component: RoomDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}