import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitProComponent } from './git-pro.component';

describe('GitProComponent', () => {
  let component: GitProComponent;
  let fixture: ComponentFixture<GitProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
