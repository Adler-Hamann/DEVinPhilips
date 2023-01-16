import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { conteudo } from '../mocks/notificacoes'

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent {
  notificacoes = conteudo

  status:any;
  public constructor(private route:ActivatedRoute, private router:Router) {
    this.status = route.snapshot.data['status']
    if(this.status=='lidos'){
      this.notificacoes = this.notificacoes.filter(notificacao => notificacao.lido)
    }
    if(this.status=='nao-lidos'){
      this.notificacoes = this.notificacoes.filter(notificacao => !notificacao.lido)
    }
  }
  
  action(event: string){  
    this.notificacoes = conteudo
    if (event == 'Lidos') {
      this.notificacoes= this.notificacoes.filter(notificacao => notificacao.lido)  
    }
    if (event == 'Não Lidos') {
      this.notificacoes= this.notificacoes.filter(notificacao => !notificacao.lido) 
    }

    }
}
