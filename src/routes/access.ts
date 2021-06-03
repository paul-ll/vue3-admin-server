import Router from '@koa/router'
import {
  addAccessController,
  getAccessAllController,
  removeAccessController,
  updateAccessController
} from '../controller/access'

const router = new Router({
  prefix: '/api/access'
})

/**
* 添加菜单
* post /api/access/menu
*/
router.post('/menu', async (ctx) => {
  ctx.body = await addAccessController(ctx.request.body)
})

/**
* 获取菜单
* get /api/access/menu
*/
router.get('/menus', async (ctx) => {
  ctx.body = await getAccessAllController()
})

/**
* 删除某一个菜单
* delete /api/access/menu
*/
router.delete('/menu/:id', async (ctx) => {
  const { id } = ctx.params
  console.log('id', ctx.params)
  ctx.body = await removeAccessController(Number(id))
})

/**
* 编辑某一个菜单
* put /api/access/menu/:id
*/
router.put('/menu/:id', async (ctx) => {
  const { id } = ctx.params
  ctx.body = await updateAccessController(Number(id), ctx.request.body)
})

export default router