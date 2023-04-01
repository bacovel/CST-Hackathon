import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { interval, timer } from 'rxjs';
import { AccountService } from 'src/app/_core/api/account.service';
import { Timers } from 'src/app/_core/constants/Timers';
import ComputePayloadHelper from 'src/app/_core/helpers/ComputePayloadHelper';


interface ClockTimers{
  value:Number,
  name:string
}

interface ClockValues{
  points:Number,
  pause:Number
}

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})

export class TimerComponent  implements OnInit{
  test: string = 'WORK';
  time: string = '25:00';
  size: string = '300px';
  strokeWidth: number = 10;
  progressColor: string = '#0af';
  workTime: number = 25 * 60; // work time in seconds
  pauseTime: number = 5 * 60; // pause time in seconds
  circumference: number = 0;
  dashOffset: number = 0;
  radius: number = 0;;
  started : boolean = false;
  viewBox: number = 0;
  timers: ClockTimers[] = []
  selectedHours:ClockTimers|undefined;

  constructor(
    private accountService : AccountService,
    private toastr : ToastrService
    ){}
 ngOnInit() {
   this.timers = []
   Object.keys(Timers).forEach(element => {
    let timerClock :ClockTimers = {
      name:`${element} min`,
      value:Number(element)
    }
      this.timers.push(timerClock );
   });
   this.radius = 150 - this.strokeWidth / 2;
   this.circumference = 2 * Math.PI * this.radius;
   this.viewBox = this.radius * 2;
   this.dashOffset = this.circumference;
  }

  start(){
    const timer = interval(1000);
    const timerValues = this.getTimerValues(this.selectedHours!.value);
    let remainingTime = Number(this.selectedHours!.value) * 60;
    let isWorking = true;
    this.started = true;
    timer.subscribe(() => {
      if (remainingTime <= 0) {
        if (isWorking) {
          remainingTime = Number(timerValues.pause)  * 60;
          isWorking = false;
          this.progressColor = '#f00';
          this.test = 'PAUSE';
          let payload = ComputePayloadHelper.updateExpPayload(timerValues.points);
          this.accountService.updateExp(payload).subscribe({
            next:()=>{
              this.toastr.success(`You have received ${timerValues.points} points!`)
            },
            error:()=>{
              this.toastr.error("you could not get points")
            }
          })
        } else {
          remainingTime = Number(this.selectedHours!.value)  * 60;
          isWorking = true;
          this.progressColor = '#0af';
          this.test = 'WORK';
        }
        this.dashOffset = this.circumference;
      } else {
        remainingTime--;
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        this.time = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        this.dashOffset = (this.circumference * remainingTime) / (isWorking ? this.workTime : this.pauseTime);
      }
    });
  }

  getTimerValues(timer:Number) : ClockValues{
    switch(timer){
      case 25:
        return Timers[25];
      case 30:
        return Timers[35];
      case 45:
        return Timers[45];
      case 60:
        return Timers[60]
      default :
        return Timers[25]
    }
  }
}
