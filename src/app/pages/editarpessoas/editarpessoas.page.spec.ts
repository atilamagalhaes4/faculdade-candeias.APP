import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarpessoasPage } from './editarpessoas.page';

describe('EditarpessoasPage', () => {
  let component: EditarpessoasPage;
  let fixture: ComponentFixture<EditarpessoasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarpessoasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarpessoasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
