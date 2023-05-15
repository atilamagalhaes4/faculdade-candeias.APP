import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PessoasPage } from './pessoas.page';

describe('PessoasPage', () => {
  let component: PessoasPage;
  let fixture: ComponentFixture<PessoasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PessoasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
