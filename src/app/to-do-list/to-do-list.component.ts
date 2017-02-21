import { Component, OnInit } from '@angular/core';
import {ListService} from "./list.service";

@Component({
  selector: 'et-to-do-list',
  template: `
    <div class="flexRow">
      <md-card align="center" style="width: 100%">
        <md-card-title>To Do List</md-card-title>
      </md-card>
    </div>
    
    <div class="flexRow" style="margin-top: 1em; margin-left: 1em">
      <md-input-container>
        <input md-input type="text" placeholder="New Item" [(ngModel)]="itemString">
      </md-input-container>
      <button md-mini-fab color="primary" (click)="addItem()" ><md-icon>add</md-icon></button>
    </div>
    
    <div class="flexRow" style="margin: 1em">
          <md-card *ngFor="let item of listArray; let i = index" style="margin: 1em">
            <md-card-title>{{item}}</md-card-title>
            <md-card-actions align="end">
              <button md-mini-fab color="accent"><md-icon>check</md-icon></button>
              <button md-mini-fab color="warn" (click)="removeItem(i)"><md-icon>delete</md-icon></button>
            </md-card-actions>
          </md-card>
    </div>
  `,
  styles: []
})
export class ToDoListComponent implements OnInit {


  private itemString: string = "";

  private listArray: any = [];

  addItem(){
    this.listArray.push(this.itemString);
    this.itemString = "";
  }

  removeItem(index){
    this.listArray.splice(index, 1);
  }

  constructor(private listService: ListService) { }

  ngOnInit() {
  }

}
