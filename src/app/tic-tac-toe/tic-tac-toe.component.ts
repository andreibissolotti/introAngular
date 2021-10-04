import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent {

  currentPlayer: string = "X";
  winner: string = '';
  board: string[][] = [
    ['','',''],
    ['','',''],
    ['','','']
  ];

  cont: number = 0;
  processPlay(i: number, j: number){
    if(this.board[i][j] == "" && this.winner == ""){
      this.cont++;
      this.board[i][j] = this.currentPlayer;
      if (this.checkWinner (this.currentPlayer)){
        this.winner = this.currentPlayer;
      } else if (this.cont == 9){
        this.winner = "Velha!"
      }
      switch(this.currentPlayer){
        case "O":
          this.currentPlayer = "X";
          break;
        case "X":
          this.currentPlayer = "O";
          break;
      }
      console.log(this.cont)
    }
  }

  checkWinner(player: string): boolean {
    for (let g = 0; g < this.board.length; g++){
      if (this.board[g][0] == player && this.board[g][1] == player && this.board[g][2] == player){
        return true;
      }else if (this.board[0][g] == player && this.board[1][g] == player && this.board[2][g] == player){
        return true;
      }
    }
    if (this.board[0][0] == player && this.board[1][1] == player && this.board[2][2] == player){
      return true;
    }else if (this.board[0][2] == player && this.board[1][1] == player && this.board[2][0] == player){
      return true;
    }
    return false;
  }

  reset() {
    if (this.winner != "" && this.winner != "Velha!"){
      this.currentPlayer = this.winner
    }
    this.winner = '';
    this.board = [
      ['','',''],
      ['','',''],
      ['','','']
    ];
    this.cont = 0;
  }

  constructor () { }

}
