import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriasListaPage } from './categorias-lista';

@NgModule({
  declarations: [
    CategoriasListaPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriasListaPage),
  ],
})
export class CategoriasListaPageModule {}
