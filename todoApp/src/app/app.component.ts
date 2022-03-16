import { Component } from '@angular/core';
import { DataService } from 'src/service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private dataService: DataService,
  ) { }
  
  title = 'TodoList';

  list:any[]=[];

  ngOnInit(){
    console.log(this.dataService.getTodos());
  }

  addTodo(item:string)
  {
    //this.dataService.addTodo()
    this.list.push({id:this.list.length, name:item});
    console.warn(this.list);
  }

  //update todo

  removeTodo(id:number)
  {
    //dataservice
    console.warn(id);
    this.list=this.list.filter(item => item.id !== id);
  }

  
}
