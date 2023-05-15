import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrequenciaPage } from './frequencia.page';

describe('FrequenciaPage', () => {
  let component: FrequenciaPage;
  let fixture: ComponentFixture<FrequenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrequenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
