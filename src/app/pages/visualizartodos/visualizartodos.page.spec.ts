import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisualizartodosPage } from './visualizartodos.page';

describe('VisualizartodosPage', () => {
  let component: VisualizartodosPage;
  let fixture: ComponentFixture<VisualizartodosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizartodosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualizartodosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
