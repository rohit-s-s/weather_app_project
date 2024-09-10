
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField, IconButton } from '@mui/material'; 

type Form = {
  formHandle: (e: React.FormEvent) => void;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

function Form({ formHandle, inputValue, setInputValue }: Form) {
  return (
    <>
      <form onSubmit={formHandle}>
        <TextField
          id="outlined-basic"
          label="Enter City..."
          variant="outlined"
          size="small"
          required
          autoComplete="off"
          value={inputValue}
          onChange={(event) => setInputValue(event?.target.value)}
          InputProps={{ 
            endAdornment: <InputAdornment position="end"> 
               <IconButton type="submit"> 
               <SearchIcon />
                </IconButton> 
            </InputAdornment>, 
        }}
        />
      </form>
    </>
  );
}

export default Form;
