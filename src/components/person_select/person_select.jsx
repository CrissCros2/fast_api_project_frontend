import React, {useEffect, useState} from 'react';
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import {GetAllPersons} from "../../apiCalls";


export function PersonSelect(handleChange) {
    const [data, setData] = useState(null)
    const [selectedOptions, setSelectedOptions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await GetAllPersons();
            setData(result.data);
        };
        fetchData()
    }, []);

    const handleOptionClick = (item) => {
        const selectedIndex = selectedOptions.findIndex(option => option.id === item.id);
        if (selectedIndex === -1) {
            setSelectedOptions([...selectedOptions, item]);
            handleChange([...selectedOptions, item]); // Update parent component state directly
        } else {
            const updatedOptions = selectedOptions.filter(option => option.id !== item.id);
            setSelectedOptions(updatedOptions);
            handleChange(updatedOptions);
        }

    };

    return (
        <Select multiple data-testid="person-select">
            {data && data.map((item, index) => (
                <Option
                    key={index}
                    value={item.name}
                    selected={selectedOptions.some(option => option.id === item.id)}
                    onClick={() => handleOptionClick(item)}
                >
                    {item.name}
                </Option>
            ))}
        </Select>
    );
}