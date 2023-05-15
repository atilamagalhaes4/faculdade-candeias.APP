import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListachamadasPage } from './listachamadas.page';

describe('ListachamadasPage', () => {
  let component: ListachamadasPage;
  let fixture: ComponentFixture<ListachamadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListachamadasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListachamadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
