import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutosEditaPage } from './produtos-edita';

@NgModule({
  declarations: [
    ProdutosEditaPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutosEditaPage),
  ],
})
export class ProdutosEditaPageModule {}
