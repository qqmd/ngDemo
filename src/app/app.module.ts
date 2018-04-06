import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { TemplateInterpolationComponent } from './template-interpolation/template-interpolation.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';
import { ValueBindingComponent } from './value-binding/value-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { FontResizerComponent } from './twoway-binding/font-resizer/font-resizer.component';
import { TestPipeComponent } from './test-pipe/test-pipe.component';
import { TestNgModelComponent } from './test-ng-model/test-ng-model.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateInterpolationComponent,
    TemplateRefVarComponent,
    ValueBindingComponent,
    TwowayBindingComponent,
    EventBindingComponent,
    FontResizerComponent,
    TestPipeComponent,
    TestNgModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
