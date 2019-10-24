import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';
import { RoutesService } from './routes.service';

@NgModule({
  imports: [CommonModule],
  providers: [{ provide: ErrorHandler, useClass: ErrorHandlerService }]
})
export class TrackerModule {
  // To Do:
  // config clientSide and production
  // receibe routes in forRoot
  // load metadata
  constructor(routesService: RoutesService) {
    routesService.init();
  }
}
