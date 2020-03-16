import axios from 'axios'
export const register = newUser => {

return axios

.post(`users/register`, {username: newUser.username,
                    email: newUser.email,
                    password: newUser.password,
                    password2: newUser.password2,
                    phn: newUser.phn})

.then(response => {console.log('Registered',response)})


}

export const login = user => {

    return axios
    .post(`users/login`,{email: user.email,password: user.password    }) 

    .then(res => {

        localStorage.setItem('usertoken', res.data.token)
        return res.data
    })

    .catch(err => {console.log('Invalid Email & Password' , + err)})

}


export const getUser = id => {

return axios
//.get('users/getuser/${id}') 
.get(`users/getuser/${id}`)
.then(response => {

    return response

})
.catch(err => {
   return err
})

}