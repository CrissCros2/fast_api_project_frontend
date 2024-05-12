import React, {useEffect, useState} from 'react';
import {Autocomplete} from "@mui/joy";


export function PersonSelect({inputs, setInputs, persons}) {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [peopleList, setPeopleList] = useState(persons);

    useEffect(() => {
        setPeopleList(persons);
    }, [persons]);

    useEffect( () => {
        setInputs({
            ...inputs,
            persons: selectedOptions
        });
    }, [selectedOptions, inputs, setInputs]);

    return (
        <>
            <Autocomplete
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