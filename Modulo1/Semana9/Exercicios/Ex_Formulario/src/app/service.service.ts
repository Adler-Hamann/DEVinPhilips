import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  constructor() { }

  salvaDados (dados: any) {
    const valores = JSON.stringify(dados);
    localStorage.setItem(dados.email, valores)
  }

  retornaDados (email: string) {
    return localStorage.getItem(email)
  }
}
