import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutosListaPage } from './produtos-lista';

@NgModule({
  declarations: [
    ProdutosListaPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutosListaPage),
  ],
})
export class ProdutosListaPageModule {}
