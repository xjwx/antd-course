import { ApplyPluginsType } from '/Users/xujingwen/gitskills/antd-course/node_modules/_@umijs_runtime@3.1.1@@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/HelloWorld",
    "exact": true,
    "component": require('@/page/HelloWorld.js').default
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
