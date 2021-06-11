import React, {useState} from 'react'
import './form.scss'
import Input from '../Input';
const Form = ({search, setSearch, setRequest}) => {

    const [error, setError] = useState(false)
    const {city, state} = search;

    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(city.trim() === '' || state.trim() === ''){
            setError(true)
        }else{
            setError(false)
            setRequest(true)
        }
    }
    return ( 
        <>
        <div className="form">
            <div className="title">
                <h2>Select a city and country</h2>
            </div>
            <div className="card">
                <form
                onSubmit={handleSubmit}
                >
                    
                    <select 
                    name="state" 
                    id=""
                    value={state}
                    onChange={handleChange}
                    >
                        <option value="">-- Select country --</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>
                    <Input
                    value={city}
                    onChangeValue={handleChange}
                    nameLabel="City"
                    nameInput="city"
                    typeValue="text"
                    colorLabel="#333"
                    colorInput="#333"
                    checkError={error}
                    valueError="Check the fields"
                    />
                    <div className="container-btn">
                        <button>Search</button>
                    </div>
                </form>
            </div>
        </div>
        </>
     );
}
 
export default Form;