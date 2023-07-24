import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"

export const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          }),
          CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username",type:"text",placeholder:"Your Username" },
                password: { label: "Password",type:"password",placeholder:"Your Password" }
            },
            async authorize(credentials) {
                const user = {id:20 , name:"Andrew Simon", username: "andrew" , password: "andrew000"}
                if(credentials.username === user.username && credentials.password === user.password) {
                    //correct user
                    return user
                }else {
                    return null
                }
            }
            
        })
    ]
}