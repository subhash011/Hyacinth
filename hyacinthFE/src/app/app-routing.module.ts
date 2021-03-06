import { PrescriptionComponent } from './components/prescription/prescription.component';
import { ConsultComponent } from './components/consult/consult.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminUsersComponent } from './components/admin/admin-users/admin-users.component';
import { PatientRegistrationComponent } from './components/patient-registration/patient-registration.component';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';

const routes: Routes = [
    { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
    { path: 'login', component: LoginComponent, data: { animation: 'LoginPage' } },
    { path: 'admin/dashboard/:id', component: AdminHomeComponent },
    { path: 'admin/1', component: AdminProfileComponent },
    { path: 'admin/:role', component: AdminUsersComponent },
    { path: 'register/patient', component: PatientRegistrationComponent },
    { path: ':role/dashboard/:id', component: DashboardComponent },
    { path: 'prescription/:id', component: PrescriptionComponent },
    { path: 'consultation/:id', component: ConsultComponent },
    { path: ':role/:id', component: ProfileComponent },
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
