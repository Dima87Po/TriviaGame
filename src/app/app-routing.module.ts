import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// TODO: leaderbopard, gameplay and profile should be nested to dashboard?
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'login-home',
    loadChildren: () =>
      import('./login-home/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'gameplay',
    loadChildren: () => import('./play/play.module').then((m) => m.PlayModule),
  },
  {
    path: 'login-home',
    loadChildren: () =>
      import('./login-home/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'leaderboard',
    loadChildren: () =>
      import('./leaderboard/leaderboard.module').then((m) => m.LeaderboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
