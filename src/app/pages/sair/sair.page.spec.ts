import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SairPage } from './sair.page';

describe('SairPage', () => {
  let component: SairPage;
  let fixture: ComponentFixture<SairPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SairPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SairPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
