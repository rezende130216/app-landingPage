import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterServiceService } from '../../services/newsletter-service.service';

@Component({
  selector: 'app-new-form',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  templateUrl: './new-form.component.html',
  styleUrl: './new-form.component.scss',
  providers:[NewsletterServiceService]
})
export class NewFormComponent {
  newForm!: FormGroup;

  constructor(private service: NewsletterServiceService){
    this.newForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  onSubmit(){
   if(this.newForm.valid){
    this.service.sendData(this.newForm.value.nome, this.newForm.value.email).subscribe({next: () =>{
      this.newForm.reset();
    }
    });
   }
  }
}
