export class Tag {

    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'green');
    static readonly EXPRESSJS = new Tag('Express JS', 'blue');
    static readonly MONGOOSE = new Tag('Mongoose', 'orange');
    static readonly BOOTSTRAP = new Tag('Bootstrap', 'brown');
    static readonly WEATHERAPI = new Tag('WeatherAPI.com', 'gray');


    private constructor(public readonly name: string, public readonly color: string){

    }

    // toString(){
    //     return this.key;
    // }

}