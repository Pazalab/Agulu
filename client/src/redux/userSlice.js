import { apiSlice } from "./apiSlice";

export const userSlice = apiSlice.injectEndpoints({
        endpoints: (builder) => ({
                registerUser: builder.mutation({
                        query: (payload) => ({
                               url: "user/register",
                               method: "POST",
                               body: payload
                        })
                }),
                activateUser: builder.mutation({
                       query: (payload) => ({
                              url: "/user/account-activation",
                              method: "POST",
                              body: payload
                       })
                }),
                resendAccountCode: builder.mutation({
                        query: (payload) => ({
                                url: '/user/resend-activation-code',
                                method: "POST",
                                body: payload
                        })
                }),
                loginUser: builder.mutation({
                         query: (payload) => ({
                                  url: "/user/login",
                                  method: "POST",
                                  body: payload
                         })
                }),
                logoutMemberOut: builder.mutation({
                        query: () => ({
                                url: "/user/logout",
                                method: "POST"
                        })
                }),
                submitEmailForgotPassword: builder.mutation({
                         query: (payload) => ({
                                url: "/user/forgot-password",
                                method: "POST",
                                body: payload
                         })
                }),
                validateForgetPasscode: builder.mutation({
                        query: (payload) => ({
                                url: "/user/verify-forgot-password-code",
                                method: "POST",
                                body: payload
                        })
                }),
                resendResetPasscode: builder.mutation({
                           query: (payload) => ({
                                  url: "/user/resend-reset-password-code",
                                  method: "POST",
                                  body: payload
                           })
                }),
                resetMemberPassword: builder.mutation({
                         query: (payload) => ({
                                 url: "/user/reset-member-password",
                                 method: "PUT",
                                 body: payload
                         })
                })
        })
})

export const {
     useRegisterUserMutation,
     useActivateUserMutation,
     useResendAccountCodeMutation,
     useLoginUserMutation,
     useLogoutMemberOutMutation,
     useSubmitEmailForgotPasswordMutation,
     useValidateForgetPasscodeMutation,
     useResendResetPasscodeMutation,
     useResetMemberPasswordMutation
} = userSlice;