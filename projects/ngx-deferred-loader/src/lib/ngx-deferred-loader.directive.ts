import { Directive, Input, TemplateRef, ViewContainerRef, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
  selector: '[deferredLoader]',
})
export class NgxDeferredLoaderDirective {

  private DEFAULT_WAIT_LIMIT = 200;
  private isObservableCompleted

  @Input()
  deferredLoader: Observable<any>;

  @Input()
  deferredLoaderWaitMs: number;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.deferredLoader.previousValue) {
      this.isObservableCompleted = false;
    }

    if (changes.deferredLoader.currentValue) {

      changes.deferredLoader.currentValue.subscribe({
        complete: () => {
          this.isObservableCompleted = true;
          this.viewContainer.clear();
        }
      })

      setTimeout(() => {
        if (!this.isObservableCompleted) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        }
      }, this.deferredLoaderWaitMs || this.DEFAULT_WAIT_LIMIT)
    }
  }

}
