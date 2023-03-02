import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../core/services/ui/app.layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public layoutService: LayoutService) {}

  ngOnInit(): void {}
}
