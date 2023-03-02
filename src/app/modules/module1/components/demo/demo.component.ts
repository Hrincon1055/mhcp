import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MicroserviceStateService } from 'src/app/domain/service/module1/microservice/microservice-state.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  public oResult$: Observable<any>;

  constructor(private _microserviceStateService: MicroserviceStateService) {
    this.oResult$ = this._microserviceStateService.select(item => item.rowData)
  }

  ngOnInit(): void {
  }

}
