export {}

// import React, {
//   useContext,
//   createContext,
//   useState,
//   useEffect,
//   ReactNode,
//   useReducer,
// } from 'react'
// import { auth } from '../libs/firebase'
// import firebase from 'firebase'
// import { Statement } from 'typescript'

// const AuthContext = createContext(undefined)

// type AuthProviderProps = {
//   children: ReactNode
// }

// export function useAuth() {
//   return useContext(AuthContext)
// }

// export function AuthProvider({ children }: AuthProviderProps) {
//   // const [state, setState] = useState()

//   function login(email: string, password: string) {
//     return signInWithEmailAndPassword(auth, email, password)
//   }
//   const value = { state, dispatch }

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
// }
