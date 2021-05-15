import React, { useEffect, useState } from "react"
import { AutoComplete } from 'antd';
import { googleAutocomplete } from "./google-autocomplete"

import "./auto-complete.css";
import { IoIosArrowDown, IoIosLocate } from "react-icons/io";
import { BiCurrentLocation } from "react-icons/bi";
import { GEO_CODE_API_URL } from "../../../constants";
import { asyncLocalStorage } from '../../utils/localStorage';
import { useRouter } from 'next/router'


function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
let geocoder;
export default function PredictionsOnInputChange({ searchValue, onChange,setSearchValue }) {
  const router = useRouter();
  const [predictions, setPredictions] = useState([]);
  const [cityName, setCityName] = useState(null);
  console.log(setSearchValue,onChange)
  const onSelect = (data) => {
    console.log('onSelect', data);
  };

  useEffect(async () => {
    if(cityName!=null){
      router.reload();
    }
	}, []);

  const onSearch = async (text) => {
    try {
      if (!text) {
        setPredictions([]);
        return;
      }
      const nextPredictions = await googleAutocomplete(text)
      const results = nextPredictions.map((prediction, index) => {
        const label = prediction?.structured_formatting?.main_text;
        return { key: index, value: label, label };
      })
      setPredictions(results)
    } catch (e) {
      console.error(e)
    }
  }
  const getCurrentLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		}
	}

  const showPosition = async (position) => {
		// const lat = position.coords.latitude;
		// const long = position.coords.longitude;

    const lat = "43.20577420";
    const long = "-77.66710000";
    // const lat = "43.12285180";
		// const long = "-77.61803020";

		const apiUrl = `${GEO_CODE_API_URL}&latlng=${lat},${long}`;
		const rawRespnse = await fetch(apiUrl);
		const result = await rawRespnse.json();
    onChange(result?.results[0]?.formatted_address)
    console.log(result?.results[0])
    console.log("address: "+result?.results[0]?.formatted_address)
    // geocoder = new window.google.maps.Geocoder();
    // var latlng = new google.maps.LatLng(lat, long);
    // var itemLocality="";

  //   var country = null, countryCode = null, cityName = null, cityAlt = null;
  //   new window.google.maps.Geocoder().geocode({'latLng' : latlng}, function(results, status) {
  //     if (status == google.maps.GeocoderStatus.OK) {
  //         if (results[1]) {
              
  //             var c, lc, component;
  //             for (var r = 0, rl = results.length; r < rl; r += 1) {
  //                 var result = results[r];
  
  //                 if (!cityName && result.types[0] === 'locality') {
  //                     for (c = 0, lc = result.address_components.length; c < lc; c += 1) {
  //                         component = result.address_components[c];
  
  //                         if (component.types[0] === 'locality') {
  //                           cityName = component.long_name;
  //                             break;
  //                         }
  //                     }
  //                 }
  //                 else if (!cityName && !cityAlt && result.types[0] === 'administrative_area_level_1') {
  //                     for (c = 0, lc = result.address_components.length; c < lc; c += 1) {
  //                         component = result.address_components[c];
  
  //                         if (component.types[0] === 'administrative_area_level_1') {
  //                             cityAlt = component.long_name;
  //                             break;
  //                         }
  //                     }
  //                 } else if (!country && result.types[0] === 'country') {
  //                     country = result.address_components[0].long_name;
  //                     countryCode = result.address_components[0].short_name;
  //                 }
  
  //                 if (cityName && country) {
  //                     break;
  //                 }
  //             }
  
  //             console.log("City: " + cityName + ", City2: " + cityAlt + ", Country: " + country + ", Country Code: " + countryCode);
  //             setCityName(cityName);
  //             asyncLocalStorage.setItem("cityName", cityName)
  //           }


  //         if(cityName==null || cityName==''){

    
  //           geocoder.geocode({latLng: latlng}, function(results, status) {
  //             if (status == google.maps.GeocoderStatus.OK) {
  //               if (results[1]) {
  //                 var arrAddress = results[1].address_components;
  //                 console.log("****************")
  //                 console.log(results);
  //                 arrAddress.map((address_component,index) => {
  //                   console.log("==>>")
  //                   console.log("==>>>>>>>>>>"+address_component.types[0]) 
  //                   console.log(address_component)
  //                   if (address_component.types[0] == "locality") {
  //                     console.log("cityName: " + address_component.long_name);
  //                     cityName = address_component.long_name;
  //                     asyncLocalStorage.setItem("cityName", cityName)
  //                     setCityName(cityName);    
  //                     // router.reload(); 
  //                   }
  //                 })
  //               } else {
  //                 alert("No results found");
  //               }
  //             } else {
  //               alert("Geocoder failed due to: " + status);
  //             }
  //           });
  //         }


  //     }
  // });


    

		// setSearchValue(result?.results[0]?.formatted_address);
	}

  return (
    <>
      <form className="flex items-center border-b-2 border-gray-600">
        <BiCurrentLocation className="text-lg cursor-pointer" onClick={getCurrentLocation} />
        <AutoComplete
          suffixIcon={<IoIosArrowDown />}
          name="predictionSearch"
          value={searchValue}
          options={predictions}
          onSelect={onSelect}
          // style={{
          //   width: 300,
          // }}
          allowClear={true}
          dropdownMatchSelectWidth={false}
          placeholder="Location.."
          className="w-full text-lg py-1 "
          bordered={false}
          onSearch={debounce(onSearch, 400)}
          onChange={value => {
            onChange(value)
            asyncLocalStorage.setItem("cityName", value)
          }}
        />
        <IoIosArrowDown className="mr-2"/>
      </form>
    </>
  )
}