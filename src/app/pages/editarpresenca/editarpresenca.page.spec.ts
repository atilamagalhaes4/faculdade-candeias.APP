import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarpresencaPage } from './editarpresenca.page';

describe('EditarpresencaPage', () => {
  let component: EditarpresencaPage;
  let fixture: ComponentFixture<EditarpresencaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarpresencaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarpresencaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
