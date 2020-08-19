import { NgModule } from '@angular/core';

import { AppRoutes } from './app.routes';

import { AppComponent } from './components';
import { __DECLARATION, __IMPORTS, __PROVIDERS, __ENTRY_COMPONENTS } from "./components.barrel";


@NgModule({
  declarations: [__DECLARATION],
  imports: [__IMPORTS, AppRoutes,],
  providers: [__PROVIDERS],
  bootstrap: [AppComponent],
  entryComponents: [__ENTRY_COMPONENTS]
})
export class AppModule { }
