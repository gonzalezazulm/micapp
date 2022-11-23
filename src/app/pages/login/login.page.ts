import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../usuario';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  authService: any;
  router: any;
modalVisible: any;

Usuarios = new FormGroup({
  nombreusuario: new FormControl ('', Validators.required),
  contrasena: new FormControl ('', Validators.required)
})


// Declaraciones

adminVisible = false;
coleccionUsuario: Usuario[] = [];
  personaVisible: boolean;
 



//MOSTRAMOS EL VERIFICAR USUARIO
mostrar(){
  this.verificarUsuario();
}

verificarUsuario(){
  this.coleccionUsuario.forEach(usuario => {
    if(this.Usuarios.valid){
      if(usuario.nombreusuario===this.Usuarios.value.nombreusuario!){
        if(usuario.contrasena===this.Usuarios.value.contrasena!){
          alert ("Inicio sesión correctamente")
          this.personaVisible=true;
          this.ngOnInit()
        }else{
          alert ("La contraseña es incorrecta")
        }
      }
      else{
        alert ("algunos de los datos son incorrectos")
      }
    }else{
      alert("los campos están vacios")
    }
    this.modalVisible=false;
    this.Usuarios.reset();
  });
}
  
  constructor(private ServicioLogin: LoginService) { }

  ngOnInit() {
    this.ServicioLogin.obtenerUsuarios().subscribe(usuarios=>this.coleccionUsuario=usuarios)
  }
  login(form){
    this.authService.login(form.value).subscribe((res)=>{
      this.router.navigateByUrl('home');
    });
  }
}
