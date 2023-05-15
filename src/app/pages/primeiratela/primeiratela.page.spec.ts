import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrimeiratelaPage } from './primeiratela.page';

describe('PrimeiratelaPage', () => {
  let component: PrimeiratelaPage;
  let fixture: ComponentFixture<PrimeiratelaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeiratelaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrimeiratelaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
