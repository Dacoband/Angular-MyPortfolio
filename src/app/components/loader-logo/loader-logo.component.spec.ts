import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderLogoComponent } from './loader-logo.component';

describe('LoaderLogoComponent', () => {
  let component: LoaderLogoComponent;
  let fixture: ComponentFixture<LoaderLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
