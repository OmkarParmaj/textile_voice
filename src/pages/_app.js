import "@/styles/globals.css";
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function App({ Component, pageProps }) {
  return (
    <>

      <GoogleOAuthProvider clientId="293747968456-84qeprfp7jp1r9g4nk8l61rbvsk0lak0.apps.googleusercontent.com">

        <Component {...pageProps} />;

      </GoogleOAuthProvider>
    </>
  );



}
