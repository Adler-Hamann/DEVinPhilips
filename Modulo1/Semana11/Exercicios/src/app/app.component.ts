import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercicios';
  page: string= ''
  arrayFotos: any = [
    {
      url: "https://cdn.apexminecrafthosting.com/img/uploads/2022/02/17071604/zenith-275x275.png",
      description:"A melhor espada de Terraria, Zenith"
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/pt/f/f7/Cyberpunk_2077_capa.png",
      description:"Capa frontal do jogo Cyberpunk 2077"
    },
    {
      url: "https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/ki0STHGAkIF06Q4AU8Ow4OkV.png",
      description:"Capa frontal do jogo Horizon: Forbidden West"
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/pt/5/52/Persona_5_capa.jpg",
      description:"Capa frontal do jogo Persona 5"
    },
    {
      url: "https://image.api.playstation.com/vulcan/img/cfn/11307RW7B5mvRMeOG-1pM9RnGdpRQVQ2iXinFe9755wHVXH0-mRqwizRWZQK8wMHat3XhtITgBGvRuT7JLJkkZenNxUerkoj.png",
      description:"Capa frontal do jogo Monster Hunter World: Iceborne"
    }
  ]
}
