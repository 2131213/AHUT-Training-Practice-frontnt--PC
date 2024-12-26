export type User = {
    userId?: string,
    username: string,
    password: string,
    nickName: string,
    phone: string,
    sex: string,
    status: string
}

//定义列表查询的参数
export type ListParam = {
    curPage: number,
    pageSize: number,
    nickName: string,
    total?: number
}