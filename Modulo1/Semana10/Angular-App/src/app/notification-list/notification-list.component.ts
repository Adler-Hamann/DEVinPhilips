import { Component } from '@angular/core';
import { conteudo } from '../mocks/notificacoes'

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent {
  notificacoes = conteudo
}