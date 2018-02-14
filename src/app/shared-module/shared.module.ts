import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget/widget.component';
import { BdbLoggerService } from './bdb-logger.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WidgetComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ BdbLoggerService ]
    };
  }

}
