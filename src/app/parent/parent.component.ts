import { Component, OnInit } from '@angular/core';
import { PCconceptService } from '../pcconcept.service';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  Sname
  constructor(private service: PCconceptService) {
    this.Sname=service.value
  }

  ngOnInit(): void {
  }

}
