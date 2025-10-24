"use server";

import { AuthError } from "next-auth";
import { SigninFormSchema } from "./definations";
import { signIn, signOut } from "@/auth"; 
import axios from "axios";
import { isRedirectError } from "next/dist/client/components/redirect-error";

  
export async function authenticate(prevState, formData) {

   const email = formData.get("email");
   const password = formData.get("password");

    const validatedFields = SigninFormSchema.safeParse({
        email,
        password,
    });

     Credentials({
          async authorize(credentials) {
            const validator = z
              .object({
                username: z.string().email(),
                password: z.string().min(6),
              })
              .safeParse(credentials);
    
            if (validator.success) {
              const { username, password } = validator.data;
              if (username === "exe@example.com" && password === "123456") {
                return {
                  id: 1,
                  name: "Rishi",
                  email: "exe@example.com",
                };
              }
            }
            return null;
          }
        }
     )
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            formData: { email }, // Return form data to preserve values
        };
    }


  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function login(state, formData) {
    const validatedFields = SigninFormSchema.safeParse({
        username: formData.get("username"),
        password: formData.get("password"),
    });

    // console.log('logging new signin method:',  validatedFields?.error?.flatten()?.fieldErrors);

    if (validatedFields.success) {
        try {
            const resp = await axios.post(
              'http://localhost:3001/api/auth',
              JSON.stringify({
                username: formData.get('username'),
                password: formData.get('password')
              }),
              {
                headers: {
                  "Content-Type": 'application/json'
                }
            });

            console.log('Response from Axios', resp.data);

            if(resp?.data?.ok) {
                console.log('Token Received can proceed to logging user in.');

                await signIn('credentials', formData);
            } else {
                console.log('Returning Error from api auth response');

                return {
                    errors: {
                        "somedata": 'yes'
                    },
                    inputData: {
                        email: formData.get('username')
                    },
                    message: resp.data.msg
                }
            }
        } catch (e) {
            console.log('Error occurred while hitting api server for authentication', e);

            if (isRedirectError(e)) {
                console.error('Redirect error!: ', e);

                throw e;
            }

            return {
                errors: {
                    "somedata": 'yes'
                },
                inputData: {
                    email: formData.get('username')
                },
                message: e
            }
        }
    } else {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            inputData: {
                email: formData.get('username')
            }
        }
    }
}

export async function logout() {
  await signOut({ redirectTo: "/" }); 
}
