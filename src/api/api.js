import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "a1c48c24-1c33-4474-808e-1bce3f00f0bb"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance            
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(id) {
        return instance
            .post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollow(id) {
        return instance
            .delete(`follow/${id}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getUserProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(file) {
        const formData = new FormData();
        formData.append("image", file)
        return instance.put(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile);
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    },
}