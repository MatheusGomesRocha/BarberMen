import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

export default {

    signUp: async(name, email, password, navigation) => {
        const res =
            auth()      // Cria um usuário com email e senha no firebase Auth
            .createUserWithEmailAndPassword(email, password)   
            .then(() => {       
                auth()
                .signInWithEmailAndPassword(email, password);  // Depois de criar no Auth é feito o login
                const user = auth().currentUser;    // Pega o usuário logado (que acabou de logar junto com o cadastro)
                firestore()                         // Seta os dados preenchidos em uma collection "users" no firestore
                .collection('users')
                .doc(user.uid)                      // O doc que é a identificação do Documento, irá receber o uid(ID) do usuário
                .set({
                    id: user.uid,
                    name: name,
                    email: email,
                    password: password,
                })
                .then(() => {
                    Alert.alert(
                        "Login",
                        "Conta criada com sucesso. Agora faça o login",
                        [
                          { text: "OK" }
                        ],
                        { cancelable: false }
                      );
                    navigation.reset({
                        routes:[
                            {name: 'preload'}
                        ]
                    })
                })

            })
            .catch(error => {
                if(error.code == 'auth/email-already-in-use') {     // Erro que acontece caso já tenha um usuário com o mesmo email
                    Alert.alert(
                        "Error",
                        "Este email já está cadastro, tente outro",
                        [
                          { text: "OK" }
                        ],
                        { cancelable: false }
                      );
                }
            })
    },

    login: async (email, password) => {
        const res = 
                auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    return true;
                })
                .catch(error => {   // Caso email ou senha foram digitados incorretamentes
                    if (error) {
                        Alert.alert(
                            "Error",
                            "Email ou senha incorreto",
                            [
                              { text: "OK" }
                            ],
                            { cancelable: false }
                          );
                    }
                });

        return res;  
    },

    setAppointment: async (id, barberId, barberName, userId, serviceId, serviceName, servicePrice, selectDay, selectMonth, selectYear, selectHour) => {
        const res =
            firestore()
            .collection('appointments')
            .add({
                id: id,
                barberId: barberId,
                barberName: barberName,
                userId: userId,
                serviceId: serviceId,
                serviceName: serviceName,
                servicePrice: servicePrice,
                date: selectDay+'/'+selectMonth+'/'+selectYear,
                hour: selectHour,
                done: false
            })
            .then(() => {
                return true;
            })
            .catch(error => {
                if(error) {
                    Alert.alert(
                        "Error",
                        "Houve algum problema, tente novamente mais tarde",
                        [
                          { text: "OK" }
                        ],
                        { cancelable: false }
                      );
                }
            })

        return res;
    },

    updateProfile: async (userId, name, email, password) => {
        const res = 
            firestore()     // Realiza o update 
            .collection('users')
            .doc(userId)
            .update({
                name: name,
                email: email,
                pass: password,                    
            })
            .then(() => {
                Alert.alert(
                    "Sucesso",
                    "Usuário editado",
                    [
                      { text: "OK" }
                    ],
                    { cancelable: false }
                  );          
            });

        return res;
    },

    getBarbers: async () => {
       let list = [];

       let results = await firestore().collection('barbers').get();

       results.forEach(result => {
           let data = result.data();
           list.push({
               id: data.id,
               name: data.name,
               stars: data.stars,
           })
       })

       return list
    },

    getUserLogin: async (id) => {
        let list = [];

        let results = await firestore().collection('users').where('id', '==', id).get();

        results.forEach(result => {
            let data = result.data();
            list.push({
                id: data.id,
                email: data.email,
                name: data.name,
                password: data.password,
            })
        })

        return list
    },

    getServicesByBarber: async (barberId) => {
        let list = [];

        let results = await firestore().collection('cuts').where('barberId', '==', barberId).get();

        results.forEach(result => {
            let data = result.data();
            list.push({
                id: data.id,
                barberId: data.barberId,
                name: data.name,
                price: data.price,
            })
        })

        return list
    },

    getComments: async (barberId) => {
        let list = [];

        let results = await firestore().collection('comments').where('barberId', '==', barberId).get();

        results.forEach(result => {
            let data = result.data();
            list.push({
                userId: data.userId,
                barberId: data.barberId,
                userComment: data.userComment,
                userName: data.userName,
            })
        })

        return list
    },

    getAppointments: async (userId) => {
        let list = [];
 
        let results = await firestore().collection('appointments').where('userId', '==', userId).get();
 
        results.forEach(result => {
            let data = result.data();
            list.push({
                id: data.id,
                barberName: data.barberName,
                serviceName: data.serviceName,
                servicePrice: data.servicePrice,
                date: data.date,
                hour: data.hour,
                done: data.done,
            })
        })
 
        return list
     },


}