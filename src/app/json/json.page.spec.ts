import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JsonPage } from './json.page';

describe('JsonPage', () => {
  let component: JsonPage;
  let fixture: ComponentFixture<JsonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JsonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
