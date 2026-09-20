"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const keuringen = [
  {
    id: "75plus",
    title: "Rijbewijskeuring 75+",
    subtitle: "Rijbewijs verlengen vanaf 75 jaar",
    duration: "15 min",
    price: "€55",
    calLink: "ali-kumas-2t9ulq/rijbewijskeuring-75-plus",
  },
  {
    id: "tot75",
    title: "Medische rijbewijskeuring tot 75 jaar",
    subtitle: "Medische keuring op verwijzing van het CBR",
    duration: "15 min",
    price: "€55",
    calLink: "ali-kumas-2t9ulq/medische-rijbewijskeuring-tot-75-jaar",
  },
  {
    id: "sport",
    title: "Basis sportkeuring",
    subtitle: "Medische basisbeoordeling voor sport",
    duration: "15 min",
    price: "€60",
    calLink: "ali-kumas-2t9ulq/basis-sportkeuring",
  },
  {
    id: "knaf",
    title: "KNAF-keuring",
    subtitle: "Medische keuring voor autosport",
    duration: "15 min",
    price: "€60",
    calLink: "ali-kumas-2t9ulq/knaf-keuring",
  },
  {
    id: "verzekering",
    title: "Verzekeringskeuring",
    subtitle: "Medische keuring voor uw verzekering",
    duration: "30 min",
    price: null,
    calLink: "ali-kumas-2t9ulq/verzekeringskeuring",
  },
];

export default function KeurFitBooking() {
  const [selected, setSelected] = useState(keuringen[0]);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: "keurfit",
      });

      cal("ui", {
        theme: "light",

        styles: {
          branding: {
            brandColor: "#123c31",
          },
        },

        hideEventTypeDetails: false,

        layout: "month_view",
      });
    })();
  }, []);

  function selectKeuring(item) {
    setSelected(item);

    setTimeout(() => {
      document
        .getElementById("keurfit-agenda")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  }

  return (
    <div className="keurfitBooking">

      <div className="bookingChoiceHeader">
        <span className="bookingChoiceStep">1</span>

        <div>
          <h3>Kies uw keuring</h3>
          <p>
            Selecteer hieronder welke medische keuring u wilt
            inplannen.
          </p>
        </div>
      </div>

      <div className="keurfitBookingOptions">

        {keuringen.map((item) => (
          <button
            type="button"
            key={item.id}
            onClick={() => selectKeuring(item)}
            className={`keurfitBookingOption ${
              selected.id === item.id ? "active" : ""
            }`}
          >
            <div className="bookingOptionTop">

              <span className="bookingOptionTitle">
                {item.title}
              </span>

              {selected.id === item.id && (
                <span className="bookingCheck">✓</span>
              )}

            </div>

            <span className="bookingOptionSubtitle">
              {item.subtitle}
            </span>

            <div className="bookingOptionBottom">

              <span className="bookingDuration">
                {item.duration}
              </span>

              {item.price && (
                <strong>{item.price}</strong>
              )}

            </div>
          </button>
        ))}

      </div>

      <div
        id="keurfit-agenda"
        className="keurfitCalendarSection"
      >

        <div className="bookingChoiceHeader">

          <span className="bookingChoiceStep">2</span>

          <div>
            <h3>Kies een datum en tijd</h3>

            <p>
              Beschikbare momenten voor{" "}
              <strong>{selected.title}</strong>
            </p>
          </div>

        </div>

        <div className="selectedBookingBar">

          <div>
            <span className="selectedBookingLabel">
              GESELECTEERD
            </span>

            <strong>{selected.title}</strong>
          </div>

          <div className="selectedBookingDetails">
            <span>{selected.duration}</span>

            {selected.price && (
              <strong>{selected.price}</strong>
            )}
          </div>

        </div>

        <div className="realCalCalendar">

          <Cal
            key={selected.calLink}
            namespace="keurfit"
            calLink={selected.calLink}
            style={{
              width: "100%",
              height: "100%",
              overflow: "scroll",
            }}
            config={{
              layout: "month_view",
              theme: "light",
            }}
          />

        </div>

      </div>

    </div>
  );
}
