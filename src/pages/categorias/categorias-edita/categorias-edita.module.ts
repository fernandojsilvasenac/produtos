import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriasEditaPage } from './categorias-edita';

@NgModule({
  declarations: [
    CategoriasEditaPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriasEditaPage),
  ],
})
export class CategoriasEditaPageModule {}
