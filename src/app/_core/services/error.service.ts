import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Urls } from '../constants/Urls';
import { CustomError } from '../models/Error';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  _error : CustomError | null = null
  private errorSource = new BehaviorSubject<CustomError | null>(null);
  error$ = this.errorSource.asObservable();

  constructor(
    private router: Router
  ) { }

  throwError(error: CustomError){
    this.router.navigate([Urls.ERROR,error.redirectTo]);
    this.errorSource.next(error);
  }
}
