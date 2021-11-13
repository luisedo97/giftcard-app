import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiftcardTemplatesListPage } from './giftcard-templates-list.page';

const routes: Routes = [
  {
    path: '',
    component: GiftcardTemplatesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiftcardTemplatesListPageRoutingModule {}
