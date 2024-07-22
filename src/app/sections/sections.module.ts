import { CommonModule } from "@angular/common";
import { FormSections } from "./sections.component";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [FormSections],
  imports: [CommonModule],
  providers: [],
  bootstrap: [FormSections],
  exports: [FormSections]
})

export class SectionsModule{}
