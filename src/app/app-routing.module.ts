import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  // tslint:disable-next-line: max-line-length
  { path: 'type-document-list', loadChildren: () => import('./pages/type-document-list/type-document-list.module').then(m => m.TypeDocumentListPageModule) },
  { path: 'list-documents', loadChildren: () => import('./pages/list-document/list-document.module').then(m => m.ListDocumentPageModule) },
  { path: 'menu', loadChildren: './Pages/components/menu/menu.module#MenuPageModule' },
  { path: 'tabs', loadChildren: './Pages/components/tabs/tabs.module#TabsPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
