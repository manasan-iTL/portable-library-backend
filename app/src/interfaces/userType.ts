
export interface User {
    user_id: number,
	email: string,
	username: string
} 

export type Users = Array<User>

export interface CreateUser {
	email: string,
	password: string,
	username: string
}

export interface UpdateUser {
	email?: string,
	password?: string,
	username?: string,
}

export interface LoginQuery {
	email: string,
	password: string
}

export interface LogoutQuery {
	id: number
}