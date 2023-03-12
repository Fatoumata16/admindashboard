import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeetudiantvraiPage } from './listeetudiantvrai.page';

describe('ListeetudiantvraiPage', () => {
  let component: ListeetudiantvraiPage;
  let fixture: ComponentFixture<ListeetudiantvraiPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeetudiantvraiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeetudiantvraiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
