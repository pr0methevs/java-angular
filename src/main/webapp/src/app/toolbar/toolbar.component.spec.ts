import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a logo', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.logo')).toBeTruthy();
  });

  it('should display logo text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const logoEl = compiled.querySelector('.logo');
    expect(logoEl?.textContent).toContain('Frontend App');
  })
  

});
