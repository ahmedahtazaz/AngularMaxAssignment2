import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'ahtazaz';

  getIsButtonDisabled = () => {
    return this.name == '';
  }

  onButtonClicked = () => {
    this.name = '';
  }
}
