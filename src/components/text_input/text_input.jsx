import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';

export function TextInput(name: string, onChangeFunc, changedItem) {
    return (
        <FormControl id="Id"
          required
          color="primary">
          <Input
            placeholder={name+"..."}
            name={name}
            autoComplete="on"
            variant="standard"
            required
            onChange={(e) => onChangeFunc(e.target.value)} value = {changedItem}
          />
        </FormControl>
    )
}