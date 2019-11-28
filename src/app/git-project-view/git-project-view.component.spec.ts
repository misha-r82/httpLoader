import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitProjectViewComponent } from './git-project-view.component';

describe('GitProjectViewComponent', () => {
  let component: GitProjectViewComponent;
  let fixture: ComponentFixture<GitProjectViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitProjectViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitProjectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
