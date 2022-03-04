import firebase from '../firebase/config/firebase-config'


const socialMediaAuth = (provider) => {
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        console.log(`${res.user.email} login succeess`);
        return res.user;
      })
      .catch((err) => {
        return err;
      });
  };

  
export default socialMediaAuth;