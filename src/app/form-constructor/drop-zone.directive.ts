import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDropZone]'
})
export class DropZoneDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
  }

}
