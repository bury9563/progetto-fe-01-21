import { Injectable } from "@angular/core";
import { Router, CanActivate} from "@angular/router";

@Injectable()

export class AuthGuard implements CanActivate{
    constructor(private router:Router){}

    canActivate(){
      console.log('guard');
        if(localStorage.getItem('Token')){
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

}
