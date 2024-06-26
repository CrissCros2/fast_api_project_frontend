import axios from "axios";
import {v4 as uuidv4} from "uuid";

export async function GetAllPersons(setPersons){
    const result = await axios.get('http://localhost:8000/persons/')
        .catch((error) => {
            return error;
        });
    setPersons(result.data);
}

export async function CreatePerson(personName) {
    axios.post('http://localhost:8000/persons/?person_name=' + personName, {})
        .catch((error) => {
            return error;
        });
}

export async function DeletePerson(personId) {
    axios.delete('http://localhost:8000/persons/' + personId)
        .catch((error) => {
            return error;
        });
}

export async function CreateEvent(inputs) {
    axios.post('http://localhost:8000/events/', {
        id: uuidv4(),
        title: inputs.title,
        description: inputs.description,
        time: inputs.time,
        persons: inputs.persons
    })
        .catch((error) => {
            return error;
        });
}