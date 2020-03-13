
import Vue from 'vue'
import localForage from 'localforage';

declare module 'vue/types/vue' {
  interface Vue {
    // @ts-ignore
    $localForage: localForage
  }
}
