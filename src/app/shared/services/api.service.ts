import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'http://127.0.0.1:3000';
  constructor(private http: HttpClient) {}
  getCars(page: number, limit: number): Observable<any> {
    let params = new HttpParams()
      .set('_page', page.toString())
      .set('_limit', limit.toString());

    return this.http
      .get<any[]>(`${this.url}/garage`, { params, observe: 'response' })
      .pipe(
        map((response: HttpResponse<any[]>) => {
          const totalCountHeader = response.headers.get('X-Total-Count');
          const totalItems = totalCountHeader
            ? parseInt(totalCountHeader, 10)
            : 0;
          return {
            data: response.body,
            totalItems: totalItems,
          };
        })
      );
  }
}
