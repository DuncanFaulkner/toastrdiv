import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  template: `
  <h1><a (click)="onClick()">Click</a></h1>
  <div toastContainer class="toast-top-left"></div>
`,
})
export class AppComponent implements OnInit {
  @ViewChild(ToastContainerDirective) toastContainer: ToastContainerDirective;

  constructor(private toastrService: ToastrService) {}
  ngOnInit() {
    this.toastrService.overlayContainer = this.toastContainer;
  }
  onClick() {
    this.toastrService.success('in div');
  }
}
