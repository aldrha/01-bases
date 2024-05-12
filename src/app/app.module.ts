import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

//cuando se crea un componente hay que importarlo en los modulos para poder usarlo
@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HeroesModule,
		ContadorModule,
		DbzModule
	],
	providers: [

	],
	bootstrap: [ AppComponent ],
})
export class AppModule { }
