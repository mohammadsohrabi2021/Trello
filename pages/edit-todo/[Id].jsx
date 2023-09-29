import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function EditTodo() {
  const [data, setData] = useState(null);
  
  const router = useRouter();
  const {
    query: { Id },
    isReady,
  } = router;
console.log(Id)
  useEffect(() => {
    if (isReady) {
      fetch(`/api/todos/${Id}`)
        .then((res) => res.json())
        .then((data) => setData(data.data));
    }
  }, [isReady]);
  console.log(data)
  return (
    <div>EditTodo</div>
  )
}

export default EditTodo
