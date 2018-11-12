import { Component } from '@angular/core';
import { TodoItem } from './TodoItem';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fastTodos$: Observable<TodoItem[]>;
  slowTodos$: Observable<TodoItem[]>;
  verySlowTodos$: Observable<TodoItem[]>;

  constructor(
    private service: AppService
  ){}

  requestData() {
    this.fastTodos$ = this.service.getFromFastEndpoint();
    this.slowTodos$ = this.service.getFromSlowEndpoint();
    this.verySlowTodos$ = this.service.getFromVerySlowEndpoint();
  }

}
