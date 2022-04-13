import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bios',
  templateUrl: './bios.component.html',
  styleUrls: ['./bios.component.css']
})
export class BiosComponent implements OnInit {
  tas: any[] = [
    { name: "Marcus Chinery",
      codingBackground: "Object Oriented Programming",
      job: "Software Engineer",
      mostOftenUsedLanguage: "Apex",
      hobby: "Writing",
      funFact: "Given how averages are calculated, combined with the fact that there are some people missing an arm or at least part of it, means that 2 is an above average amount of arms."
    }];

 
  constructor() { }



  ngOnInit(): void {
  }

}
