import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Asistente } from 'src/app/interfaces/asistente';
import { Asociaciones } from 'src/app/interfaces/asociaciones';
import { PreinscribirService } from 'src/app/services/preinscribir.service';
import { MandatoryComponent } from '../../dialog/mandatory/mandatory.component';
import { RegisterKOComponent } from '../../dialog/register-ko/register-ko.component';
import { RegisterOKComponent } from '../../dialog/register-ok/register-ok.component';

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.css']
})
export class RegistrateComponent implements OnInit {

  form:FormGroup;
  selectedAso:boolean = true;

  asociacionList:Asociaciones[] = [{id:0, desc: 'Si'}, {id:1, desc:'No'}];

  constructor(private formBuilder: FormBuilder,
              public dialog: MatDialog,
              private preinscribirService: PreinscribirService) {
    this.form = this.formBuilder.group({
      name: '',
      surname: '',
      email:'',
      cp: '',
      age: '',
      selectAso: new FormData(),
      txtAso: ''
    })
   }

  ngOnInit(): void {
  }

  selectedAsociacion():void{
    if(this.selectAso != null){
      let value = this.selectAso.value;
      if(value == 0){
        this.selectedAso = false;
      }else{
        this.selectedAso = true;
        this.form.get('txtAso')?.setValue('');
      }

      console.log(this.selectedAso);
    }
  }

  registrarse(){

    let nombre:string = '';
    let apellidos:string = '';
    let email:string = '';
    let cp:number = 0;
    let age:number = 0;
    let txtAso:string = '';

    let error:boolean = false;

    if(this.name != null && typeof this.name.value === 'string' && this.name.value != ''){
      nombre = this.name.value;
    }else{
      error = true;
    }

    if(this.surname != null && typeof this.surname.value === 'string' && this.surname.value != ''){
      apellidos = this.surname.value;
    }else{
      error = true;
    }

    if(this.email != null && typeof this.email.value === 'string' && this.email.value != ''){
      email = this.email.value;
    }else{
      error = true;
    }

    if(this.cp != null){
      cp = Number(this.cp.value);
    }else{
      error = true;
    }

    if(this.age != null){
      age = Number(this.age.value);
    }else{
      error = true;
    }

    if(this.txtAso != null && typeof this.txtAso.value === 'string'){
      txtAso = this.txtAso.value;
    }

    if(error){
      this.dialog.open(MandatoryComponent);
    }else{

      const asistente:Asistente = {
        nombre: nombre,
        apellidos: apellidos,
        email:email,
        cp: cp,
        edad:age,
        txtAsociacion: txtAso != null ? txtAso != '' ? txtAso: '' : ''
      }

      /*this.preinscribirService.preinscribete(asistente).subscribe ( res =>{
        const dialogOK = this.dialog.open(RegisterOKComponent);

        dialogOK.afterClosed().subscribe(result =>{
          this.form.reset();
        })

      }, err =>{
        this.dialog.open(RegisterKOComponent, {data: {
          error: err
        }});
      })*/
    }

  }

  get name(){
    return this.form.get('name');
  }


  get surname(){
    return this.form.get('surname');
  }

  get email(){
    return this.form.get('email');
  }

  get cp(){
    return this.form.get('cp');
  }

  get age(){
    return this.form.get('age');
  }

  get selectAso(){
    return this.form.get('selectAso');
  }

  get txtAso(){
    return this.form.get('txtAso');
  }

}
