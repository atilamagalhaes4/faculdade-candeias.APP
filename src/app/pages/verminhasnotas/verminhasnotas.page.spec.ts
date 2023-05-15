import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerminhasnotasPage } from './verminhasnotas.page';

describe('VerminhasnotasPage', () => {
  let component: VerminhasnotasPage;
  let fixture: ComponentFixture<VerminhasnotasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerminhasnotasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerminhasnotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
