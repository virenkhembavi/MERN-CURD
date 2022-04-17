import React, { useState } from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
// import axios from 'axios';
import { sendData } from "../Api/api";

export default function BasicCard() {
    const [inputData, setInputData] = useState({
        name: '',
        age: '',
        city: '',
        country: '',
    });

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setInputData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await sendData(inputData)
            const success = response.status === 200
            if (success) {
                window.location.reload()
            }
        } catch (err) {
            console.log(err)
        }
        // console.log(inputData)
    }

    return (
        <Card sx={{ minWidth: 255 }}>
            <form onSubmit={handleSubmit}>
                <CardContent>
                    <TextField id="outlined-basic" label="Name" variant="outlined" name="name" value={inputData.name} onChange={handleChange} />
                    <TextField id="outlined-basic" label="Age" variant="outlined" name="age" value={inputData.age} onChange={handleChange} />
                    <TextField id="outlined-basic" label="City" variant="outlined" name="city" value={inputData.city} onChange={handleChange} />
                    <TextField id="outlined-basic" label="Country" variant="outlined" name="country" value={inputData.country} onChange={handleChange} />
                </CardContent>
                <CardActions>
                    <Button variant="contained" size="small" color="success" type="submit">
                        Submit
                    </Button>
                </CardActions>
            </form>
        </Card>
    );
}
