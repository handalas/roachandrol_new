import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterKOComponent } from './register-ko.component';

describe('RegisterKOComponent', () => {
  let component: RegisterKOComponent;
  let fixture: ComponentFixture<RegisterKOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterKOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterKOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
