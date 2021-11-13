import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GiftcardTemplatesUpsertPage } from './giftcard-templates-upsert.page';

describe('GiftcardTemplatesUpsertPage', () => {
  let component: GiftcardTemplatesUpsertPage;
  let fixture: ComponentFixture<GiftcardTemplatesUpsertPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftcardTemplatesUpsertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GiftcardTemplatesUpsertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
