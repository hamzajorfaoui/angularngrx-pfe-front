import { Dept_Fillfacade } from './../State';

import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { filter, take } from "rxjs/operators";


@Injectable()
export class Dept_FillResolver implements Resolve<boolean> {
  constructor(private DDF:Dept_Fillfacade) {}

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    const loaded$ = this.DDF.Dept_Fill_LOADED$;
    return loaded$.pipe(
      filter(loaded => {
        if (loaded === false) {
            this.DDF.loadDept_Fill()
        }

        return loaded;
      }),
      take(1)
    );
  }
}