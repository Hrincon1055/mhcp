import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import * as api from 'src/app/core/constant/url-api';
import { IRespuestaApi } from 'src/app/core/interface/respuesta-api.interface';
import { ApiRequestService } from 'src/app/core/services/api-request.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MicroserviceService {
  constructor(private _apiRequest: ApiRequestService) {}

  /**
   *
   * @param model
   * @returns
   */
  public getData<T>(model: any): Observable<T> {
    let route = `${environment.apiSecurity}/${api.URLCONTROLADOR.Security}/${api.URLACCION.getInfo}`;

    return this._apiRequest.post<T>(route, model).pipe(
      map((response) => {
        return response;
      })
    );
  }

  /**
   *
   * @param model
   * @returns
   */
  public getDataDemo(model: any): Observable<IRespuestaApi> {
    let route = `${environment.apiSecurity}/${api.URLCONTROLADOR.Security}/${api.URLACCION.getInfo}`;

    return this._apiRequest.post<IRespuestaApi>(route, model).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
