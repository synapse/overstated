
/* IMPORT */

import {Provider, Subscribe} from 'unstated';
import * as compose from 'unstated-compose';
import connect from 'unstated-connect2';
import autosuspend from 'unstated-suspense-autosuspend';
import {Container as BaseContainer} from 'unstated-suspense-middleware';
import HMR from 'unstated-hmr';
import * as debug from 'unstated-debug';

/* OVERSTATED */

class Container<State extends object = {}, Context extends object | undefined = undefined> extends BaseContainer<State> {
  ctx: Context;
  autosuspend?: false | Partial<{ bubbles: number, methods: RegExp, middlewares: boolean }>;
}

/* EXPORT */

export {Container, Provider, Subscribe, autosuspend, compose, connect, debug, HMR};
