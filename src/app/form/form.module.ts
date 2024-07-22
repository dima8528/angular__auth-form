import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppForm } from "./form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FormModule } from "../sections/sections.module";

@NgModule({
  declarations: [ AppForm],
  // imports: [CommonModule],
  imports: [CommonModule, ReactiveFormsModule, FormModule],
  providers: [],
  bootstrap: [AppForm],
  exports: [AppForm]
})

export class FormModule1 {}
