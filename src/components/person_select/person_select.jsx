import React, {useEffect, useState} from 'react';
import {Autocomplete} from "@mui/joy";


export function PersonSelect({setInputs, persons = []}) {
    const [selectedOptions, setSelectedOptions] = useState([]);

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
                options={persons}
                getOptionLabel={(option) => option.name + "  (" + option.id.split("-")[0] + ")"}
                onChange={(event, newValue) => {
                    setSelectedOptions(newValue);
                }}
            />
        </>
    );
}