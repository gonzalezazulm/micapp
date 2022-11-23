import { Injectable } from '@angular/core';
import { Usuario } from '../app/usuario';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
//declaramos usuariosCollection a privado
private usuariosCollection: AngularFirestoreCollection<Usuario>
private isLoged = false 
//lo conectamos con la base de datos
constructor(private db:AngularFirestore) { 
  this.usuariosCollection = db.collection('Usuarios');
}
//obtenemos los usuarios de base de datos
obtenerUsuarios(){
  return this.usuariosCollection.snapshotChanges().pipe(map(action=>action.map(a=>a.payload.doc.data())))
}
estaLogueado(){
  return this.isLoged
}

}
