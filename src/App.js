import React, { useEffect, useState } from "react";
import { Card, Box, Avatar, Typography, Stack } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import BasicModal from "./BasicModal";
import "./App.css";

function App() {
  const [userinfo, setUserInfo] = useState([]);

  const getUser = async () => {
    const res = await fetch(`https://api.github.com/users`);
    setUserInfo(await res.json());
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="maincantainer">
        <div>
          <Typography sx={{ fontWeight: 900, textAlign: "center", padding: 5 }}>
            List of GitHub Users
          </Typography>
        </div>
        <div className="flex-container">
          {userinfo.map((curElem) => {
            return (
              <>
                <Card
                  sx={{
                    justifyContent: "space-around",
                    margin: "0.5rem",
                    display: "flex",
                    alignItems: "flex-start",
                    border: "1px solid green",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyItems: "flex-start",
                      width: "100px",
                      height: "100px",
                      border: "1px solid blue",
                    }}
                  >
                    <img src={curElem.avatar_url} />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      border: "1px solid black",
                    }}
                  >
                    <Typography fontWeight={700}>{curElem.login}</Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {curElem.type}
                    </Typography>

                    <Card className="tableinfo">
                      <table>
                        <tr>
                          <td>Articals</td>
                          <td>Fllowers</td>
                          <td>Ratings</td>
                        </tr>
                        <tr>
                          <td>11</td>
                          <td>200</td>
                          <td>34</td>
                        </tr>
                      </table>
                      <Box>
                        <BasicModal>Details</BasicModal>
                      </Box>
                    </Card>
                  </Box>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
