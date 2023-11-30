import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';

function EntrenemosBtn() {
    let navigate = useNavigate();
    const handleClick = (e) => {
        <Link as={Link} to="/resultados"> 
        </Link>
    }
  return (
    <div>
    <Button onClick={handleClick}>
      Entrenemos 
      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      ></path>
        </svg>
    </Button>
    </div>
  )
}

export default EntrenemosBtn
