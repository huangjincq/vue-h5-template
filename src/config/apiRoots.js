import { HOST_BETA, HOST_ONLINE, HOST_TEST, HOST_DEV } from './constants'

// const { location: { host: HOST, origin: ORIGIN } } = window
const {
  location: { host: HOST }
} = window

export const IS_DEV = process && process.env.NODE_ENV === 'development'

export const HOST_ENV = [HOST_BETA, HOST_ONLINE, HOST_TEST].find(key => HOST.indexOf(key) === 0) || HOST_DEV

export const prodRootMap = {
  [HOST_ONLINE]: {
    baseapi: '//baseapi.xxx.com/',
    lingxiapi: '//api.xxx.com/'
  },
  [HOST_BETA]: {
    baseapi: '//baseapi.xxx.com/',
    lingxiapi: '//api.xxx.com/'
  },
  [HOST_TEST]: {
    baseapi: '//baseapi.xxx.com/',
    lingxiapi: '//devapi.xxx.com/'
  }
}
export const prodApi = prodRootMap[HOST_TEST]

const rootObj = prodRootMap[Object.keys(prodRootMap).find(key => HOST.indexOf(key) === 0)] || {}

const DEFAULT_ROOT = '/'

const getRootStr = rootStr => {
  return rootStr || DEFAULT_ROOT
}

const PROD = {
  APIS: {
    baseapi: getRootStr(rootObj.baseapi),
    lingxiapi: getRootStr(rootObj.lingxiapi)
  }
}

const DEV = {
  APIS: {
    baseapi: DEFAULT_ROOT,
    lingxiapi: DEFAULT_ROOT
  }
}

const ENV = IS_DEV ? DEV : PROD
export default ENV.APIS
