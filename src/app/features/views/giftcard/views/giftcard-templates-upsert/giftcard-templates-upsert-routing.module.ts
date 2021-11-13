import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiftcardTemplatesUpsertPage } from './giftcard-templates-upsert.page';

const routes: Routes = [
  {
    path: '',
    component: GiftcardTemplatesUpsertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiftcardTemplatesUpsertPageRoutingModule {}
