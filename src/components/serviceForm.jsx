import React, { useState, useEffect } from 'react';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServiceForm = () => {
  const [state, setState] = useState({
    title: 'RICA - Import permit',
    citizenship: '',
    countryCode: '+250',
    phone: '',
    email: '',
    ownerAddress: '',
    bussinessType: '',
    companyName: '',
    tinNumber: '',
    registrationDate: '',
    location: '',
    purposeImportation: '',
    productCategory: '',
    weight: '',
    unitMeasurement: '',
    quantity: '',
    description: '',
    loading: '',
    error: '',
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      title: 'RICA - Import permit'
    }));
  }, []);

  const handleChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    delete state.error;
    delete state.loading;

    Object.entries(state).map(([, value]) => {
      if (value === '') {
        return setState((prevState) => ({ ...prevState, error: 'All fields are required' }));
      }

      return setState((prevState) => ({ ...prevState, loading: 'Loading ...' }));
    });
  };

  return (
    <div className="service-form-container">
      <h1>{state.title}</h1>

      <div className="details-container">
        <div className="header"> <FontAwesomeIcon icon={faFile} className="font-icons" /> Business Owner Details </div>
        <h2> Business Owner Details </h2>
        <div className="form-container">
          <div className="form-label-input">
            <div> Applicant citizenship </div>
            <select required name="citizenship" value={state.citizenship} onChange={handleChange}>
              <option value=""> Select citizenship </option>
              <option value="rwandan"> Rwandan </option>
              <option value="foreigner"> Foreigner </option>
            </select>
          </div>
        </div>

        <div className="form-container">
          <div className="form-label-input">
            <div>Phone number</div>
            <div className="phone-input">
              <select required name="countryCode" value={state.countryCode} onChange={handleChange}>
                <option value={state.countryCode}> +250 </option>
                <option value="+254"> +254 </option>
                <option value="+256"> +256 </option>
              </select>
              <input type="number" placeholder="Enter phone numbe" name="phone" value={state.phone} onChange={handleChange} />
            </div>
          </div>

          <div className="form-label-input">
            <div> E-mail address </div>
            <input required type="email" placeholder="Enter email address" name="email" value={state.email} onChange={handleChange} />
          </div>
        </div>

        <h2> Business Owner Address </h2>
        <div className="form-container">
          <div className="form-label-input">
            <div> Provinces </div>
            <select required name="ownerAddress" value={state.ownerAddress} onChange={handleChange}>
              <option value=""> Select Province </option>
              <option value="kigali"> Kigali City </option>
              <option value="estern"> Estern Province </option>
              <option value="southern"> Southern Province </option>
              <option value="western"> WEstern Province </option>
            </select>
          </div>
        </div>
      </div>

      <div className="details-container">
        <div className="header"> <FontAwesomeIcon icon={faFile} className="font-icons" /> Business Details </div>
        <h2> Business Details </h2>
        <div className="form-container">
          <div className="form-label-input">
            <div> Bussiness type </div>
            <select required name="bussinessType" value={state.bussinessType} onChange={handleChange}>
              <option value=""> Select bussiness type </option>
              <option value="retailer"> Retailer </option>
              <option value="wholesale"> Wholesale </option>
              <option value="manufacturer"> Manufacturer </option>
            </select>
          </div>

          <div className="form-label-input">
            <div> Company name </div>
            <input required type="text" placeholder="Enter company name" name="companyName" value={state.companyName} onChange={handleChange} />
          </div>
        </div>

        <div className="form-container">
          <div className="form-label-input">
            <div> TIN Number </div>
            <input required type="number" placeholder="Enter TIN Number" name="tinNumber" value={state.tinNumber} onChange={handleChange} />
          </div>

          <div className="form-label-input">
            <div> Registration date </div>
            <input type="date" placeholder="Choose Date" name="registrationDate" value={state.registrationDate} onChange={handleChange} />
          </div>
        </div>

        <h2> Business Owner Address </h2>
        <div className="form-container">
          <div className="form-label-input">
            <div> Provinces </div>
            <select required name="location" value={state.location} onChange={handleChange}>
              <option value=""> Select Province </option>
              <option value="kigali"> Kigali City </option>
              <option value="estern"> Estern Province </option>
              <option value="southern"> Southern Province </option>
              <option value="western"> WEstern Province </option>
            </select>
          </div>
        </div>
      </div>

      <div className="details-container">
        <div className="header"> <FontAwesomeIcon icon={faFile} className="font-icons" /> Product Information </div>
        <h2> Importation details </h2>
        <div className="form-container">
          <div className="form-label-input">
            <div> Purpose of importation </div>
            <select required name="purposeImportation" value={state.purposeImportation} onChange={handleChange}>
              <option value=""> Select the purpose of importation </option>
              <option value="direct-sale"> Direct sale </option>
              <option value="personal-use">  Personal use </option>
              <option value="trial-use">  Trial use </option>
              <option value="other">  Other </option>
            </select>
          </div>
        </div>

        <h2> Product details </h2>
        <div className="form-container">
          <div className="form-label-input">
            <div> Product category </div>
            <select required name="productCategory" value={state.productCategory} onChange={handleChange}>
              <option value=""> Select product category </option>
              <option value="general-purpose">  General purpose </option>
              <option value="construction-materials">  Construction materials </option>
              <option value="chemicals">  Chemicals </option>
            </select>
          </div>
        </div>

        <div className="form-container">
          <div className="form-label-input">
            <div> Weight (kg) </div>
            <input type="number" placeholder="Weight (kg)" name="weight" value={state.weight} onChange={handleChange} />
          </div>
        </div>

        <div className="form-container">
          <div className="form-label-input">
            <div> Unit of measurement </div>
            <select required name="unitMeasurement" value={state.unitMeasurement} onChange={handleChange}>
              <option value=""> Select Unit of measurement </option>
              <option value="kgs"> Kgs </option>
              <option value="tonnes"> Tonnes </option>
            </select>
          </div>

          <div className="form-label-input">
            <div> Quantity of product(s) </div>
            <input required type="number" placeholder="Enter quantity of product(s)" name="quantity" value={state.quantity} onChange={handleChange} />
          </div>
        </div>

        <div className="area-container">
          <div className="form-label-input">
            <div> Description of products </div>
            <textarea required type="text" placeholder="Enter product description" name="description" value={state.description} onChange={handleChange} />
          </div>
        </div>

      </div>

      <div className="error">{ state.error }</div>
      <div className="loading">{ state.loading }</div>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ServiceForm;
