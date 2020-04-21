import React, { useState }from "react"
import { Redirect } from 'react-router-dom'
import _ from 'lodash'


const SiteFormContainer = props => {
  const [shouldRedirect, setShouldRedirect] =useState(null)
  const [errors, setErrors] = useState ({})

  const [newSite, setNewSite]= useState({
    street: "",
    state: "",
    country: "",
    zipCode: "",
    type: "",
    userId: props.userId
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
            body: JSON.stringify(newSite),
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
    alert("Site has been created Successfully")
  }

    const addNewSite = (event) => {
      event.preventDefault
      setNewSite({
        ...newSite, [event.currentTarget.id]: event.currentTarget.value
      })
    }

    // const onChangeHandler = (event) => {
    //   event.preventDefault()
    //   console.log(event.target.value)
    // } 

    return (
      <div className="site-form-container">
        <h1>New Job Site</h1>
          <form onSubmit={addNewSite} className="form-style">
            <label htmlFor="street">
                Street:
                <input type="text" id="street" name="street" placeholder="Street"/>
            </label>

            <label>
                State:
                <input type="text" id="state" name="state" placeholder="State"/>
            </label>

            <label>
              Country:
                <input type="text" name="country"/>
            </label>

            <label>
              ZipCode:
                <input type="text" id="ZipCode" name="ZipCode" placeholder="ZipCode"/>
            </label>

            <label>
              Type:
            <input type="text" name="type"/>
            </label>

            <input className="button" type="submit" value="Create New JobSite"/>
              <br></br>
          </form>
      </div>
      )
}

export default SiteFormContainer