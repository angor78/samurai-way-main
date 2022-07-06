import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    'API-KEY': 'bd4ae310-899e-41ab-b129-c57668c4e43e'
  }
})


export const usersAPI = {
  getUsers(currentPage: number = 1, pageSize: number = 30)  {
    return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  }
}
export const authMeAPI = {
  authMe(){
    return instance.get(`auth/me`).then(response=>response.data)
  }
}
export const followAPI ={
  follow(id:number){
    return instance.post(`follow/`+id).then(response=>response.data)
  }
}
export const unfollowAPI ={
  unfollow(id:number){
    return instance.delete(`follow/`+id).then(response=>response.data)
  }
}
