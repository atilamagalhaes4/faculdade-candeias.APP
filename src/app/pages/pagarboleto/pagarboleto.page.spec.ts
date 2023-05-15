import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagarboletoPage } from './pagarboleto.page';

describe('PagarboletoPage', () => {
  let component: PagarboletoPage;
  let fixture: ComponentFixture<PagarboletoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagarboletoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagarboletoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
