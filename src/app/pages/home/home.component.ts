import {Component, computed, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {TimerInterface} from "../../interfaces/timer";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  apiService = inject(ApiService);
  destroyRef = inject(DestroyRef);
  timeLeft = 0;
  loaded = signal(false);

  ngOnInit() {
    this.getTimer();
  }

  getTimer(): void {
    this.apiService.getSecondsLeft().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (val: TimerInterface) => {

        this.timeLeft = val.secondsLeft;
        this.startTimer(val.secondsLeft);
      },
      complete: () => this.loaded.set(true)
    })
  }

  startTimer(seconds: number): void {
    setInterval(() => {
      if (this.timeLeft !== 0) {
        this.timeLeft--;
      }
    }, seconds * 100)
  }

}
