import { auth, provider, storage } from '../../firebase/firebase-config'
import db from '../../firebase/firebase-config'
import { SET_USER, SET_LOADING_STATUS, GET_ARTICLES } from './actionType'


export const setUser = (payload) => ({
    type: SET_USER,
    user: payload
})
export function signInAPI() {
    return (dispatch) => {
        auth.signInWithPopup(provider).then((payload) => {
            // console.log(payload.user);
            dispatch(setUser(payload.user))
        }).catch((error) => {
            console.log(error);
        })
    }
}

export function getUserAuth() {
    return (dispatch) => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUser(user));
            }
        })
    }
}

export const setLoading = (status) => {
    return {
        type: SET_LOADING_STATUS,
        status: status
    }
}

export const getArticles = (payload) => {
    return {
        type: GET_ARTICLES,
        payload: payload
    }
}

export function signoutAPI() {
    return (dispatch) => {
        auth.signOut()
            .then(() => {
                dispatch(setUser(null))
            })
            .catch(error => {
                console.log(error.message);
            })
    }
}


export function postArticleAPI(payload) {
    return (dispatch) => {
        dispatch(setLoading(true))
        if (payload.image !== '') {
            const upload = storage.ref(`images/${payload.image.name}`).put(payload.image);
            upload.on('state_changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(`Progress : ${progress}%`);
                if (snapshot.state === "RUNNING") {
                    console.log(`Progress : ${progress}%`);

                }
            }, (error) => console.log(error, "error.code323232"),
                async () => {
                    const downloadURL = await upload.snapshot.ref.getDownloadURL();
                    db.collection('articles').add({
                        actor: {
                            description: payload.user.email,
                            title: payload.user.displayName,
                            date: payload.timestamp,
                            image: payload.user.photoURL
                        },
                        video: payload.video,
                        sharedImg: downloadURL,
                        comments: 0,
                        description: payload.description
                    })
                    dispatch(setLoading(false))
                }
            )
        } else if (payload.video) {

            db.collection('articles').add({
                actor: {
                    description: payload.user.email,
                    title: payload.user.displayName,
                    date: payload.timestamp,
                    image: payload.user.photoURL
                },
                video: payload.video,
                sharedImg: "",
                comments: 0,
                description: payload.description
            })
            dispatch(setLoading(false))

        }
    }
}


export const getArticleAPI = () => {
    return (dispatch) => {
        let payload;

        db.collection('articles').orderBy("actor.date", "desc")
            .onSnapshot((snapshot) => {
                payload = snapshot.docs.map((doc) => doc.data())
                console.log(payload);
                dispatch(getArticles(payload))
            })
    }
}


