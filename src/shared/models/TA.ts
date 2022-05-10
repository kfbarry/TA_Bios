export class TA {
    
        name: string;
        codingBackground: string;
        job: string;
        mostCommonLang: string;
        hobbie: string;
        funFact: string;
        photo: string;
        hidePicture: Boolean = true;
        displayingInfo: Boolean = false;

        constructor(name: string,codingBackground: string,job: string, mostCommonLang: string,hobbie: string,funFact: string, photo: string, ){
        this.name = name;
        this.codingBackground = codingBackground;
        this.job = job;
        this.mostCommonLang = mostCommonLang;
        this.hobbie = hobbie;
        this.funFact = funFact;
        this.photo = photo;
        }
      
        changeDisplayInfo(){
            console.log("displayInfo");
            if(this.displayingInfo == false){
                this.displayingInfo = true;
                this.hidePicture = false;
            } else{
                this.displayingInfo = false;
                this.hidePicture = true;
            }
            console.log(this.name);
            console.log(this.displayingInfo);
        }
}
