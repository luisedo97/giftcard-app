import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GiftcardTemplatesListPage } from './giftcard-templates-list.page';

describe('GiftcardTemplatesListPage', () => {
  let component: GiftcardTemplatesListPage;
  let fixture: ComponentFixture<GiftcardTemplatesListPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftcardTemplatesListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GiftcardTemplatesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
