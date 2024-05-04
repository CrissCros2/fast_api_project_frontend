import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';

export function NameInput() {
    return (
        <FormControl id="Id"
          required
          color="primary">
          <Input
            placeholder="Name..."
            name="Name"
            autoComplete="on"
            variant="standard"
            autoFocus
            required
          />
        </FormControl>
    )
}