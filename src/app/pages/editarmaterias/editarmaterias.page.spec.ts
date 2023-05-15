import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarmateriasPage } from './editarmaterias.page';

describe('EditarmateriasPage', () => {
  let component: EditarmateriasPage;
  let fixture: ComponentFixture<EditarmateriasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarmateriasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarmateriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
