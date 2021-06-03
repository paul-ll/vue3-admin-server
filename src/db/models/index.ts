import UserModel from './user'
import AccessModel from './access'
import RolesModel from './roles'
import RoleAccessModel from './roleAccess'
import UserRoleModel from './userRole'

// 外键关联 建立从属关系
;(() => {
  // RoleMenuModel.role_id = UserModel.id
  RoleAccessModel.belongsTo(RolesModel, {
    foreignKey: 'role_id'
  })
  // RoleMenuModel.role_id = AccessModel.id
  RoleAccessModel.belongsTo(AccessModel, {
    foreignKey: 'access_id'
  })

  // 双向关联 有利于双向联表查询
  RolesModel.hasMany(RoleAccessModel, {
    foreignKey: 'role_id'
  })
  AccessModel.hasMany(RoleAccessModel, {
    foreignKey: 'access_id'
  })

  // UserRoleModel.role_id = RolesModel.id
  UserRoleModel.belongsTo(RolesModel, {
    foreignKey: 'role_id'
  })
  // UserRoleModel.role_id = UserModel.id
  UserRoleModel.belongsTo(UserModel, {
    foreignKey: 'user_id'
  })

  // 双向关联 有利于双向联表查询
  RolesModel.hasMany(UserRoleModel, {
    foreignKey: 'role_id'
  })
  UserModel.hasMany(UserRoleModel, {
    foreignKey: 'user_id'
  })
})()

export {
  UserModel,
  AccessModel,
  RolesModel,
  RoleAccessModel,
  UserRoleModel
}