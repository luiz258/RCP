import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then(m => m.HomePageModule)
  },
  // tslint:disable-next-line: max-line-length
  {
    path: "type-document-list",
    loadChildren: () =>
      import("./pages/type-document-list/type-document-list.module").then(
        m => m.TypeDocumentListPageModule
      )
  },
  // tslint:disable-next-line: max-line-length
  {
    path: "list-documents:id",
    loadChildren: () =>
      import("./pages/list-document/list-document.module").then(
        m => m.ListDocumentPageModule
      )
  },
  {
    path: "menu",
    loadChildren: () =>
      import("./Pages/components/menu/menu.module").then(m => m.MenuPageModule)
  },
  {
    path: "tabs",
    loadChildren: "./Pages/components/tabs/tabs.module#TabsPageModule"
  },
  {
    path: "create-project",
    loadChildren:
      "./Pages/create-project/create-project.module#CreateProjectPageModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
