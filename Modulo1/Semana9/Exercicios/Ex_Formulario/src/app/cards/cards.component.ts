import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
    personagem: any = {
      imagem: '../../assets/wendel-1-1.jpg',
      nome: 'Wendel Bezerra',
      descricao: 'Um dos maiores dubladores do Brasil, Wendel Bezerra dublou um dos mais marcantes personagen de anime: O Goku!'
    }
}
