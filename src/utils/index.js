import * as fetch from 'axios'

const baseURL = process.env.NODE_ENV == "development" ? '/api' : '/'

export class axios {
  static instance = fetch.create({
    baseURL: baseURL,
    timeout: 20000
  })

  static get(url, data, config){
    return new Promise((resolve, reject) => {
      this.instance.get(url, {params: data}, config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  static xhr(url, data, config, methods){
    return new Promise((resolve, reject) => {
      this.instance[methods](url, data, config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  static post(url, data, config){
    return this.xhr(url, data, config, 'post')
  }
}
