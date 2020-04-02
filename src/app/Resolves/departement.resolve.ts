import { DepartementFacade } from './../State/Departement/departement.facade';
import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { filter, take } from "rxjs/operators";

@Injectable()
export class DepartementResolver implements Resolve<boolean> {
  constructor(private DF:DepartementFacade) {}

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    const loaded$ = this.DF.DeptLoaded$;
    console.log("resolver")
    return loaded$.pipe(
      filter(loaded => {
        if (loaded === false) {
            this.DF.loadDepts();
        }

        return loaded;
      }),
      take(1)
    );
  }
}