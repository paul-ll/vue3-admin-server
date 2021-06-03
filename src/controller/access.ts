import { createAccess, getAllAccess, removeAccessById, updateAccessById } from '../services/access'
import { createErrorResponse, SuccessResponse } from '../utils/Response'
import errorInfo from '../constants/errorInfo'
import { AccessModelProps } from '../db/models/access'

const {
  addAccessFailInfo,
  getAccessAllFailInfo,
  removeAccessFailInfo,
  updateAccessFailInfo
} = errorInfo

// 添加菜单资源
export const addAccessController = async (params: AccessModelProps) => {
  if (params) {
    try {
      const result = await createAccess({
        ...params
      })
      return new SuccessResponse(result)
    } catch (error) {
      console.error(error.message)
      return createErrorResponse(addAccessFailInfo)
    }
  }
}

// 获取全部菜单
export const getAccessAllController = async () => {
  try {
    const result = await getAllAccess()
    return new SuccessResponse(result)
  } catch (error) {
    console.error(error.message)
    return createErrorResponse(getAccessAllFailInfo)
  }
}

// 获取指定菜单
export const removeAccessController = async (id: number) => {
  try {
    await removeAccessById(id)
    return new SuccessResponse(null, '删除成功!')
  } catch (error) {
    console.error(error.message)
    return createErrorResponse(removeAccessFailInfo)
  }
}

// 菜单更新修改
export const updateAccessController = async (id: number, data: AccessModelProps) => {
  try {
    await updateAccessById(id, data)
    return new SuccessResponse(null, '菜单更新成功!')
  } catch (error) {
    console.error(error.message)
    return createErrorResponse(updateAccessFailInfo)
  }
}