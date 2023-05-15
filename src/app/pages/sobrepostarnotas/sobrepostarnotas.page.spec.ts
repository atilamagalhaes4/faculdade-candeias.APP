import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SobrepostarnotasPage } from './sobrepostarnotas.page';

describe('SobrepostarnotasPage', () => {
  let component: SobrepostarnotasPage;
  let fixture: ComponentFixture<SobrepostarnotasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobrepostarnotasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SobrepostarnotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
