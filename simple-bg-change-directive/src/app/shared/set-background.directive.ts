/*Using ElementRef , we can manipulate DOM Elements.
but we cannot manipulate DOM elements fully in server-side
that's why we are not manipulating DOM elements with only the elementRef.
Using Renderer2 , an abstraction class which fasiclitates the manipulation of DOM.

This approach is recommended as apps can be developed in the envirnoments where there is no direct DOM access ( like node.js , native mobile , etc.)
*/

import { Directive , ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector : '[appSetBg]' 
})

export class SetBackgroundDirective {

  constructor(private ref : ElementRef, private renderer : Renderer2) {
    this.setBgColor('yellow');
  }

  setBgColor(color : string ) {
    //this is direct manipulation using elementRef which is not recommended.
    // this.ref.nativeElement.style.background = color;

    this.renderer.setStyle(this.ref.nativeElement, "background" , color);
  }
}