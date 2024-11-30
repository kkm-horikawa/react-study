import { Button } from "@mui/material";
import { Input } from "@mui/material";

type FormProps = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: any) => void;
};

const Form = (props: FormProps) => {
  return (
    <form>
      <Input onChange={(e) => props.setCity(e.target.value)} />
      <Button variant="contained" onClick={props.getWeather}>
        Get Weather
      </Button>
    </form>
  );
};

export default Form;
