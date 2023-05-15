import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublicarnotaPage } from './publicarnota.page';

describe('PublicarnotaPage', () => {
  let component: PublicarnotaPage;
  let fixture: ComponentFixture<PublicarnotaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarnotaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublicarnotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
