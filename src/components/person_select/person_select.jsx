import React, {useEffect, useState} from 'react';
import {Autocomplete} from "@mui/joy";


export function PersonSelect({setInputs, persons = [], multiple = true}) {
    const [selectedOptions, setSelectedOptions] = useState([]);

    useEffect( () => {
        setInputs(prevInputs => ({
            ...prevInputs,
            persons: selectedOptions
        }));
    }, [selectedOptions, setInputs])

    const getLabel = (option) => {
        if (option.name === undefined)
        {
            return "Persons..."
        }
        else
        {
            return option.name
        }
    };

    return (
        <>
            <Autocomplete
                data-testid="select-persons"
                value={selectedOptions}
                multiple={multiple}
                options={persons}
                getOptionLabel={(option) => getLabel(option)} // + "  (" + option.id.split("-")[0] + ")"}
                onChange={(event, newValue) => {
                    setSelectedOptions(newValue);
                }}
                />
        </>
    );
}