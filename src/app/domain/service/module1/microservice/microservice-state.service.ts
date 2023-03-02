import { Injectable } from '@angular/core';
import { State } from 'src/app/core/store/State';
import { MicroserviceService } from 'src/app/data/remote/module1/microservice/microservice.service';
import { Security } from 'src/app/domain/interface/module1/security.interface';
import { UserStateService } from '../../configuration/user-state.service';
export interface StateGlobal {
  rowData: Array<Security>
  data: any
}
const initialState: StateGlobal = {
  rowData: [],
  data: Object
};
@Injectable({
  providedIn: 'root'
})
export class MicroserviceStateService extends State<StateGlobal> {

  constructor(private _microserviceService: MicroserviceService, private _user: UserStateService) {
    super(initialState);
  }

  /**
   * 
   */
  public getState(): void {
    let model = {}
    this._microserviceService.getData<Array<Security>>(model).subscribe((resp) => {
      //transformacion de datos
      this.setState({ rowData: resp });
    });
  }

  /**
   * 
   */
  public getStateDemo(): void {
    let model = {}
    this._microserviceService.getDataDemo(model).subscribe((resp) => {
      //transformacion de datos
      this.setState({ data: resp.data });
    });
  }

  /**
   * 
   * @param data 
   */
  public setStateSecurity(data: any): void {
    this.setState({ rowData: data });
  }
}
