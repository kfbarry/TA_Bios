import { Component, OnInit } from '@angular/core';
import { TA } from 'src/shared/models/TA';

@Component({
  selector: 'app-bios',
  templateUrl: './bios.component.html',
  styleUrls: ['./bios.component.css']
})
export class BiosComponent implements OnInit {
  

    marcusChinery = new TA("Marcus Chinery",
    "Object Oriented Programming (Angular, React, Apex)",
    "Software Engineer",
    "Apex",
    "Writing",
    "Given how averages are calculated, combined with the fact there are some people missing an arm or at least part of it, means that 2 is an above average amount of arms.",
    "assets/images/MarcusPhoto.jpg"
    )

    shawnTA = new TA("Shawn TA",
    "Coding since I was a kid, can give more if looking for longer",
    "A2J Tech and LaunchCode",
    "Varies with the project, if you need one just put javascript and c#",
    "Backpacking",
    "I hate imos lol",
    "assets/images/ShawnPhoto.jpg"
    )

    lawrence = new TA("Lawrence",
    "LC grad",
    "FedEx",
    "Java spring boot sql angular",
    "Helping others break into tech",
    "Lots of people brag about breaking into tech in 1 year or 6 months. It 'only' took me 25 years",
    "assets/images/LawrencePhoto.jpeg"
    )

    safna = new TA ("Safna",
    "Masters in Computer Application",
    "Quality Assurance Engineer Assc (IT)",
    "Java",
    "Love travelling, cruising and gardening",
    "Love travelling especially road trip",
    "assets/images/SafnaPhoto.jpg"
    )

    colin = new TA ("Colin",
    "Self taught, started with HTML, moved to JS and haven't stopped yet!",
    "Backend developer at RX Global",
    "Right now it's PHP :confused:",
    "Making things (code projects, lights, tiny electrical shiz)",
    "... I'm not very interesting...",
    "assets/images/ColinPhoto.jpeg"
    )

    dakotahPrasun = new TA ("Dakotah Prasun",
    "Total boot camp guy, I took a local bootcamp first, was unable to get a job with that so I turned to launchCode for my 2nd bootcamp and landed a job right after",
    "Im a Software Engineer with Vizient.",
    "Kotlin/SQL/Angular",
    "Im a gamer at heart.",
    "For about a year I played Semi-Pro Esports. The game was Paladins and we won several small tournaments. I have met and played against the main roaster of G2 and Leviathan Esports",
    "assets/images/DakotahPhoto.jpeg"
    )

    clarkRoman = new TA ("Clark Roman",
    "Some VBA, before completing Code Camp with Python and C#",
    "Candidate Engagement Manager at Launchcode",
    "JavaScript, but I’m working a lot with Java lately",
    "Listening to audiobooks while walking my high-energy dog - we go at least 4 miles a day!",
    "I volunteer with dog transports in Missouri - this means I’m a dog Uber for rescue animals on their way to their forever homes",
    "assets/images/ClarkPhoto.jpg"
    )


    
  tas: TA[] = [this.marcusChinery, this.shawnTA, this.lawrence, this.safna, this.colin, this.dakotahPrasun, this.clarkRoman];

  constructor() { }


  ngOnInit(): void {
  }

  displayInfo(){
    let x = document.getElementById("infoDisplay");
    if(x != null){
      if(x!.style.display == "none"){
        x!.style.display = "block";
      } else{
        x!.style.display = "none";
      }
    }
    
    console.log("function is working")
    
  }

 

}
