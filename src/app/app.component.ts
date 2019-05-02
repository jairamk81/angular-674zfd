
import { Component } from '@angular/core';

export type EditorType = 'address' | 'map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-flask';
  derivedAddress :any[];

  editor: EditorType = 'address';

  get showAddressSearch() {
    return this.editor === 'address';
  }

  get showHeatMap() {
    return this.editor === 'map';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }

}
