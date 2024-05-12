import axios from "axios";
import {v4 as uuidv4} from "uuid";


export async function GetAllPersons(){
    try {
        return await axios.get('http://localhost:8000/persons/')
    } catch (e) {
        console.log(e)
    }
}

export async function CreateEvent(inputs) {
    axios.post('http://localhost:8000/events/', {
        id: uuidv4(),
        title: inputs.title,
        description: inputs.description,
        time: inputs.time,
        persons: inputs.persons
    })
}