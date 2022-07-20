import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    'API-KEY': 'bd4ae310-899e-41ab-b129-c57668c4e43e'
  }
})


export const usersAPI = {
  getUsers(currentPage: number = 1, pageSize: number = 30) {
    return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
  }
}
export const authMeAPI = {
  authMe() {
    return instance.get(`auth/me`)
  }
}
export const followAPI = {
  follow(id: number) {
    return instance.post(`follow/` + id)
  }
}
export const unfollowAPI = {
  unfollow(id: number) {
    return instance.delete(`follow/` + id)
  }
}

export const getUserProfileAPI = {
  getUserProfile(userId: string) {
    return instance.get(`profile/` + userId)
  }
}
export const ProfileStatusAPI = {
  getStatus(userId: string) {
    return instance.get(`profile/status/` + userId)
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`,{status} )
  },

}
