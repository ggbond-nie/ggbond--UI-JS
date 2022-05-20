import gButton from './index.vue'

gButton.install = (app: any) => {
  app.component(gButton.name, gButton)
}
export default gButton
