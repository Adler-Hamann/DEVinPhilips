import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ex_Formulario';
  personagem: any = {
    imagem: '../../assets/wendel-1-1.jpg',
    nome: 'Wendel Bezerra',
    descricao: 'Um dos maiores dubladores do Brasil, Wendel Bezerra dublou um dos mais marcantes personagen de anime: O Goku!'
  }

  action(event: any) {
    
    console.log(event)
  }
}
