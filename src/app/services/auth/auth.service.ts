import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  loginPayload,
  loginResponse,
} from 'src/app/features/interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _httpClient: HttpClient) {}

  login(payload: loginPayload): Observable<loginResponse> {
    return this._httpClient.post<loginResponse>(
      'https://dummyjson.com/auth/login',
      payload
    );
  }
}
