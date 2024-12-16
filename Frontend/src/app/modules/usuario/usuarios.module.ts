import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsuarioComponent } from './pages/usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    UsuarioComponent
  ],
    imports: [
        CommonModule,
        UsuariosRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        MatIconModule
    ]
})
export class UsuariosModule { }
