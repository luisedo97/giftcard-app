import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiftcardTemplatesDetailsPage } from './giftcard-templates-details.page';

const routes: Routes = [
  {
    path: '',
    component: GiftcardTemplatesDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiftcardTemplatesDetailsPageRoutingModule {}
