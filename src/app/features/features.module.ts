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
      },
      {
        path: '',
        loadChildren: () => import('./views/giftcard/giftcard.module').then(m => m.GiftcardModule)
      },
      {
        path: 'config',
        loadChildren: () => import('./views/config/config.module').then(m => m.ConfigModule)
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
  ],
  providers: [
  ]
})
export class FeaturesModule { }
