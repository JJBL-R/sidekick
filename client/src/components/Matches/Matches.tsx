import React, {useEffect, useState} from 'react'
import Match from './Match'

const Matches = () => {

const [matches, setMatches] = useState([])

const getData = () => {
    fetch('/match')
    .then(res => res.json())
    .then((respdata) => {
    setMatches(respdata)
 // respdata = [{name: dfsdf sport : soccer} {name: dsfsdf sport: dfsdfsdf}]
     })
    .catch((err) => {     
    })
    }
    
    useEffect(() => {
        getData();
    }, []);

  return (
    <div>
      {
        matches.map((match, i) => (
            <Match/>
        ))
      }
    </div>
  )
}

export default Matches
