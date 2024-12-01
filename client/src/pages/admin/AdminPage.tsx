import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useFetch from "../../hooks/useFetch";
import { Iusers } from "../../interface/users";
import { useParams } from "react-router-dom";
import { IBuses } from "../../interface/buses";
import { IRoute } from "express";
import PageHeader from "../../componnets/pageHeader/PageHeader";

export const AdminPage = () => {
  const { user } = useContext(AuthContext) ?? {};
  const { GET, data } = useFetch("http://localhost:3001");
  const [users, setUsers] = useState<Iusers[]>([]);
  const [buses, setBuses] = useState<IBuses[]>([]);
  const [routes, setRoutes] = useState<IRoute[]>([]);

  useEffect(() => {}, []);

  return (
    <>
      <div>
        <div>
          <PageHeader title="users" subtitle="userssssss" />
        </div>
        {user &&
          users.map((user) => (
            <div>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.role}</p>
            </div>
          ))}
        <div>
          <PageHeader title="buses" subtitle="busessssssss" />
        </div>
        {user &&
          buses!.map((bus) => (
            <div>
              <h2>{bus.licensePlate}</h2>
              {/* <p>{bus.busmodel}</p>
              <p>{bus.capacity}</p>
              <p>{bus.status}</p> */}
              {/* <p>{bus.driverId}</p>
              <p>{bus.routId}</p> */}
            </div>
          ))}
        <div>
          <PageHeader title="routes" subtitle="routessssss" />
        </div>
        {user &&
          routes.map((rout) => (
            <div>
              <h2>{rout.lineNumber}</h2>
              {/* <p>{rout.name}</p>
              <p>{rout.stations}</p>
              <p>{rout.schedule}</p> */}
            </div>
          ))}
      </div>
    </>
  );
};
