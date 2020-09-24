import { MandarineCore, Controller, Render, ViewModel, Model, GET, RouteParam } from "https://deno.land/x/mandarinets@v2.0.0/mod.ts";
import { CoronavirusService } from "./coronavirusService.ts"


@Controller()
export class StarwarsController {

    constructor(public coronavirusData: CoronavirusService){
        
    }

    @GET('/DatosCoronavirusPaises')
    @Render('_layout.html')
    public httpHandlerView(@Model() model: ViewModel) {

        model.setAttribute("data",{
            result:  this.coronavirusData.dataCoronavirus
        });
        // returning ViewModel object.
        return model;
    }

    @GET('/GraficoCoronavirusContinentes')
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