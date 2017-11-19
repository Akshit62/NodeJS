import { Component, OnInit } from '@angular/core';
import {ContentService} from "./shared/content.service";
import {IBlog} from "./shared/content.model";
import {isString} from "util";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  error:string;
  content:IBlog[];
  constructor(private contentService:ContentService) { }

  ngOnInit() {
    this.contentService.getEvents().subscribe(events=>{
        this.content = events
      console.log(events);
    },
      error=>{
      this.error="Invalid id";
      }
      )
  }

}
