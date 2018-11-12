import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { TodoItem } from './TodoItem';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  getFromFastEndpoint(): Observable<TodoItem[]> {
    return new Observable<TodoItem[]>((observer) => {
      setInterval(() => {
        observer.next([
          { name: 'Learn Angular' },
          { name: 'Prepare slides' },
          { name: 'Write more docs' }
        ]);
        observer.complete();
      }, 200)
    })
  }

  getFromSlowEndpoint(): Observable<TodoItem[]> {
    return new Observable<TodoItem[]>((observer) => {
      setInterval(() => {
        observer.next([
          { name: 'Learn Angular' },
          { name: 'Prepare slides' },
          { name: 'Write more docs' }
        ]);
        observer.complete();
      }, 2000)
    })
  }

  getFromVerySlowEndpoint(): Observable<TodoItem[]> {
    return new Observable<TodoItem[]>((observer) => {
      setInterval(() => {
        observer.next([
          { name: 'Learn Angular' },
          { name: 'Prepare slides' },
          { name: 'Write more docs' }
        ]);
        observer.complete();
      }, 4000)
    })
  }

}
