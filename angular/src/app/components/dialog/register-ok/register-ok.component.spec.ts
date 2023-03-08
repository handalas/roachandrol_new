import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOKComponent } from './register-ok.component';

describe('RegisterOKComponent', () => {
  let component: RegisterOKComponent;
  let fixture: ComponentFixture<RegisterOKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterOKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterOKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
