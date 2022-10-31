import React, { useEffect, useState } from "react";
import { getCountry, getCity } from "../assets/functions";

export default function UserDestination() {

    const [country, setCountry] = useState([])
    const [city, setCity] = useState([])

    useEffect(() => {

        getCountry().then((data) => {
            setCountry(data)
        })

        getCity().then((data) => {
            setCity(data)
        })

    }, [])

    return (
        <div className="local">

            <fieldset className="fieldset2">

                <legend><b>Destino Desejado</b></legend>

                <form className="form2">
                    <select name="country" className="country">
                        {country.map((item) => (<option key={item.code}>{item.name}</option>))}
                    </select>

                    <select name="city" className="city">
                        {city.map((item) => (<option key={item.id}>{item.name}</option>))}
                    </select>
                </form>

            </fieldset>

        </div>
    )
}