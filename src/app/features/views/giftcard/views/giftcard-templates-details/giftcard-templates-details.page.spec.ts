import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GiftcardTemplatesDetailsPage } from './giftcard-templates-details.page';

describe('GiftcardTemplatesDetailsPage', () => {
  let component: GiftcardTemplatesDetailsPage;
  let fixture: ComponentFixture<GiftcardTemplatesDetailsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftcardTemplatesDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GiftcardTemplatesDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
