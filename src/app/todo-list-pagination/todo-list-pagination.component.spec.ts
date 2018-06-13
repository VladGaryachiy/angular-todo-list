import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListPaginationComponent } from './todo-list-pagination.component';

describe('TodoListPaginationComponent', () => {
  let component: TodoListPaginationComponent;
  let fixture: ComponentFixture<TodoListPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
