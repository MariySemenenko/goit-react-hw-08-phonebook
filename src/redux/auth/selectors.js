export const selectIsLoggedIn = state => state.auth.isLoggedIn

export const selectUser = state => state.auth.selectUser

export const selectIsRefreshing = state => state.auth.isRefreshing
//далі імпортую селектори у  хук useAuth