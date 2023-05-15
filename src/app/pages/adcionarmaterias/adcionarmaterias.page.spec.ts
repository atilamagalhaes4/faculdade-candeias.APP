import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdcionarmateriasPage } from './adcionarmaterias.page';

describe('AdcionarmateriasPage', () => {
  let component: AdcionarmateriasPage;
  let fixture: ComponentFixture<AdcionarmateriasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdcionarmateriasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdcionarmateriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
