import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent {

  currentPlayer: string = "X";
  winner: string = '';
  bord: string[][] = [
    ['','',''],
    ['','',''],
    ['','','']
  ];

  processPlay(i: number, j: number){
    console.log(`Jogada na linha ${i}, coluna ${j} do jogador ${this.currentPlayer}`)
  }


  constructor () { }

}
