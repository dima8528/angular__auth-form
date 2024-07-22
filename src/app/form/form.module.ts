import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppForm } from "./form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SectionsModule } from "../sections/sections.module";

@NgModule({
  declarations: [AppForm],
  imports: [CommonModule, ReactiveFormsModule, SectionsModule],
  providers: [],
  bootstrap: [AppForm],
  exports: [AppForm]
})

export class FormModule {}
