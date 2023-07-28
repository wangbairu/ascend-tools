import myRequest from '../request'

export function getTikToolData() {
  return myRequest.get({ 
    url: "/tik-tool" 
  })
}