import "@/styles/globals.css";
import { GoogleOAuthProvider } from '@react-oauth/google';

import '../styles/dashboard.css';
import '../styles/employeeaccount.css';
import '../styles/findjob.css';
import '../styles/modal.css';
import '../styles/profilemodal.css'




export default function App({ Component, pageProps }) {
  return (
    <>

      <GoogleOAuthProvider clientId="293747968456-84qeprfp7jp1r9g4nk8l61rbvsk0lak0.apps.googleusercontent.com">

        <Component {...pageProps} />;

      </GoogleOAuthProvider>
    </>
  );



}
