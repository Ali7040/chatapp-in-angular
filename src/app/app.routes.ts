import { Routes } from '@angular/router';
import { MasterComponent } from './shared/layouts/master/master.component';
import { MessageComponent } from './pages/message/message.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ComposeComponent } from './pages/compose/compose.component';

export const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      { path: 'messages', component: MessageComponent },
      { path: 'compose', component: ComposeComponent },
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];
