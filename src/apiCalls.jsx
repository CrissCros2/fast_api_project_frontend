import axios from "axios";


export async function GetAllPersons(){
    try {
        return await axios.get('http://localhost:8000/persons/')
    } catch (e) {
        console.log(e)
    }
}