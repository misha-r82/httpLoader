import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {GitItem} from '../gitItem.model';

@Component({
  selector: 'app-git-project-view',
  templateUrl: './git-project-view.component.html',
  styleUrls: ['./git-project-view.component.css']
})
export class GitProjectViewComponent {
@Input() item: GitItem;

  onSelectCick($event: Event)
  {
    this.item.selected = (event.target as HTMLInputElement).checked;
  }
}
