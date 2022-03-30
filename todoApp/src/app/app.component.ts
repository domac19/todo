import { Component } from '@angular/core';
import { GetApiService } from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TodoList';
  constructor(
    private api:GetApiService
  ) { }
  
  
  list:any[]=[];

  ngOnInit(){
    this.api.apiCall().subscribe((data) => {
      console.log("get api data", data);
    })
  }

  addTodo(item:string)
  { 
    this.list.push({id:this.list.length, name:item});
    console.warn(this.list);
  }


  removeTodo(id:number)
  {
    console.warn(id);
    this.list=this.list.filter(item => item.id !== id);
  }

}