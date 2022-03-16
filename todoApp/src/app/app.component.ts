import { Component } from '@angular/core';
import { GetApiService } from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private api:GetApiService
  ) { }
  
  title = 'TodoList';

  list:any[]=[];

  ngOnInit(){
    this.api.apiCall().subscribe((data) => {
      console.warn("get api data", data);
    })
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
