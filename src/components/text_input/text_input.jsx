import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';

export function TextInput(name: string) {
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
          />
        </FormControl>
    )
}