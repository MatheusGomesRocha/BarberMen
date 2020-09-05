import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


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
                    alert('Conta criada com sucesso. Agora faça o login')
                    navigation.reset({
                        routes:[
                            {name: 'preload'}
                        ]
                    })
                })

            })
            .catch(error => {
                if(error.code == 'auth/email-already-in-use') {     // Erro que acontece caso já tenha um usuário com o mesmo email
                    alert('Este email já está cadastro, tente outro');

                    return
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
                        alert('Email ou senha incorreta');
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
                    alert('Houve algum problema, tente novamente mais tarde');
                }
            })

        return res;
    }

    


  
}