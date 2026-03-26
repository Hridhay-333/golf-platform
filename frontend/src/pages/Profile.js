import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("https://golf-platform-hofp.onrender.com/api/users/profile", {
          headers: {
            Authorization: token,
          },
        });

        setData(res.data);
      } catch (err) {
        alert("Access Denied");
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default Profile;