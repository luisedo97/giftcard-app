import { Component, OnInit } from '@angular/core';
import { Giftcard } from 'src/app/features/interfaces/giftcard';
import { GiftcardService } from '../../services/giftcard.service';

@Component({
  selector: 'app-giftcard-templates-list',
  templateUrl: './giftcard-templates-list.page.html',
  styleUrls: ['./giftcard-templates-list.page.scss'],
})
export class GiftcardTemplatesListPage implements OnInit {

  constructor(
    public giftcardService: GiftcardService
  ) {
  }

  ngOnInit() {
  }


}
