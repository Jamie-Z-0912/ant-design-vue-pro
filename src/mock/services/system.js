import Mock from 'mockjs2'
import { builder, getQueryParameters } from '../util'

// const totalCount = 5701

const orgTree = () => {
  console.log('======= mock org tree ======')
  return builder([
    {
      id: '01',
      title: '南京地调',
      children: [
        {
          id: '01-01',
          title: '自动化科'
        },
        {
          id: '01-02',
          title: '检验科'
        },
        {
          id: '01-03',
          title: '溧水区调'
        }
      ]
    }
  ])
}

const detail = options => {
  const parameters = getQueryParameters(options)

  return builder({
    data: {
      no: parameters,
      name: Mock.Random.cname(),
      description: '这是一段描述',
      callNo: Mock.mock('@integer(1, 999)'),
      status: Mock.mock('@integer(0, 3)'),
      updatedAt: Mock.mock('@datetime')
    }
  })
}

Mock.mock(/\/organization\/tree/, 'get', orgTree)
Mock.mock(/\/organization\/detail/, 'get', detail)
