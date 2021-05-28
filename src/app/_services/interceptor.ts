import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, finalize} from 'rxjs/operators';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("funzio")
    let ok: string;
    let authReq: HttpRequest<any>  = req;
    if (localStorage.getItem("Token") != null) {
      let token = localStorage.getItem("Token");
      console.log("HEYYYYYY" + token) 
      authReq = req.clone({ headers: req.headers.set("Authorization", 'Bearer ' + token) });
      console.log("CIAOOOOO" + authReq)
      /*
      authReq = req.clone({ headers: req.headers.set("Authorization", 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYxNzc5OTgyMSwiZXhwIjoxNjE3ODg2MjIxfQ.h4AwEnWe35N9HektTWlV9vVo8LmiwbL5DhkL2OrZ_O5b0isFxH1JQinim9nPYKZCfZhmCOinHjup16BSAbTGxg') });
      */
    }
    return next.handle(authReq)
    .pipe(
      tap(
          event => {ok = event instanceof HttpResponse ? 'succeeded' : ''
        },
          error => { }
      ),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      }),
      finalize(() => {
      })
    );
  }
}