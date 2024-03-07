import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


export class Usuario{
  constructor(
    public nombre?: string,
    public apellidos?: string,
    public edad?: number,
    public user?:string,
    public contraseña?: string,
  ){ }
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent implements OnInit {

  public myForm : FormGroup;
  public usuarios : Array<Usuario> = [];

  constructor(public fb: FormBuilder){
    this.myForm = this.fb.group({
        nombre: new FormControl('',Validators.required),
        apellidos: new FormControl('', Validators.required),
        edad: new FormControl('',[Validators.required, Validators.min(0), Validators.max(105)]),
        user : new FormControl('',Validators.required),
        contraseña: new FormControl('',Validators.required),
    });
    
  }

  ngOnInit(){ }

  

  saveData() {
    console.log(this.myForm.value.nombre);
    console.log(this.myForm.value.apellidos)
    console.log(this.myForm.value.edad)
    console.log(this.myForm.value.user)
    console.log(this.myForm.value.contraseña)
    console.log(this.usuarios)


    this.usuarios.push(this.myForm.value);
    this.myForm.reset();
  }
}
