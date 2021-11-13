import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Giftcard } from 'src/app/features/interfaces/giftcard';
import { GiftcardService } from '../../services/giftcard.service';

@Component({
  selector: 'app-giftcard-codes-list',
  templateUrl: './giftcard-codes-list.page.html',
  styleUrls: ['./giftcard-codes-list.page.scss'],
})
export class GiftcardCodesListPage implements OnInit {

  giftcard: Giftcard;

  constructor(
    private _giftcardService: GiftcardService,
    private _route: ActivatedRoute
  ) { 
    this._route.params.subscribe(params => {
      this.giftcard = this._giftcardService.getGiftcardById(params['giftcardId']);
    });
  }

  ngOnInit() {
    console.log(this.giftcard);
  }

  createCode(){
    this._giftcardService.createCode(this.giftcard.id);
    this.giftcard = this._giftcardService.getGiftcardById(this.giftcard.id);
  }

}
