import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RemovermateriaisPage } from './removermateriais.page';

describe('RemovermateriaisPage', () => {
  let component: RemovermateriaisPage;
  let fixture: ComponentFixture<RemovermateriaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovermateriaisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RemovermateriaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
