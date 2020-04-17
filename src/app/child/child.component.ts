import { Component, OnInit } from '@angular/core';
import { PCconceptService } from '../pcconcept.service';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  Sname
  constructor(private service: PCconceptService) {
    this.Sname=service.value
  }
  ngOnInit(): void {
  }

}

