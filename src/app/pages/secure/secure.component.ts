import { Component } from '@angular/core';
import {BackendService} from "../../backend.service";

@Component({
  selector: 'app-secure',
  standalone: true,
  imports: [],
  templateUrl: './secure.component.html',
  styleUrl: './secure.component.css'
})
export class SecureComponent {

  constructor(private backendService: BackendService) {}

  handleGetClicked() {
    // Call the get method from the BackendService
    this.backendService.get("/secure").subscribe((data) => {
      console.log(data);
    });
  }

}
