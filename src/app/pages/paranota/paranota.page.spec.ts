import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParanotaPage } from './paranota.page';

describe('ParanotaPage', () => {
  let component: ParanotaPage;
  let fixture: ComponentFixture<ParanotaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParanotaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParanotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
