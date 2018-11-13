import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable()
export class SecurityInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header
    const clonedRequest = req.clone({headers: req.headers.set('authorization', 'Bearer '+environment.apiKey)});

    console.log('va');
    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
  }
}
