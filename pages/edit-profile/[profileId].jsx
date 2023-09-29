import React from 'react'
import { useRouter } from "next/router";
import { useEffect } from 'react';
import { useState } from 'react';
function EditProfile() {
  const [data, setData] = useState(null);
  const router = useRouter();
  const {
    query: { profileId },
    isReady,
  } = router;
  useEffect(() => {
    if (isReady) {
      fetch(`/api/profile/`)
        .then((res) => res.json())
        .then((data) => setData(data.data));
    }
  }, [isReady]);
 console.log(data)
  return (
    <div>EditProfile</div>
  )
}

export default EditProfile