import { definePlugin } from '@tryvienna/sdk';
import { ProfileMenuBarIcon } from './ui/MenuBarIcon';
import { ProfileMenuBarContent } from './ui/MenuBarContent';

export const profilePlugin = definePlugin({
  id: 'devops_badge',
  name: 'DevOps / Platform Engineer',
  description: 'Tools for infrastructure and operations',
  icon: { text: '☁️' },

  integrations: [],
  entities: [],

  canvases: {
    'menu-bar': {
      icon: ProfileMenuBarIcon,
      component: ProfileMenuBarContent,
      label: 'DevOps / Platform Engineer',
      priority: 50,
    },
  },
});
