import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { AllComponent } from './all/all.component';
import { TimeComponent } from './time/time.component';
import { BodyComponent } from './body/body.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'add' , component: AddComponent},
  { path: 'update', component: UpdateComponent},
  { path: 'delete', component: DeleteComponent},
  { path: 'all', component: AllComponent},
  { path: 'time', component: TimeComponent},
  { path: 'home', component: BodyComponent},
  { path: 'addProfile', component: ProfileComponent},
  { path:'', redirectTo:'/home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[AddComponent,UpdateComponent,DeleteComponent,TimeComponent,AllComponent,ProfileComponent];