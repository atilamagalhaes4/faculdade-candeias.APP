import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SimsenhorPage } from './simsenhor.page';

describe('SimsenhorPage', () => {
  let component: SimsenhorPage;
  let fixture: ComponentFixture<SimsenhorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimsenhorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SimsenhorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
