import React from "react";

export default function UserData() {


    return (
        <div className="user">

            <fieldset>

                <legend><b>Dados Clientes</b></legend>

                <form className="form1">
                    <input placeholder="Name..." type={"text"}></input>
                    <br></br>
                    <input placeholder="Mail..." type={"email"}></input>
                    <br></br>
                    <input placeholder="Phone..." type={"tel"}></input>
                    <br></br>
                    <input placeholder="CPF..." type={"number"}></input>
                </form>

            </fieldset>



        </div>
    )
}