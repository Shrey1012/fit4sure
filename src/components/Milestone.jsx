import React, { useState, useEffect } from "react";
import "./Milestone.css";
import axios from "axios";

const Milestone = () => {
  const [milestones, setMilestones] = useState({
    coaches: 0,
    successRate: 0,
    livesImpacted: 0,
    usersInIndia: 0,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/admin/milestones/all")
      .then((res) => {
        const data = res.data.milestones[0];
        setMilestones(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Milestone-main">
      <div className="Milestone-box">
        <div>
          <div className="ms-toptxt">{milestones.coaches}+</div>
          <div className="ms-bottomtxt">Coaches</div>
        </div>
        <div>
          <div className="ms-toptxt">{milestones.success_rate}%</div>
          <div className="ms-bottomtxt">Success rate</div>
        </div>
        <div>
          <div className="ms-toptxt">{milestones.lives_impacted}+</div>
          <div className="ms-bottomtxt">Lives impacted</div>
        </div>
        <div>
          <div className="ms-toptxt">{milestones.users_in_india}+</div>
          <div className="ms-bottomtxt">users in India</div>
        </div>
      </div>
    </div>
  );
};

export default Milestone;
