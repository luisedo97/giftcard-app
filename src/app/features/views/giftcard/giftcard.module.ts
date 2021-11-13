import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GiftcardService } from './services/giftcard.service';

const routes: Routes = [
  {
    path: 'template',
    loadChildren: () => import('./views/giftcard-templates-list/giftcard-templates-list.module').then( m => m.GiftcardTemplatesListPageModule)
  },
  {
    path: 'template/detail/:gitcardId',
    loadChildren: () => import('./views/giftcard-templates-details/giftcard-templates-details.module').then( m => m.GiftcardTemplatesDetailsPageModule)
  },
  {
    path: 'template/code/:giftcardId',
    loadChildren: () => import('./views/giftcard-codes-list/giftcard-codes-list.module').then( m => m.GiftcardCodesListPageModule)
  },
  {
    path: 'template/code/detail/:codeId',
    loadChildren: () => import('./views/giftcard-codes-details/giftcard-codes-details.module').then( m => m.GiftcardCodesDetailsPageModule)
  },
  {
    path: 'template/update/:giftcardId',
    loadChildren: () => import('./views/giftcard-templates-upsert/giftcard-templates-upsert.module').then( m => m.GiftcardTemplatesUpsertPageModule)
  },
  {
    path: 'template/add',
    loadChildren: () => import('./views/giftcard-templates-upsert/giftcard-templates-upsert.module').then( m => m.GiftcardTemplatesUpsertPageModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    GiftcardService
  ]
})
export class GiftcardModule { }
