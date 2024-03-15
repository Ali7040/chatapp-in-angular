import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CardComponent } from '../../shared/component/card/card.component';
import { SidebarComponent } from '../../shared/layouts/sidebar/sidebar.component';
import { MessageItemsComponent } from '../../shared/component/message-items/message-items.component';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CardComponent, SidebarComponent, MessageItemsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {}
