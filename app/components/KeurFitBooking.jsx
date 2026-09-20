"use client";

import { useState } from "react";

const appointmentTypes = [
  {
    id: "75plus",
    title: "75+ rijbewijskeuring",
    duration: 15,
    price: 55,
    description: "Voor het verlengen van het rijbewijs vanaf 75 jaar.",
  },
  {
    id: "medical-under-75",
    title: "Medische rijbewijskeuring tot 75 jaar",
    duration: 15,
    price: 55,
    description: "Medische rijbewijskeuring op verwijzing van het CBR.",
  },
  {
    id: "sport",
    title: "Basis sportkeuring",
    duration: 15,
    price: 60,
    description: "Een medische basisbeoordeling voor sport en inspanning.",
  },
  {
    id: "knaf",
    title: "KNAF-keuring",
    duration: 15,
    price: 60,
    description: "Medische keuring voor de autosport.",
  },
  {
    id: "insurance",
    title: "Verzekeringskeuring",
    duration: 30,
    price: null,
    description: "Medische keuring in het kader van een verzekering.",
  },
];

const demoDays = [
  { day: "21", disabled: true },
  { day: "22", available: true },
  { day: "23", available: true },
  { day: "24", available: true },
  { day: "25", available: true },
  { day: "26", disabled: true },
  { day: "27", disabled: true },
  { day: "28", available: true },
  { day: "29", available: true },
  { day: "30", available: true },
];

const demoTimes = [
  "09:00",
  "09:15",
  "09:30",
  "09:45",
  "10:00",
  "10:15",
  "10:30",
  "10:45",
  "11:00",
  "11:15",
];

export default function KeurFitBooking() {
  const [type, setType] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const [form, setForm] = useState({
    name: "",
    birthDate: "",
    email: "",
    phone: "",
  });

  const selectedType = appointmentTypes.find(
    (appointment) => appointment.id === type
  );

  function handleInput(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!selectedType || !date || !time) {
      alert("Kies eerst een keuring, datum en tijd.");
      return;
    }

    console.log({
      appointmentType: selectedType,
      date,
      time,
      client: form,
    });

    alert(
      "De planner is klaar voor koppeling met de centrale agenda."
    );
  }

  return (
    <div className="bookingShell">
      <div className="bookingStep">
        <div className="bookingStepHeader">
          <span className="bookingStepNumber">1</span>
          <div>
            <h3>Kies uw keuring</h3>
            <p className="bookingStepDescription">
              Selecteer de keuring waarvoor u een afspraak wilt maken.
            </p>
          </div>
        </div>

        <div className="appointmentTypes">
          {appointmentTypes.map((appointment) => (
            <button
              key={appointment.id}
              type="button"
              className={`appointmentType ${
                type === appointment.id ? "selected" : ""
              }`}
              onClick={() => {
                setType(appointment.id);
                setTime(null);
              }}
            >
              <span className="appointmentTypeTitle">
                {appointment.title}
              </span>

              <span className="appointmentTypeDescription">
                {appointment.description}
              </span>

              <span className="appointmentTypeMeta">
                <span>{appointment.duration} min</span>

                <span className="appointmentDot">•</span>

                <span className="appointmentTypePrice">
                  {appointment.price
                    ? `€${appointment.price}`
                    : "Prijs afhankelijk van keuring"}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className={`bookingStep ${!type ? "bookingDisabled" : ""}`}>
        <div className="bookingStepHeader">
          <span className="bookingStepNumber">2</span>
          <div>
            <h3>Kies datum en tijd</h3>
            <p className="bookingStepDescription">
              Alleen beschikbare momenten worden weergegeven.
            </p>
          </div>
        </div>

        <div className="bookingDateTime">
          <div className="calendarBox">
            <div className="calendarHeader">
              <button type="button" className="calendarArrow">
                ‹
              </button>

              <strong>September 2026</strong>

              <button type="button" className="calendarArrow">
                ›
              </button>
            </div>

            <div className="calendarWeek">
              <span>ma</span>
              <span>di</span>
              <span>wo</span>
              <span>do</span>
              <span>vr</span>
              <span>za</span>
              <span>zo</span>
            </div>

            <div className="calendarDays">
              {demoDays.map((item) => (
                <button
                  key={item.day}
                  type="button"
                  disabled={item.disabled || !type}
                  className={`calendarDay ${
                    item.available ? "available" : ""
                  } ${date === item.day ? "selected" : ""}`}
                  onClick={() => {
                    setDate(item.day);
                    setTime(null);
                  }}
                >
                  {item.day}
                </button>
              ))}
            </div>
          </div>

          <div className="timeBox">
            {!date ? (
              <div className="emptyTimes">
                <span className="emptyTimesIcon">○</span>
                <strong>Kies eerst een datum</strong>
                <p>Daarna verschijnen hier de beschikbare tijden.</p>
              </div>
            ) : (
              <>
                <h4>Dinsdag {date} september</h4>

                <p className="selectedDate">
                  {selectedType?.title} · {selectedType?.duration} minuten
                </p>

                <div className="timeSlots">
                  {demoTimes.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      className={`timeSlot ${
                        time === slot ? "selected" : ""
                      }`}
                      onClick={() => setTime(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <form className="bookingStep" onSubmit={handleSubmit}>
        <div className="bookingStepHeader">
          <span className="bookingStepNumber">3</span>

          <div>
            <h3>Uw gegevens</h3>
            <p className="bookingStepDescription">
              Vul uw gegevens in om de afspraak te bevestigen.
            </p>
          </div>
        </div>

        <div className="bookingForm">
          <div className="bookingField">
            <label htmlFor="name">Naam</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Voor- en achternaam"
              value={form.name}
              onChange={handleInput}
              required
            />
          </div>

          <div className="bookingField">
            <label htmlFor="birthDate">Geboortedatum</label>
            <input
              id="birthDate"
              name="birthDate"
              type="date"
              value={form.birthDate}
              onChange={handleInput}
              required
            />
          </div>

          <div className="bookingField">
            <label htmlFor="email">E-mailadres</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="naam@voorbeeld.nl"
              value={form.email}
              onChange={handleInput}
              required
            />
          </div>

          <div className="bookingField">
            <label htmlFor="phone">Telefoonnummer</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="06 12345678"
              value={form.phone}
              onChange={handleInput}
              required
            />
          </div>
        </div>

        {selectedType && date && time && (
          <div className="bookingSummary">
            <div>
              <span className="summaryLabel">Uw afspraak</span>

              <strong>{selectedType.title}</strong>

              <span>
                {date} september 2026 om {time} ·{" "}
                {selectedType.duration} minuten
              </span>
            </div>

            {selectedType.price && (
              <strong className="summaryPrice">
                €{selectedType.price}
              </strong>
            )}
          </div>
        )}

        <button className="bookingButton" type="submit">
          Afspraak bevestigen
          <span>→</span>
        </button>

        <p className="bookingPrivacy">
          Uw gegevens worden uitsluitend gebruikt voor het plannen en uitvoeren
          van uw afspraak.
        </p>
      </form>
    </div>
  );
}
