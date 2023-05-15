import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColocarconteudoPage } from './colocarconteudo.page';

describe('ColocarconteudoPage', () => {
  let component: ColocarconteudoPage;
  let fixture: ComponentFixture<ColocarconteudoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColocarconteudoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColocarconteudoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
