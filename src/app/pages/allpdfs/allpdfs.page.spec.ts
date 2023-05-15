import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllpdfsPage } from './allpdfs.page';

describe('AllpdfsPage', () => {
  let component: AllpdfsPage;
  let fixture: ComponentFixture<AllpdfsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllpdfsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllpdfsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
