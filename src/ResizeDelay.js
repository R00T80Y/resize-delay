/* eslint-disable no-constructor-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/**
 * @file ResizeDelay(Singleton)
 * @description Class for optimised handling of the <resize> event
 * @author r00t80y<https://github.com/R00T80Y>
 * @since 29-11-2021
 * @modify 14-02-2022
 * @version 1.0.0
 */

export default class ResizeDelay {
  constructor(delay) {
    if (typeof ResizeDelay._instance === 'object') return ResizeDelay._instance;

    this.delay = delay || 66;

    this._window = window;
    this._timer = null;
    this._callbacks = [];
    this._isRunning = false;

    this.method = this.resize.bind(this);

    this._window.addEventListener('resize', this.method);

    ResizeDelay._instance = this;

    return this;
  }

  resize() {
    if (this._isRunning) {
      return false;
    }

    if (this._timer) {
      clearTimeout(this._timer);
    }

    this._isRunning = true;

    this._timer = setTimeout(() => {
      if (this._window.requestAnimationFrame) {
        this._window.requestAnimationFrame(this.run.bind(this));
      } else {
        setTimeout(this.run.bind(this), 66);
      }
    }, this.delay);

    return true;
  }

  /**
 * @description Bypasses the queue and calls the added <callbacks>
 * @returns {}
 */
  run() {
    this._callbacks.forEach(function (callback) {
      if (this.isFunction(callback)) {
        callback();
      }
    }, this);

    this._isRunning = false;
  }

  /**
 * @param {function} func
 * @description Checks this function or not
 * @returns {boolean}
 */
  // eslint-disable-next-line class-methods-use-this
  isFunction(func) {
    return func && {}.toString.call(func) === '[object Function]';
  }

  /**
 * @param {function} callback
 * @description Add <callback> to queue
 * @returns {boolean} Returns <false> if there is no such index in the array <this._callbacks>
 */
  add(callback) {
    if (!this.isFunction(callback)) {
      return false;
    }

    const self = this;
    const currentCallbackIndex = this._callbacks.push(callback) - 1;

    return function () {
      self.remove(currentCallbackIndex);
    };
  }

  /**
   * @param {number} index
   * @description Remove <callback> from queue
   * @returns {boolean} Returns <false> if there is no such index in the queue
   */
  remove(index) {
    if (!this._callbacks[index]) {
      return false;
    }

    this._callbacks.splice(index, 1);

    return true;
  }

  destroy() {
    this._window.removeEventListener('resize', this.method);
  }
}
