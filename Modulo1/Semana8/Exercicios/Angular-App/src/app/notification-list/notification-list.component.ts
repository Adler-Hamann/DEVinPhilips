import { Component } from '@angular/core';

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent {
  notificacoes = [
    { 
      titulo: 'Notificação de Teste',
      subtitulo: 'Conteúdo de teste',
      data: '24/11/2022'
    },
    { 
      titulo: 'Primeira Notificação',
      subtitulo: 'Conteúdo vem aqui',
      data: '25/11/2022'
    },
    { 
      titulo: 'Mais um teste',
      subtitulo: 'Mais conteúdo',
      data: '21/11/2022'
    }
  ]
}
