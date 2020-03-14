import React, { useState }from "react"
import { Redirect } from 'react-router-dom'


const SiteTile = props => {

      const [shouldRedirect, setShouldRedirect] =useState(null)
      const [errors, setErrors] = useState ({})
      const [newSite, setNewSite]= useState({
        street: "",
        state: "",
        country: "",
        zipCode: "",
        type: ""
      })

      const validForSubmission = () => {
        let submitErrors = {}
        const requiredFields = ["street", "state", "country", "zipCode", "type"]
        requiredFields.forEach(field => {
          if (newSite[field].trim() === "") {
            submitErrors = {
              ...setErrors,
              [field]: "can't be blank"
            }
          }
        })

        setErrors(submitErrors)
        return_.isEmpty(submitErrors)
      }

        const postNewSite = (newSite) => {
        event.preventDefault()
        if (validForSubmission()) {
          fetch("api/v1/users", {
            credentials: "same-origin",
            method: "POST",
            body: JSON.stringify(setNewSite),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          })
          .then(response => {
            if (response.ok) {
              return response
            } else {
              const errorMessage = `${response.status} (${response.statusText})`
              const error = new Error(errorMessage)
              throw error
            }
          })
          .then(response => response.json())
          .then(body => {
            if (body.id) {
              setShouldRedirect(body.id)
            } else {
              setErrors(body)
            }
          })
          .catch(error => console.error(`Error in fetch: ${error.message}`))
        }
      } 

      if (shouldRedirect) {
        return <Redirect to = "/stages"/>
      }

    const formSubmit = (event) => {
    event.preventDefault
    let sitePayLoad = newSite
    props.postNewSite(sitePayLoad)
  }

    const addNewSite = (event) => {
      event.preventDefault()
      setNewSite({
        ...newSite,
        [event.currentTarget.id]: event.currentTarget.value
      })
    }
        
    return (
      <div>
      <h1>New Job Site</h1>
        <form onSubmit={formSubmit}>
        <label>
            Street:
              <input type="text" name="street"
              onChange={addNewSite}
              value={newSite.street}/>
        </label>

        <label>
        State:
        <input type="text" name="state"
          onChange={addNewSite}
          value={newSite.state}/>
      </label>

      <label>
        Country:
        <input type="text" name="country"
          onChange={addNewSite}
          value={newSite.country}/>
      </label>

      <label>
        ZipCode:
        <input type="text" name="zipCode"
          onChange={addNewSite}
          value={newSite.zipCode}/>
      </label>

      <label>
        Type:
        <input type="text" name="type"
          onChange={addNewSite}
          value={newSite.type}/>
      </label>

      <input type="submit" value="Submit"/>
      <br></br>
      </form>
      </div>
      )
  
}

export default SiteTile