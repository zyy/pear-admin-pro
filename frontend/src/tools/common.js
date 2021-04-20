import { onUnmounted } from "vue";

/**
 * 是否生产环境
 */
export const isNotProduction = () => {
  return process.env.NODE_ENV !== 'production'
}

/**
 * 超时处理回调
 * 
 * @param number
 * @param callback
 * @returns void
 */
 export const isTimeout = (number, callback) => {
  setTimeout(() => {
    callback();
  }, number.value * 1000);
  const Interval = setInterval(() => {
    number.value--;
  }, 1000);
  onUnmounted(() => {
    clearInterval(Interval);
  });
}

/**
 * 获取 Js 集合 
 */
export const getModule = context => {
  return context.keys().reduce((modules, key) => {
    return {
      ...modules,
      ...context(key).default
    }
  }, {})
}
