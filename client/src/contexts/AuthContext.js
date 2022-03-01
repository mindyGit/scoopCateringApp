import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
import { connect } from 'react-redux';
import { actions } from '../redux/actions/action';
import { axios } from "axios";
const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }, props) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)


    const createUser = (user) => {

        return fetch(`http://scoopcatering.co.il/user`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),

        }).then((res) => {

            return res.json()


        }).then((res) => {
            console.log(res)
            return res

        });

    }

    const updateUserPassword = (updateUser) => {

        return fetch('http://localhost:5002/updateUserPassword/', {

            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateUser),

        }).then((res) => {

            return res.json()


        }).then((res) => {
            console.log(res)
            return res

        });

    }





    const updateUser = async (valuse) => {

        const update_user = await updateUserPassword(valuse)
        console.log(update_user);
    };
    const createNewUser = async (valuse) => {
        console.log(valuse);
        const user = await createUser(valuse)
        console.log(user);
    };
    // const handleSubmit = async (valuse) => {

    //     console.log(props.products + ":::::props.products");
    //     const product = await props.createProduct(valuse)
    //     console.log(product);
    // };


    function signup(email, password, firstName, lastName, phoneNumber) {

        // auth.signOut()
        let result = auth.createUserWithEmailAndPassword(email, password).then(

            createNewUser({ "uid": currentUser.uid, "email": email, "password": password, "firstName": firstName, "lastName": lastName, "phone": phoneNumber })

        )
        return result

    }

    function login(email, password) {


        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {

        console.log("userLogin:" + currentUser.email);

        return auth.signOut()
    }

    function resetPassword(email) {

        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {

        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {

        updateUser({ "email": currentUser.email, "password": password })
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}






// const mapStateToProps = (state) => {
//     return {
//         users: state.userReducer.users,
//     };
// }

// const mapDispatchToProps = (dispatch) => ({
//     createUser: (user) => dispatch(actions.createUser(user))

// })
// export default connect(mapStateToProps, mapDispatchToProps)(AuthProvider)
