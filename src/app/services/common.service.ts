import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  GetBlogs(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/photos', {}).pipe(
      map((response: any) => {
        console.log('response',response)
        const blogs: any[] = (<Array<any>>response) as any[];
        let result = blogs.map((x) => ({
          id: x.id,
          title: x.title,
          url: x.url,
          thumbnailUrl: x.thumbnailUrl
        }));
        console.log('service response')
        return result;
      }),
      catchError((error) => {
        console.error('error caught in Get blogs method' + error);
        throw Error;
      })
    );
  }
  
  GetPosts(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts', {}).pipe(
      map((response: any) => {
        const blogs: any[] = (<Array<any>>response) as any[];
        let result = blogs.map((x) => ({
          id: x.id,
          title: x.title,
          body: x.body
        }));
        return result;
      }),
      catchError((error) => {
        console.error('error caught in Get posts method' + error);
        throw Error;
      })
    );
  }

  GetUsers(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users', {}).pipe(
      map((response: any) => {
        const blogs: any[] = (<Array<any>>response) as any[];
        let result = blogs.map((x) => ({
          id: x.id,
          name: x.name,
          email: x.email,
          phone: x.phone,
          website: x.website
        }));
        return result;
      }),
      catchError((error) => {
        console.error('error caught in Get users method' + error);
        throw Error;
      })
    );
  }
}
