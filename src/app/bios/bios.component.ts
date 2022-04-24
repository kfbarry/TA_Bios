import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bios',
  templateUrl: './bios.component.html',
  styleUrls: ['./bios.component.css']
})
export class BiosComponent implements OnInit {
  static ta = class ta {
    name: string;
    codingBackground: string;
    job: string;
    mostCommongLang: string;
    hobbie: string;
    funFact: string;
    constructor(name: string,codingBackground: string,job: string, mostCommonLang: string,hobbie: string,funFact: string, ){
    this.name = name;
    this.codingBackground = codingBackground;
    this.job = job;
    this.mostCommongLang = mostCommonLang;
    this.hobbie = hobbie;
    this.funFact = funFact;
    }
  }

    marcusChinery = new BiosComponent.ta ("Marcus Chinery",
    "Object Oriented Programming (Angular, React, Apex)",
    "Software Engineer",
    "Apex",
    "Writing",
    "Given how averages are calculated, combined with the fact there are some people missing an arm or at least part of it, means that 2 is an above average amount of arms."
    )

    marcusChinery2 = new BiosComponent.ta ("Marcus Chinery",
    "Object Oriented Programming (Angular, React, Apex)",
    "Astronaut",
    "Apex",
    "Writing",
    "Given how averages are calculated, combined with the fact there are some people missing an arm or at least part of it, means that 2 is an above average amount of arms."
    )
  tas: any[] = [this.marcusChinery, this.marcusChinery2];

  constructor() { }


  ngOnInit(): void {
  }

}
