import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieApiServiceService } from '../service/movie-api-service.service';

export class Usuario {
  constructor(
    public username?: string,
    public edad?: number,
    public password1?: string,
    public password2?: string,
    public rol?: number,
    public sexo?: string,
    public email?: string,
  ) {}
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  public myForm: FormGroup;
  public usuarios : Array<Usuario> = [];

  constructor(public fb: FormBuilder, private apiService: MovieApiServiceService) {
    this.myForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password1: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      rol: new FormControl('', [Validators.required, Validators.min(2), Validators.max(3)]),
      sexo: new FormControl('', Validators.required),
      edad: new FormControl('', [Validators.required, Validators.min(0), Validators.max(105)]),
    });
  }

  ngOnInit() {}
 

  saveData() {
    /*
    console.log(this.myForm.value.nombre);
    console.log(this.myForm.value.apellidos)
    console.log(this.myForm.value.edad)
    console.log(this.myForm.value.user)
    console.log(this.myForm.value.contraseña)
    console.log(this.usuarios)


    this.usuarios.push(this.myForm.value);
    this.myForm.reset(); 
    */
    if (this.myForm.valid) {
      const nuevoUsuario: Usuario = this.myForm.value;
  
      this.apiService.crearUsuario(nuevoUsuario).subscribe(
        (respuesta) => {
          console.log('Usuario creado con éxito:', respuesta);
          // Puedes mostrar un mensaje al usuario, redirigir, etc.
          this.myForm.reset();
        },
        (error) => {
          console.error('Error al crear usuario:', error);
          // Puedes mostrar un mensaje de error al usuario
        }
      );
    } else {
      console.error('Formulario no válido. Revisa los campos.');
    }
  }
}
