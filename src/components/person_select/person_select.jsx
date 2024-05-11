import React, {useEffect, useState} from 'react';
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";


export function PersonSelect(handleChange, persons) {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [peopleList, setPeopleList] = useState(persons);

    useEffect(() => {
        setPeopleList(persons);
    }, [persons]);

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
        <div>
            <Select multiple data-testid="select-person">
                {peopleList && peopleList.map((item, index) => (
                    <Option
                        key={index}
                        value={item.name}
                        selected={selectedOptions.some(option => option.id === item.id)}
                        onClick={() => handleOptionClick(item)}>
                        {item.name}
                    </Option>
                ))}
            </Select>
        </div>
    );
}