import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagarpdfPage } from './pagarpdf.page';

describe('PagarpdfPage', () => {
  let component: PagarpdfPage;
  let fixture: ComponentFixture<PagarpdfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagarpdfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagarpdfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
