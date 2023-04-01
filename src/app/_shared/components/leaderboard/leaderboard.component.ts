import { Component, Input } from '@angular/core';
import { userModel } from 'src/app/_core/models/UserModel';


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent {
  @Input() users: userModel[] = [];

  constructor(){}
}
