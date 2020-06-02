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

  const states =
    ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
      "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
      "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
      "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
      "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]

  
  const countries = [
    "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua", "Barbuda",
    "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
    "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire", "Bosnia", "Herzegovina", "Botswana",
    "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi",
    "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", 
    "Christmas Island", "Cocos Islands", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Curaçao",
    "Cyprus", "Czechia", "Côte", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvado", 
    "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", 
    "French Guiana", "French Polynesia", "French Southern Territories","Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", 
    "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea - Bissau", "Guyana", "Haiti", 
    "Heard Island", "McDonald Islands", "Holy See", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", 
    "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
    "Korea(the Democratic People's Republic of)", "Korea (the Republic of)", "Kuwait", "Kyrgyzstan",  
    "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
    "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique",
    "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia (Federated States of)", "Moldova (the Republic of)", "Monaco", "Mongolia", 
    "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands (the)", "New Caledonia", 
    "New Zealand", "Nicaragua", "Niger (the)", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands (the)",
    "Norway", "Oman", "Pakistan", "Palau", "Palestine, State of", "Panama", "Papua New Guinea", "Paraguay", "Peru",
    "Philippines (the)", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Republic of North Macedonia", "Romania", "Russian Federation (the)", 
    "Rwanda", "Réunion", "Saint Barthélemy", "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin (French part)", "Saint Pierre and Miquelon", "Saint Vincent", "Grenadines",
    "Samoa", "San Marino", "Sao Tome", "Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
    "Sint Maarten (Dutch part)", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
    "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan (the)", "Suriname",
    "Svalbard and Jan Mayen", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan (Province of China)", "Tajikistan",
    "Tanzania, United Republic of", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
    "Turkmenistan", "Turks and Caicos Islands (the)", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)", "United States Minor Outlying Islands (the)",
    "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela (Bolivarian Republic of)", "Viet Nam",
    "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe",
    "Åland Islands"
]

  const types = ["New Construction", "Renovation", "Restoration", "Addition", ]

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

    const handleInputChange = (event) => {
      event.preventDefault
      setNewSite({
        ...newSite, [event.currentTarget.id]: event.currentTarget.value
      })
    }

  const addressOptions = [""].concat(states).map(state => {
    return (
      <option key={state} value={state}>
        {state}
      </option>
    )
  })
  const constructionOptions = [""].concat(types).map(types => {
    return (
      <option key={types} value={types}>
        {types}
      </option>
    )
  })

  const countryOptions = [""].concat(countries).map(countries => {
    return (
      <option key={countries} value={countries}>
        {countries}
      </option>
    )
  })
    // const onChangeHandler = (event) => {
    //   event.preventDefault()
    //   console.log(event.target.value)
    // } 

  const onSubmitHandler = event => {
    event.preventDefault()
    if (validForSubmission()) {
      props.onAddressSubmitted(newSite)
      console.log(newSite)
    }
  }

    return (
      <div className="site-form-container">
        <h1>New Job Site</h1>
          <form onSubmit={setNewSite} className="form-style">
          <label htmlFor="street">
                Street:
                <input type="text" id="street" name="street" placeholder="Street"/>
            </label>

            <label>
            State:
                <select type="text" id="state" onChange={handleInputChange} name="state" value={newSite.state}>
                {addressOptions}
                </select>
            </label>

            <label>
              Country:
                <select type="text" id="country" onChange={handleInputChange} name="country" value={newSite.country}>
                  {countryOptions}
                </select>
            </label>

            <label>
              ZipCode:
                <input type="text" id="ZipCode" name="ZipCode" placeholder="ZipCode"/>
            </label>

          <label>
            Type:
                <select type="text" id="type" onChange={handleInputChange} name="type" value={newSite.type}>
              {constructionOptions}
            </select>
          </label>
          

            <input className="button" type="submit" value="Create New JobSite"/>
              <br></br>
          </form>
      </div>
      )
}

export default SiteFormContainer