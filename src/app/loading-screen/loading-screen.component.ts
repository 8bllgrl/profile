import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent {
  loading: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 200);
  }
}