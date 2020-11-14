import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulo de rotas do Angular.
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

// Para utilizar o ngModel.
import { FormsModule } from '@angular/forms';

// HttpClient.
import { HttpClientModule } from '@angular/common/http';

// Importar o Locale para configurar o pt-br.
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { rootRouterConfig } from './app.routes';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ProdutoService } from './produtos/produtos.service';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent
  ],
  imports: [
    BrowserModule,

    // import { FormsModule } from '@angular/forms';
    FormsModule,

    // import { HttpClientModule } from '@angular/common/http';
    HttpClientModule,

    // Configura as rotas raiz (root),
    // poderia ter rotas filhas utilizando o método forChild.
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })]
  ],
  providers: [
    ProdutoService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
