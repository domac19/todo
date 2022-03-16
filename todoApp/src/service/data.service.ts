 import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';


 let LOCAL_PATH = "http://localhost:51083";
 
 @Injectable({
    providedIn: 'root'
  })
 export class DataService {

    constructor(private http: HttpClient) {}

    public getTodos() {
        return this.http.get(`http://localhost:51083/todos`);
    }

    //createTodo

    createTodo() {
        return this.http.post(`${LOCAL_PATH}/todos`, {}); // body
    }

    updateTodo(id: number) {
        return this.http.put(`${LOCAL_PATH}/todos/${id}`, {}); // updated body
    }

    deleteTodo(id: number) {
        return this.http.get(`${LOCAL_PATH}/todos/${id}`);
    }

}