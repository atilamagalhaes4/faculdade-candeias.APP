import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CriarnotasPage } from './criarnotas.page';

describe('CriarnotasPage', () => {
  let component: CriarnotasPage;
  let fixture: ComponentFixture<CriarnotasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarnotasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CriarnotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
