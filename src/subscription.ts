import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 1802,
  name: 'GKD_CN_AppPurifier',
  version: 1,
  author: 'warmfulate',
  checkUpdateUrl: './warmfulfate_gkd.version.json5',
  supportUri: 'https://github.com/warmfulfate/GKD_CN_AppPurifier/issues',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
