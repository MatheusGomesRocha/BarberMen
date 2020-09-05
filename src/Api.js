import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


export default {

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