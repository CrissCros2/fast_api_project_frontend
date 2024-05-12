import React, {useEffect, useState} from 'react';
import {Autocomplete} from "@mui/joy";


export function PersonSelect({setInputs, persons}) {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [peopleList, setPeopleList] = useState(persons);

    useEffect(() => {
        setPeopleList(persons);
    }, [persons]);

    useEffect( () => {
        setInputs(prevInputs => ({
            ...prevInputs,
            persons: selectedOptions
        }));
    }, [selectedOptions, setInputs]);

    return (
        <>
            <Autocomplete
                data-testid="select-persons"
                value={selectedOptions}
                multiple={true}
                options={peopleList}
                getOptionLabel={(option) => option.name + "  (" + option.id.split("-")[0] + ")"}
                onChange={(event, newValue) => {
                    setSelectedOptions(newValue);
                }}
            />
        </>
    );
}