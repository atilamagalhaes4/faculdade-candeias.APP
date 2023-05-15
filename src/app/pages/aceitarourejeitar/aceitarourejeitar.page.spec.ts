import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AceitarourejeitarPage } from './aceitarourejeitar.page';

describe('AceitarourejeitarPage', () => {
  let component: AceitarourejeitarPage;
  let fixture: ComponentFixture<AceitarourejeitarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceitarourejeitarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AceitarourejeitarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
