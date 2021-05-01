import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { LoginComponent } from './components/login/login.component';
import { PatientRegistrationComponent } from './components/patient-registration/patient-registration.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PatientHomeComponent } from './components/patient-home/patient-home.component';
import { DriverHomeComponent } from './components/driver-home/driver-home.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin',
        component: AdminHomeComponent
    },
    {
        path: 'admin/:role',
        component: AdminUsersComponent
    },
    {
        path: 'register/patient',
        component: PatientRegistrationComponent
    },
    {
        path: 'patient/home',
        component: PatientHomeComponent
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
