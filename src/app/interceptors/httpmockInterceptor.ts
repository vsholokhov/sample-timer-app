import {HttpInterceptorFn, HttpResponse} from '@angular/common/http';
import {of} from "rxjs";
const urls = [
  {
    url: 'http://localhost:8080/api/timer',
    method: 'GET',
    getData: () => {
      const min = 10;
      const max = 30;
      return {secondsLeft: Math.floor(Math.random() * (max - min) + min)};
    }
  }];

export const httpmockInterceptor: HttpInterceptorFn = (req, next) => {
  for (const element of urls) {
    if (req.method === element.method && req.url === element.url) {
      return of(new HttpResponse({status: 200, body: element.getData()}))
    }
  }
  return next(req);
};
