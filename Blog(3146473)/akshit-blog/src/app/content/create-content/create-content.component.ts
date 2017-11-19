import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {ContentService} from "../shared/content.service";

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {
  isDirty:boolean=true;
  categories=['Sports','News','Business','Tech','Philosophy']

  constructor(private router:Router,
              private contentService:ContentService) { }

  ngOnInit() {
  }

  saveEvent(formValues){
    this.contentService.saveEvent(formValues).subscribe(event=>{

      console.log(formValues);
      this.router.navigate(['/blogs'])
      this.isDirty=false;
    });

  }
  cancel(){
    this.router.navigate(['/blogs'])
  }
}
