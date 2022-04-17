import React, { useState } from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { refreseData, removeData } from "../Api/api";
import { TextField } from "@mui/material";
// import { TextField } from '@mui/material';


export default function ShowData(props) {
  const { name, age, city, country, id } = props;
  const [update, setUpdate] = useState(false);
  const [inputData, setInputData] = useState({
    name: name,
    age: age,
    city: city,
    country: country,
    _id: id
  });


  const DeleteData = async () => {
    const response = await removeData({ _id: id })
    const succes = response.status === 200
    if (succes) {
      window.location.reload()
    }
  }


  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setInputData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  // console.log(inputData)

  const updateData = async (e) => {
    // e.preventDefault()

    const response = await refreseData(inputData)
    const success = response.status === 200
    if (success) {
      window.location.reload()
    }
    // console.log(response)
  }
  return (
    <div>
      <Card sx={{ minWidth: 255 }}>
        <CardContent>
          <h4>Name:{update ? <TextField id="outlined-basic" label="Name" size="small" variant="outlined" name="name" value={inputData.name} onChange={handleChange} /> : name}</h4>
          <h4>Age:{update ? <TextField id="outlined-basic" label="Age" size="small" variant="outlined" name="age" value={inputData.age} onChange={handleChange} /> : age}</h4>
          <h4>City:{update ? <TextField id="outlined-basic" size="small" label="City" variant="outlined" name="city" value={inputData.city} onChange={handleChange} /> : city}</h4>
          <h4>Country:{update ? <TextField id="outlined-basic" size="small" label="Country" variant="outlined" name="country" value={inputData.country} onChange={handleChange} /> : country}</h4>
        </CardContent>
        <CardActions>
          {update ? <Button variant="contained" color="success" size="small" type="submit" onClick={() => updateData()}>
            Update
          </Button> :
            ""
          }
          <Button variant="contained" size="small" type="submit" onClick={() => setUpdate(true)}>
            Edit
          </Button>
          <Button variant="contained" size="small" color="error" type="submit" onClick={() => DeleteData()}>
            Delete
          </Button>
        </CardActions>
      </Card>

    </div>
  )
}
