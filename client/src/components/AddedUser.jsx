import react, { useState,useEffect } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
} from "@mui/material";
import { UpdateUser, GetUserData } from "../service/Api";
import { useNavigate,useParams } from "react-router-dom";

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const AddedUser = () => {
  const [user, setUser] = useState(initialValue);

  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    loadUserDetails();
  },[])

  const loadUserDetails = async() =>{
    const response = await GetUserData(id)
    setUser(response.data)
  }

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const updateUserDetails = async () => {
    await UpdateUser(user, id);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4">Added User</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" id="my-input" value={user.name}/>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Username</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="username"
          id="my-input"
          value={user.username}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" id="my-input" value={user.email} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" id="my-input" value={user.phone}/>
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => updateUserDetails()}
        >
          Update User
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddedUser;
