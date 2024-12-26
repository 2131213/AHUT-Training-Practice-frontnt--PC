import http from "@/http";
import { User, ListParam } from "./UserModel";
//新增
export const addSysUserApi = (param: User) => {
    return http.post("/api/sysUser", param)
}
//列表
export const getListApi = (param: ListParam) => {
    return http.get("/api/sysUser/getList", param)
}
//编辑
export const editApi = (param: User) => {
    return http.put("/api/sysUser", param)
}
//删除
export const deleteApi = (userId: string) => {
    return http.delete(`/api/sysUser/${userId}`)
}