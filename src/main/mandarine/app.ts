import { MandarineCore, Controller, Render, ViewModel, Model, GET, RouteParam } from "https://deno.land/x/mandarinets@v2.0.0/mod.ts";
import { CoronavirusService } from "./coronavirusService.ts"


@Controller()
export class StarwarsController {

    constructor(public coronavirusData: CoronavirusService){
        
    }

    @GET('/hello-world')
    public httpHandler() {
        return `Hello world`;
    }

    @GET('/starwars')
    public handlerStarwars() {
        return "A long time ago in a galaxy far, far away....";
    }


    @GET('/jedi/:name')
    public handlerHelloJedi(@RouteParam('name') jediName: string): string {
        return `Hello ${jediName}, to the Light side of the Force`;
    }

    @GET('/path-template')
    @Render('_layout.html')
    public httpHandlerView(@Model() model: ViewModel) {

        model.setAttribute("data",{
            result:  this.coronavirusData.dataCoronavirus
        });
        // returning ViewModel object.
        return model;
    }

    @GET('/path-templateChart')
    @Render('_layoutChart.html')
    public httpHandlerViewChart(@Model() model: ViewModel) {

        model.setAttribute("data",{
            result: JSON.stringify(this.coronavirusData.dataCoronavirus)
        });
        // returning ViewModel object.
        return model;
    }


}

new MandarineCore().MVC().run();