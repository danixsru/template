import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mi-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mi-formulario.component.html',
  styleUrls: ['./mi-formulario.component.css']
})
export class MiFormularioComponent {
  onSubmit(formulario: any) {
    console.log('Formulario enviado', formulario.value);
  }
}