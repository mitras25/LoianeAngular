import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExemploPipeComponent } from './exemplo-pipe/exemplo-pipe.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingService } from './setting.service';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ExemploPipeComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    //modo mais simples
    //{ provide: LOCALE_ID, useValue: 'pt-BR' }    

    SettingService,
    {
      provide: LOCALE_ID,
      deps: [SettingService],
      useFactory: (settingService: any) => settingService.getLocale()

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
