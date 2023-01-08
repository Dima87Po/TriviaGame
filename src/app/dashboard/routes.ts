import { DashboardComponent } from './dashboard.component';

export const routes: any = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'leaderboard',
        pathMatch: 'full',
      },
      {
        path: 'gameplay',
        loadChildren: () =>
          import('./modules/play/play.module').then((m) => m.PlayModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./modules/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'leaderboard',
        loadChildren: () =>
          import('./modules/leaderboard/leaderboard.module').then(
            (m) => m.LeaderboardModule
          ),
      },
      { path: '**', redirectTo: '/leaderboard' },
    ],
  },
];
