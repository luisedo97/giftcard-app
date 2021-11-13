import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Code } from 'src/app/features/interfaces/code';
import { GiftcardService } from '../../services/giftcard.service';

@Component({
  selector: 'app-giftcard-codes-details',
  templateUrl: './giftcard-codes-details.page.html',
  styleUrls: ['./giftcard-codes-details.page.scss'],
})
export class GiftcardCodesDetailsPage implements OnInit {

  code: Code;

  constructor(
    private _giftcardService: GiftcardService,
    private _route: ActivatedRoute
  ) { 
    this._route.params.subscribe(params => {
      this.code = this._giftcardService.getCode(params['code']);
    });
  }

  ngOnInit() {
    console.log(this.code);
  }

}
