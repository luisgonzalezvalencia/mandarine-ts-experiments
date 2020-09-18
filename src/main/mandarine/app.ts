import { MandarineCore, Controller, GET, RouteParam } from "https://deno.land/x/mandarinets@v2.0.0/mod.ts";

    @Controller()
    export class StarwarsController {

        @GET('/hello-world')
        public httpHandler() {
            return "Welcome to MandarineTS Framework!";
        }

        @GET('/starwars')
        public handlerStarwars() {
            return "A long time ago in a galaxy far, far away....";
        }


        @GET('/jedi/:name')
        public handlerHelloJedi(@RouteParam('name') jediName: string): string {
            return `Hello ${jediName}, to the Light side of the Force`;
        }

       
    }

new MandarineCore().MVC().run();