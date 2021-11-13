import { Component, OnInit } from '@angular/core';
import { Giftcard } from 'src/app/features/interfaces/giftcard';
import { GiftcardService } from '../../services/giftcard.service';

@Component({
  selector: 'app-giftcard-templates-list',
  templateUrl: './giftcard-templates-list.page.html',
  styleUrls: ['./giftcard-templates-list.page.scss'],
})
export class GiftcardTemplatesListPage implements OnInit {

  giftcards: Giftcard[] = [];

  constructor(
    private _giftcardService: GiftcardService
  ) {
    this.giftcards = this._giftcardService.getGiftcards();
  }

  ngOnInit() {
  }


}
