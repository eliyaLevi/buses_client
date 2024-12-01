import React from "react";
import PageHeader from "../../componnets/pageHeader/PageHeader";
import { Link } from "react-router-dom";
import { AdminPage } from "../admin/AdminPage";

export const HomePage = () => {
  return (
    <>
      <PageHeader title="Welcome to BusesHub" subtitle="eeeeeeeeeee." />

      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>pppppppppppp</p>
        <button className="cta-button">
          <Link to="/login">Get Started</Link>
        </button>
      </section>
    </>
  );
};
