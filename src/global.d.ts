import Vue, { VueConstructor } from 'vue';
import {
  LbzuiOptions as Options,
  VueScrollPosition as ScrollPosition,
} from '../types';

declare global {
  // tslint:disable no-empty-interface
  interface LbzuiOptions extends Options {}

  // vue-scroll
  // tslint:disable no-empty-interface
  interface VueScrollPosition extends ScrollPosition {}

  interface Window {
    Vue?: VueConstructor;
  }

  interface LbzComponentAttributes {
    is: string;
    to?: string | object;
    replace?: boolean;
    append?: boolean;
    tag?: string;
    exact?: boolean;
    event?: string | string[];
    exactActiveClass?: string;
    disabled?: boolean;
    [key: string]: any;
  }

  interface LbzStateAttributes {
    class: string;
    type?: string;
    background?: string;
    darkened?: boolean;
    ripple?: boolean;
    unbounded?: boolean;
    centered?: boolean;
  }
}
