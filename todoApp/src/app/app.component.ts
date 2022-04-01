import { Component } from '@angular/core';
import { GetApiService } from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TodoList';
  data:any;
  constructor(private api:GetApiService) {}
  
  ngOnInit(){
    this.api.apiCall().subscribe((result) => {
      console.log("get api data", result)
      this.data = result
    })
  }  
  
  list:any[]=[];

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