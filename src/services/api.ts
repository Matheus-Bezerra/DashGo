import axios, {AxiosError} from 'axios'
import Router  from 'next/router'
import {parseCookies, setCookie, destroyCookie} from 'nookies'
import { signOut } from '../contexts/AuthContext'

let cookies = parseCookies()
let isRefetching = false
let failedRequestQueue = []

export const api = axios.create({
    baseURL: 'http://localhost:3000/api'
})

export const apiAuth = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        Authorization: `Bearer ${cookies['nextauth.token']}`
    }
})

apiAuth.interceptors.response.use(response => {
    return response
}, (error: AxiosError) => {
    if (error.response.status === 401 ) {
        // @ts-ignore
        if (error.response.data?.code === 'token.expired') {
            // renovar token
            cookies = parseCookies()
            const {'nextauth.refreshToken': refreshToken} = cookies
            const originalConfig = error.config

            if(!isRefetching) {
                isRefetching = true
                apiAuth.post('/refresh', {
                    refreshToken
                }).then(res => {
                    const {token} = res.data
    
                    setCookie(undefined, 'nextauth.token', token, {
                        maxAge: 60 * 60 * 24 * 30, // 30 dias
                        path: '/',
                      });
                      setCookie(undefined, 'nextauth.refreshToken', res.data.refreshToken, {
                        maxAge: 60 * 60 * 24 * 30, // 30 dias
                        path: '/',
                      });
    
                    api.defaults.headers['Authorization'] = `Bearer ${token}`;

                    failedRequestQueue.forEach(req => req.onSuccess(token))
                    failedRequestQueue = []

                }).catch(err => {
                    failedRequestQueue.forEach(req => req.onFailure(err))
                    failedRequestQueue = []
                }).finally(() => {
                    isRefetching = false
                })
            }

            return new Promise((resolve, reject) => {
                failedRequestQueue.push({
                    onSuccess: (token: string) => {
                        originalConfig.headers['Authorization'] = `Bearer ${token}`

                        resolve(apiAuth(originalConfig))
                    },
                    onFailure: (err: AxiosError) => {
                        reject(err)
                    }
                })
            })
        } else {
            // signOut()
        }
    } 

    return Promise.reject(error)
})