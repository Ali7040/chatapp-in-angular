import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageItemsComponent } from './message-items.component';

describe('MessageItemsComponent', () => {
  let component: MessageItemsComponent;
  let fixture: ComponentFixture<MessageItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
