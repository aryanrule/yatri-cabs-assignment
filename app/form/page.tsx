"use client";
import React, { useEffect, useMemo, useState } from "react";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";
import { setActiveForm } from "../features/slice/appSlice";
import {
  setTripType,
  updateField as updateOut,
  resetForm as resetOut,
} from "../features/slice/outstationSlice";
import {
  updateField as updateLocal,
  resetForm as resetLocal,
} from "../features/slice/localSice";
import {
  updateField as updateAirport,
  resetForm as resetAirport,
} from "../features/slice/airportSlice";
import { RootState } from "../features/store/formstore";
import { toast } from "react-toastify";

const Form = () => {
  const dispatch = useDispatch();
  const activeForm = useSelector((state: RootState) => state.app.activeForm);
  const outstation = useSelector((state: RootState) => state.outstation);
  const local = useSelector((state: RootState) => state.local);
  const airport = useSelector((state: RootState) => state.airport);
  const [showPickupDropdown, setShowPickupDropdown] = useState(false);
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);

  const [states, setStates] = useState<any[]>([]);

  let result: any | null = null;
  const countryCode = "IN";
  const fetchCities = async () => {
    const response = await fetch(
      `https://api.countrystatecity.in/v1/countries/${countryCode}/states`,
      {
        headers: {
          "X-CSCAPI-KEY":
            "215f56da9004a7e2d363ea5cd70bb50eecd3e43ad5421628caa755ab6da3d7b6",
        },
      },
    );
    const countries = await response.json();
    result = countries;
    // console.log("result", result);
    setStates(result);
    // console.log(result);
  };

  useEffect(() => {
    fetchCities();
  }, []);

  const chachedStates = useMemo(() => {
    return states.map((state) => state.name);
  }, [states]);
  // console.log("cached cities", chachedStates);

  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const [pickupcity, setPickUpCity] = useState("");
  const [destinationcity, setDestinationCity] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");

  // const filteredCities = useMemo(() => {

  //   // if (!searchTerm) return chachedStates;
  //   return chachedStates.filter((city) =>
  //     city?.toLowerCase().includes(searchTerm.toLowerCase()),
  //   );
  // }, [searchTerm, chachedStates]);

  const getfilteredCities = (value?: string) => {
    if (!value) return chachedStates;
    return chachedStates.filter((city) =>
      city?.toLowerCase().includes(value.toLowerCase()),
    );
  };

  // useEffect(() => {
  //    dispatch(resetAirport());
  //    dispatch(resetLocal());
  //    dispatch(resetOut());
  // } , [activeForm]);


  const { tripType, oneWay, roundTrip } = outstation;
  const { formData } = local;
  useEffect(() => {
    console.log("oneWay ", oneWay);
    console.log("roundtrip", roundTrip);
    console.log("changing localform data", formData);
    console.log("changing airportt data", airport.formData);
  }, [oneWay, roundTrip, local, airport]);

  /// one handleer
  // outstation or local or airport
  // after entering everyfield completely i will completly console the payload and toast it up

  const handleSelect = (
    activeForm: any,
    formtype: any,
    field: any,
    value: any,
  ) => {
    console.log("jsdjsjfbdbfdfd");
    console.log("city", value);
    if (activeForm === "outstation") {
      dispatch(
        updateOut({
          formType: formtype,
          field: field,
          value: value,
        }),
      );
    } else if (activeForm === "local") {
      dispatch(
        updateLocal({
          field: field,
          value: value,
        }),
      );
    } else if (activeForm === "airport") {
      console.log("helllooooo");
      dispatch(
        updateAirport({
          field: field,
          value: value,
        }),
      );
    }

    if (field === "pickupCity") {
      setPickUpCity(value);
    }
    if (field === "destinationCity") {
      setDestinationCity(value);
    }
    if (field === "mobile_no") {
      setMobileNumber(value);
    }

    // dispatch(
    //   updateOut({
    //     formType: tripType,
    //     field: "pickupCity", // dummy
    //     value: city,
    //   }),
    // );
    // setSearchTerm(city); // show selected city in input
    // setShowDropdown(false);
  };

  // at the very end i am sending payload thing and toast successfully
  // send only that payload in whichever payload you are at

const submitHandler = (e: any) => {
  e.preventDefault();

  let payload: any = {};

  if (activeForm === "outstation") {
    const { tripType, oneWay, roundTrip } = outstation;
    const data = tripType === "oneWay" ? oneWay : roundTrip;

    payload = {
      formType: "outstation",
      tripType: tripType,
      ...data,
    };

  } else if (activeForm === "local") {
    payload = {
      formType: "local",
      ...local.formData,
    };

  } else if (activeForm === "airport") {
    payload = {
      formType: "airport",
      ...airport.formData,
    };
  }

  console.log("Final Payload:", payload);

  toast("Form submitted successfully 🚀");

  dispatch(resetOut());
  dispatch(resetLocal());
  dispatch(resetAirport());
};
  // ---------------- OUTSTATION ----------------
  const renderOutstation = () => {
    const { tripType, oneWay, roundTrip } = outstation;
    const data = tripType === "oneWay" ? oneWay : roundTrip;

    return (
      <>
        {/* Trip Type */}
        <div className="trip-type">
          <label>
            <input
              type="radio"
              checked={tripType === "oneWay"}
              onChange={() => dispatch(setTripType("oneWay"))}
              required={true}
            />
            One Way
          </label>

          <label className="round-trip">
            <input
              type="radio"
              checked={tripType === "roundTrip"}
              onChange={() => dispatch(setTripType("roundTrip"))}
              required={true}
            />
            Round Trip
          </label>
        </div>

        {/* Form Grid */}
        <div className="form-grid">
          <div className="form-group" style={{ position: "relative" }}>
            <label>PICKUP CITY</label>
            <input
              placeholder="Search City"
              value={pickupcity}
              onChange={(e) => {
                setPickUpCity(e.target.value);
                setShowPickupDropdown(true);
              }}
              onFocus={() => setShowPickupDropdown(true)}
              onBlur={() => setTimeout(() => setShowPickupDropdown(false), 200)}
              required={true}
            />
            {showPickupDropdown && getfilteredCities(pickupcity).length > 0 && (
              <ul
                className="dropdown"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  maxHeight: "150px",
                  overflowY: "auto",
                  background: "white",
                  border: "1px solid #ccc",
                  zIndex: 1000,
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                }}
              >
                {getfilteredCities(pickupcity).map((city, idx) => (
                  <li
                    key={idx}
                    onMouseDown={() =>
                      handleSelect(activeForm, tripType, "pickupCity", city)
                    }
                    style={{
                      padding: "8px",
                      cursor: "pointer",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="form-group" style={{ position: "relative" }}>
            <label>DESTINATION CITY</label>
            <input
              placeholder="Search City"
              value={destinationcity}
              onChange={(e) => {
                setDestinationCity(e.target.value);
                setShowDestinationDropdown(true);
              }}
              onFocus={() => setShowDestinationDropdown(true)}
              onBlur={() =>
                setTimeout(() => setShowDestinationDropdown(false), 200)
              }
              required={true}
            />
            {showDestinationDropdown &&
              getfilteredCities(destinationcity).length > 0 && (
                <ul
                  className="dropdown"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    maxHeight: "150px",
                    overflowY: "auto",
                    background: "white",
                    border: "1px solid #ccc",
                    zIndex: 1000,
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {getfilteredCities(destinationcity).map((city, idx) => (
                    <li
                      key={idx}
                      onMouseDown={() =>
                        handleSelect(
                          activeForm,
                          tripType,
                          "destinationCity",
                          city,
                        )
                      }
                      style={{
                        padding: "8px",
                        cursor: "pointer",
                        borderBottom: "1px solid #eee",
                      }}
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              )}
          </div>

          <div className="form-group">
            <label>PICK UP DATE</label>
            <input
              type="date"
              placeholder="Input Text"
              value={data.pick_up_date}
              onChange={(e) =>
                handleSelect(
                  activeForm,
                  tripType,
                  "pick_up_date",
                  e.target.value,
                )
              }
              required={true}
            />
          </div>

          {tripType === "roundTrip" && (
            <div className="form-group">
              <label>RETURN DATE</label>
              <input
                type="date"
                placeholder="Input Text"
                value={roundTrip.returnDate}
                onChange={(e) =>
                  handleSelect(
                    activeForm,
                    tripType,
                    "returnDate",
                    e.target.value,
                  )
                }
                required={true}
              />
            </div>
          )}

          <div className="form-group">
            <label>PICK UP TIME</label>
            <input
              type="time"
              value={data.pick_up_time} // controlled by Redux
              onChange={(e) =>
                handleSelect(
                  activeForm,
                  tripType,
                  "pick_up_time",
                  e.target.value,
                )
              }
              required={true}
            />
          </div>

          <div className="form-group">
            <label>MOBILE NO.</label>
            <input
              placeholder="+91"
              pattern="\d{10}"
              value={data.mobile_no}
              onChange={(e) =>
                handleSelect(activeForm, tripType, "mobile_no", e.target.value)
              }
              required={true}
            />
          </div>
        </div>
      </>
    );
  };

  // ---------------- LOCAL ----------------
  const renderLocal = () => {
    const data = local.formData;

    return (
      <div className="form-grid">
        <div className="form-group" style={{ position: "relative" }}>
          <label>PICKUP CITY</label>
          <input
            placeholder="Search City"
            value={pickupcity}
            onChange={(e) => {
              setPickUpCity(e.target.value);
              setShowPickupDropdown(true);
            }}
            onFocus={() => setShowPickupDropdown(true)}
            onBlur={() => setTimeout(() => setShowPickupDropdown(false), 200)}
            required={true}
          />
          {showPickupDropdown && getfilteredCities(pickupcity).length > 0 && (
            <ul
              className="dropdown"
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                maxHeight: "150px",
                overflowY: "auto",
                background: "white",
                border: "1px solid #ccc",
                zIndex: 1000,
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {getfilteredCities(pickupcity).map((city, idx) => (
                <li
                  key={idx}
                  onMouseDown={() =>
                    handleSelect(activeForm, "", "pickupCity", city)
                  }
                  style={{
                    padding: "8px",
                    cursor: "pointer",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="form-group">
          <label>PICK UP DATE</label>
          <input
            type="date"
            placeholder="Input Text"
            value={data.pick_up_date}
            onChange={(e) =>
              handleSelect(activeForm, "", "pick_up_date", e.target.value)
            }
            required={true}
          />
        </div>

        <div className="form-group">
          <label>PICK UP TIME</label>
          <input
            type="time"
            value={data.pick_up_time} // controlled by Redux
            onChange={(e) =>
              handleSelect(activeForm, "", "pick_up_time", e.target.value)
            }
            required={true}
          />
        </div>

        <div className="form-group">
          <label>MOBILE NO.</label>
          <input
            placeholder="+91"
            pattern="\d{10}"
            value={data.mobile_no}
            onChange={(e) =>
              handleSelect(activeForm, "", "mobile_no", e.target.value)
            }
            required={true}
          />
        </div>
      </div>
    );
  };

  // ---------------- AIRPORT ----------------
  const renderAirport = () => {
    const data = airport.formData;

    return (
      <div className="form-grid">
        <div className="form-group" style={{ position: "relative" }}>
          <label>PICKUP CITY</label>
          <input
            placeholder="Search City"
            value={data.pickupCity}
            onChange={(e) => {
              setPickUpCity(e.target.value);
              setShowPickupDropdown(true);
            }}
            onFocus={() => setShowPickupDropdown(true)}
            onBlur={() => setTimeout(() => setShowPickupDropdown(false), 200)}
            required={true}
          />
          {showPickupDropdown && getfilteredCities(pickupcity).length > 0 && (
            <ul
              className="dropdown"
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                maxHeight: "150px",
                overflowY: "auto",
                background: "white",
                border: "1px solid #ccc",
                zIndex: 1000,
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {getfilteredCities(pickupcity).map((city, idx) => (
                <li
                  key={idx}
                  onMouseDown={() =>
                    handleSelect(activeForm, "", "pickupCity", city)
                  }
                  style={{
                    padding: "8px",
                    cursor: "pointer",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="form-group" style={{ position: "relative" }}>
          <label>PICKUP CITY</label>
          <input
            placeholder="Search City"
            value={data.trip}
            onChange={(e) => {
              setPickUpCity(data.trip);
              setShowDestinationDropdown(true);
            }}
            onFocus={() => setShowDestinationDropdown(true)}
            onBlur={() =>
              setTimeout(() => setShowDestinationDropdown(false), 200)
            }
            required={true}
          />
          {showDestinationDropdown &&
            getfilteredCities(pickupcity).length > 0 && (
              <ul
                className="dropdown"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  maxHeight: "150px",
                  overflowY: "auto",
                  background: "white",
                  border: "1px solid #ccc",
                  zIndex: 1000,
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                }}
              >
                {getfilteredCities(pickupcity).map((city, idx) => (
                  <li
                    key={idx}
                    onMouseDown={() =>
                      handleSelect(activeForm, "", "trip", city)
                    }
                    style={{
                      padding: "8px",
                      cursor: "pointer",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
        </div>

        <div className="form-group">
          <label>Pickup Date</label>
          <input
            type="date"
            placeholder="Input Text"
            value={data.pick_up_date}
            onChange={(e) =>
              handleSelect(activeForm, "", "pick_up_date", e.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label>PICK UP TIME</label>
          <input
            type="time"
            placeholder="00:00"
            value={data.pick_up_time}
            onChange={(e) =>
              handleSelect(activeForm, "", "pick_up_time", e.target.value)
            }
            required={true}
          />
        </div>

        <div className="form-group">
          <label>MOBILE NO.</label>
          <input
            placeholder="+91"
            pattern="\d{10}"
            value={data.mobile_no}
            onChange={(e) =>
              handleSelect(activeForm, "", "mobile_no", e.target.value)
            }
            required={true}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="cab-form">
      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab ${activeForm === "outstation" ? "active" : ""}`}
          onClick={() => dispatch(setActiveForm("outstation"))}
        >
          Outstation
        </button>

        <button
          className={`tab ${activeForm === "local" ? "active" : ""}`}
          onClick={() => dispatch(setActiveForm("local"))}
        >
          Local
        </button>

        <button
          className={`tab ${activeForm === "airport" ? "active" : ""}`}
          onClick={() => dispatch(setActiveForm("airport"))}
        >
          Airport
        </button>
      </div>

      {/* Dynamic Form */}
      <form onSubmit={submitHandler}>
        {activeForm === "outstation" && renderOutstation()}
        {activeForm === "local" && renderLocal()}
        {activeForm === "airport" && renderAirport()}

        {/* Button */}
        <button
          className="explore-btn"
          type="submit"
          
        >
          EXPLORE CABS
        </button>
      </form>
    </div>
  );
};

export default Form;
