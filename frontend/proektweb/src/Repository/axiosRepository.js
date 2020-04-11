import axios from 'axios'
import qs from 'qs'

const BearsService = {

    loadMyBears: () => {
        return axios.get('http://localhost:8081/mybears?user=natv', {
        headers: {'Content-Type':'application/json',
                    'Access-Control-Allow-Origin': '*',
            }
        })
    },
    loadExplore: () => {
        return axios.get('http://localhost:8081/explore', {

        })
    },
    loadOpinions: () => {
        return axios.get('http://localhost:8081/opinions?u=natv',{

        })
    },
    addBear: (newBear) => {
        const options = {
            encode: false,
            arrayFormat: 'comma',
            indices: false


        };

        const formParams = qs.stringify(newBear, options);
        console.log(formParams);
        return axios.post("http://localhost:8081/mybears/add", formParams, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',

            }
        })
    },
    editBear: (bear, bearName) => {
        const options = {
            encode: false,
            arrayFormat: 'comma',
            indices: false


        };

        let urlString = "http://localhost:8081/mybears/" + bearName + "/edit"

        const formParams = qs.stringify(bear, options);
        return axios.patch(urlString, formParams, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',

            }
        })

    },
    AddGrade: (newGrade, bearName) => {

        let urlString="http://localhost:8081/opinions/" + bearName + "/rate"
        console.log(urlString);

        const formParams = qs.stringify(newGrade);
        debugger;
        return axios.post(urlString, formParams, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',

            }
        });
    },
    editGrade: (newGrade, bearName) => {
        let urlString="http://localhost:8081/opinions/" + bearName + "/editOpinion"
        console.log(urlString);

        const formParams = qs.stringify(newGrade);
        debugger;
        return axios.post(urlString, formParams, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',

            }
        });
    },
    addAddition: (newAddOn) => {
        const formParams = qs.stringify(newAddOn);
        console.log(newAddOn);
        return axios.post("http://localhost:8081/additions/add",formParams, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',

            }
        });
    },
    addClothes: (newCl) => {
        const formParams = qs.stringify(newCl);
        return axios.post("http://localhost:8081/clothes/add",formParams, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',

            }
        });
    },
    deleteBear: (bear) => {
        let urlString="http://localhost:8081/mybears/" + bear + "/delete"
        console.log(urlString);

        return axios.delete(urlString, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',

            }});
    },
    addUser: (user) => {
        const formParams = qs.stringify(user);
        return axios.post("http://localhost:8081/register",formParams, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',

            }
        });
    },
    deleteOpinion: (opinion) => {
        let urlString="http://localhost:8081/opinions/" + opinion.name + "/delete"
        const formParams = qs.stringify(opinion);
        console.log(formParams);

        return axios.delete(urlString,  {

            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',

            }});
    },
    addOrder: (order) => {
        let urlString="http://localhost:8081/createOrder/" + order.b
        console.log(urlString);
        const qorder = qs.stringify(order)
        return axios.post(urlString, qorder, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',

            }});
    }

}

export default BearsService;