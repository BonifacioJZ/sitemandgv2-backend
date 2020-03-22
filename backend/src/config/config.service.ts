///Configuracion de las variables de desarrollo
//imports
import * as fs from 'fs';
import {parse} from 'dotenv'
export class ConfigService{
    private readonly envConfig:{[key:string]:string}
    
    constructor(){
        //variables de entorno
        const isDevelopmentEnv = process.env.NODE_ENV !=="production";
        

        //comprovar si estamos en desarrollo o producion
        if(isDevelopmentEnv){
            const envFilepath = __dirname+'/../../.env';
            const existsPAth = fs.existsSync(envFilepath);
         // Comprovar si existe .env   
            if(!existsPAth){
                console.log('.env file does not exist');
                process.exit(0);
            }
            //Leer archivo .env
            this.envConfig = parse(fs.readFileSync(envFilepath));
        }else{
            this.envConfig={
                PORT: process.env.PORT
            }
        }
    }
    
    get(key:string):string{
        return this.envConfig[key];
    }
}