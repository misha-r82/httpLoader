import {Component, Input, OnInit} from '@angular/core';
import {GitItem} from '../gitItem.model';

@Component({
  selector: 'app-project-list-view',
  templateUrl: './project-list-view.component.html',
  styleUrls: ['./project-list-view.component.css']
})
export class ProjectListViewComponent {
  @Input() items: GitItem[];
  @Input() showChecked : boolean;
  localSearch : string;

  onLocalSearchChanged($event: Event)
  {
    //console.log(this.showChecked);
    this.localSearch = (event.target as HTMLInputElement).value;
  }
}
