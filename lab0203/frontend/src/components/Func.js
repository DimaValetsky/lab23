// import axios from "axios";
//
// export function deleteTask(id){
//         let token = localStorage.getItem('token');
//         axios.delete('http://localhost:8000/tasks/' + id + '/',
//             {headers: {'Authorization': 'Bearer ' + token}})
//
//             .catch(function (error) {
//                 if (error.response.status === 401) {
//                     alert('You have to be logged in to do this!');
//                 }
//             });
//     }