import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExibirpeditarPage } from './exibirpeditar.page';

describe('ExibirpeditarPage', () => {
  let component: ExibirpeditarPage;
  let fixture: ComponentFixture<ExibirpeditarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibirpeditarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExibirpeditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
