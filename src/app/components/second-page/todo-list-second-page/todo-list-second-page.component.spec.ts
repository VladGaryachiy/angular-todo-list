import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListSecondPageComponent } from './todo-list-second-page.component';

describe('TodoListSecondPageComponent', () => {
  let component: TodoListSecondPageComponent;
  let fixture: ComponentFixture<TodoListSecondPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListSecondPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListSecondPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
