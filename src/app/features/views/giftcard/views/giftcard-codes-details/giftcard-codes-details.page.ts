import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Giftcard } from 'src/app/features/interfaces/giftcard';
import { GiftcardService } from '../../services/giftcard.service';

@Component({
  selector: 'app-giftcard-codes-details',
  templateUrl: './giftcard-codes-details.page.html',
  styleUrls: ['./giftcard-codes-details.page.scss'],
})
export class GiftcardCodesDetailsPage implements OnInit {

  giftcard: Giftcard;

  constructor(
    private _giftcardService: GiftcardService,
    private _route: ActivatedRoute
  ) { 
    this._route.params.subscribe(params => {
      this.giftcard = this._giftcardService.getGiftcardById(params['id']);
    });
  }

  ngOnInit() {
    console.log(this.giftcard);
  }

}
