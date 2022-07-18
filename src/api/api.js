import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "465e45bb-1042-4ce6-8cf8-33af506d870e",
      },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance
        .get(
          `users?page=${currentPage}&count=${pageSize},`,).then(response => {
              return response.data;
          })
        },

    follow(userId) {
      return instance
      .post(
        `follow/${userId}`,
      )
    },

    unfollow(userId) {
      return instance
      .delete(
        `follow/${userId}`,
      )
    },

    getProfile(userId) {
      return instance
      .get(`profile/${userId}`);
    }
}

export const authAPI = {
    me() {
       return instance
      .get(`auth/me`)
    }
}




