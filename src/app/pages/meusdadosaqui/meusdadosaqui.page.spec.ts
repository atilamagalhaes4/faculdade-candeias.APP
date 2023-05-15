import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeusdadosaquiPage } from './meusdadosaqui.page';

describe('MeusdadosaquiPage', () => {
  let component: MeusdadosaquiPage;
  let fixture: ComponentFixture<MeusdadosaquiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusdadosaquiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeusdadosaquiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
