import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CourceComponent } from './cource/cource.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { MadhuComponent } from './madhu/madhu.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'cource', component:CourceComponent},
  { path: 'help', component:HelpComponent},
  { path: 'about', component:AboutComponent },
  { path: 'joinnow', component:JoinnowComponent },
  { path: 'madhu', component:MadhuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
