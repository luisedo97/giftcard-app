import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigBasePage } from './config-base.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigBasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigBasePageRoutingModule {}
