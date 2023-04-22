import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext'; 

const CurrencyDropDown = () => {
    const GBP = '£';
	const USD = '$';
	const EUR = "€";
	const INR = "₹";

    const { dispatch } = useContext(AppContext);
    const [currency, setCurrency] = useState(GBP);

    console.log(currency);

	const handleCurrencyChange = (event) => {
		let value = event.target.value;
        setCurrency(value);
		dispatch({
			type: 'CHG_CURRENCY',
			payload: value
		})
	}

    return (
        <div id='currency-box' className='alert alert-success'>
            <select id='currency-selection' onChange={handleCurrencyChange} className='form-select'>
                <option className="currency_notselected" selected disabled>Currency: {currency}</option>
                <option className="currencyOptionGBP" value={GBP}>{GBP} Pound </option>
                <option className="currencyOptionUSD" value={USD}>{USD} Dollar</option>
                <option className="currencyOptionEUR" value={EUR}>{EUR} Euro</option>
                <option className="currencyOptionINR" value={INR}>{INR} Ruppee</option>
            </select>
        </div>

    );
};

export default CurrencyDropDown;