import type { PiniaPluginContext } from 'pinia'

const piniaPluginReset = ({ store }: PiniaPluginContext) => {
  const initialState = JSON.parse(JSON.stringify(store.$state))
  store.$reset = () => {
    store.$patch(JSON.parse(JSON.stringify(initialState)))
  }
}

export default piniaPluginReset
export { piniaPluginReset }
