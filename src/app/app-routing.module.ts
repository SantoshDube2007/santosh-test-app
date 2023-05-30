import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from './shell/shell.service';

// this will route module wise - lazy loaded modules
const routes: Routes = [
  Shell.childRoutes([
    { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
    { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
    { path: 'users', loadChildren: () => import('./users/user.module').then((m) => m.UserModule) }
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}

