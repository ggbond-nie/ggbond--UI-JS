import gBotton from './button/index'

const install = (app: any) => {
  app.use(gBotton)
}
const GUI = {
  install,
}
export { gBotton }
export default GUI
