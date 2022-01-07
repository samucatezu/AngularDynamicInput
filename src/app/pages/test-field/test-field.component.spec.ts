import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFieldComponent } from './test-field.component';

describe('TestFieldComponent', () => {
  let component: TestFieldComponent;
  let fixture: ComponentFixture<TestFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
