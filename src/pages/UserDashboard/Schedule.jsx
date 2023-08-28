import React, { useState, useEffect } from "react";
import "./Schedule.css";
import axios from "axios";

const Schedule = () => {
  const [scheduleData, setScheduleData] = useState([]);

  const API = axios.create({ baseURL: "http://localhost:3001" });

  API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
      req.headers.authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).token
      }`;
    }

    return req;
  });

  useEffect(() => {
    const fetchScheduleData = async () => {
      try {
        const response = await API.get("/app/schedule");
        console.log(response.data.schedule);
        setScheduleData(response.data.schedule);
      } catch (error) {
        console.error("Error fetching schedule data:", error);
      }
    };
    fetchScheduleData();
  }, []);

  return (
    <div className="Schedule-main">
      <h2 className="Schedule-title">Your upcoming schedules</h2>
      <div class="user_table px-xl-5 px-lg-3 mt-4">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Coach name</th>
                <th>Date</th>
                <th>Meeting link</th>
                <th>Meeting ID</th>
                <th>Password</th>
              </tr>
            </thead>

            <tbody>
              {scheduleData?.map((schedule) => (
                <tr>
                  <td data-label="Coach name">{schedule?.trainer_id?.name}</td>
                  <td data-label="Date">
                    {schedule.date}, {schedule.time}{" "}
                    {schedule.time >= "12:00" ? "pm" : "am"} onwards
                  </td>
                  <td data-label="Meeting link">
                    <a
                      href={schedule.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {schedule.link}
                    </a>
                  </td>
                  <td data-label="Meeting ID">{schedule.meeting_id}</td>
                  <td data-label="Meeting Password">
                    {schedule.meeting_password
                      ? schedule.meeting_password
                      : "No password"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
