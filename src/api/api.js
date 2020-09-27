import * as axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "5afd3737-41a5-4367-a3b7-96ea9eddb798"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getProfile(userId) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    }
}

export const followUnfollowAPI = {
    makeUnfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    makeFollow(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    }
}

export const authAPI = {
    checkAuth() {
        return instance.get(`auth/me`)
    }

}
