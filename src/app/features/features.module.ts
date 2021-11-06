import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './views/base/base.component';
import { IonicModule } from '@ionic/angular';
import { GlobalTabsComponent } from './components/global-tabs/global-tabs.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then( m => m.DashboardPageModule)
      }
    ]
  }
]

@NgModule({
  declarations: [
    BaseComponent,
    GlobalTabsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class FeaturesModule { }
