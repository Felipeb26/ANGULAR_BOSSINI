import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nome: string;

  alterarNome(nome:any) {
    console.log(nome);
    this.nome = nome.target.value;
  }

  adicionar() {
    console.log('Adicionando...');
    window.alert(`Usuario ${this.nome} está gritando`)

  }
}
