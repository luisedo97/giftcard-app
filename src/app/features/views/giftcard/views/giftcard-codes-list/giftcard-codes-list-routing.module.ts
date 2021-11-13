import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiftcardCodesListPage } from './giftcard-codes-list.page';

const routes: Routes = [
  {
    path: '',
    component: GiftcardCodesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiftcardCodesListPageRoutingModule {}
