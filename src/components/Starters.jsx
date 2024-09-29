import React from 'react'

const CardStarter = () => {

  const arrayPlayers = [
    {
      "name": "Juan Pérez",
      "avatar": "https://cdn.futwiz.com/assets/img/fc24/faces/67264726.png",
      "position": [1.0],
      "skills": ["speed"],
      "stats": {
        "attack": 8,
        "defense": 5,
        "hability": 7,
        "pass": 9
      },
      "actions": ["avanza dos casillas", "pase lateral", "tiro", "pase avanzado", "falta", "penalti"]
    },
    {
      "name": "Carlos Ramírez",
      "avatar": "https://cdn.futwiz.com/assets/img/fc24/faces/67264726.png",
      "position": [1.0],
      "skills": ["diving"],
      "stats": {
        "attack": 3,
        "defense": 10,
        "hability": 7,
        "pass": 6
      },
      "actions": ["pase alto lateral", "pase lateral", "falta", "tiro", "pase avanzado", "penalti"]
    },
    {
      "name": "Andrés Gómez",
      "avatar": "https://cdn.futwiz.com/assets/img/fc24/faces/67264726.png",
      "position": [3.0, 3.2],
      "skills": ["shooting"],
      "stats": {
        "attack": 9,
        "defense": 3,
        "hability": 6,
        "pass": 5
      },
      "actions": ["tiro", "pase avanzado", "penalti", "avanza dos casillas", "pase lateral", "pase alto avanzado"]
    },
    {
      "name": "Javier López",
      "avatar": "https://cdn.futwiz.com/assets/img/fc24/faces/67264726.png",
      "position": [1.2],
      "skills": ["passing"],
      "stats": {
        "attack": 6,
        "defense": 5,
        "hability": 7,
        "pass": 8
      },
      "actions": ["pase lateral", "avanza dos casillas", "pase avanzado", "falta", "penalti", "pase alto lateral"]
    },
    {
      "name": "Miguel Sánchez",
      "avatar": "https://cdn.futwiz.com/assets/img/fc24/faces/67264726.png",
      "position": [3.0, 3.4],
      "skills": ["marking"],
      "stats": {
        "attack": 3,
        "defense": 9,
        "hability": 5,
        "pass": 7
      },
      "actions": ["pase alto avanzado", "falta", "pase lateral", "pase avanzado", "penalti", "tiro"]
    },
    {
      "name": "Rodrigo Fernández",
      "avatar": "https://cdn.futwiz.com/assets/img/fc24/faces/67264726.png",
      "position": [5.1],
      "skills": ["shooting"],
      "stats": {
        "attack": 10,
        "defense": 4,
        "hability": 6,
        "pass": 5
      },
      "actions": ["tiro", "pase avanzado", "avanza dos casillas", "pase alto lateral", "penalti", "falta"]
    },
    {
      "name": "Luis Castillo",
      "avatar": "https://cdn.futwiz.com/assets/img/fc24/faces/67264726.png",
      "position": [3.3],
      "skills": ["heading"],
      "stats": {
        "attack": 5,
        "defense": 8,
        "hability": 6,
        "pass": 7
      },
      "actions": ["pase lateral", "pase avanzado", "falta", "penalti", "tiro", "pase alto avanzado"]
    },
    {
      "name": "Esteban Molina",
      "avatar": "https://cdn.futwiz.com/assets/img/fc24/faces/67264726.png",
      "position": [1.3],
      "skills": ["dribbling"],
      "stats": {
        "attack": 8,
        "defense": 5,
        "hability": 7,
        "pass": 6
      },
      "actions": ["pase lateral", "pase alto avanzado", "tiro", "penalti", "avanza dos casillas", "falta"]
    },
    {
      "name": "Diego Suárez",
      "avatar": "https://cdn.futwiz.com/assets/img/fc24/faces/67264726.png",
      "position": [5.0],
      "skills": ["vision"],
      "stats": {
        "attack": 7,
        "defense": 4,
        "hability": 8,
        "pass": 9
      },
      "actions": ["pase avanzado", "pase alto lateral", "falta", "tiro", "penalti", "avanza dos casillas"]
    },
    {
      "name": "Fernando Díaz",
      "avatar": "https://cdn.futwiz.com/assets/img/fc24/faces/67264726.png",
      "position": [3.2],
      "skills": ["tackling"],
      "stats": {
        "attack": 6,
        "defense": 9,
        "hability": 6,
        "pass": 7
      },
      "actions": ["pase lateral", "falta", "penalti", "tiro", "pase avanzado", "avanza dos casillas"]
    },
    {
      "name": "Gabriel Ruiz",
      "avatar": "https://cdn.futwiz.com/assets/img/fc24/faces/67264726.png",
      "position": [5.2],
      "skills": ["shooting"],
      "stats": {
        "attack": 9,
        "defense": 3,
        "hability": 7,
        "pass": 5
      },
      "actions": ["tiro", "pase lateral", "pase avanzado", "penalti", "falta", "pase alto avanzado"]
    },
    {
      "name": "Adrián Silva",
      "avatar": "https://cdn.futwiz.com/assets/img/fc24/faces/67264726.png",
      "position": [3.1],
      "skills": ["passing"],
      "stats": {
        "attack": 5,
        "defense": 6,
        "hability": 7,
        "pass": 8
      },
      "actions": ["pase lateral", "pase avanzado", "falta", "pase alto lateral", "penalti", "avanza dos casillas"]
    },
    {
      "name": "Manuel Torres",
      "avatar": "https://cdn.futwiz.com/assets/img/fc24/faces/67264726.png",
      "position": [5.3],
      "skills": ["crossing"],
      "stats": {
        "attack": 7,
        "defense": 4,
        "hability": 8,
        "pass": 7
      },
      "actions": ["pase alto avanzado", "pase lateral", "avanza dos casillas", "falta", "penalti", "tiro"]
    },
    {
      "name": "Oscar Medina",
      "avatar": "https://cdn.futwiz.com/assets/img/fc24/faces/67264726.png",
      "position": [1.4],
      "skills": ["speed"],
      "stats": {
        "attack": 8,
        "defense": 5,
        "hability": 7,
        "pass": 6
      },
      "actions": ["tiro", "penalti", "pase avanzado", "falta", "pase lateral", "avanza dos casillas"]
    },
    {
      "name": "Rafael Núñez",
      "avatar": "https://cdn.futwiz.com/assets/img/fc24/faces/67264726.png",
      "position": [3.4],
      "skills": ["interceptions"],
      "stats": {
        "attack": 4,
        "defense": 9,
        "hability": 6,
        "pass": 6
      },
      "actions": ["falta", "pase lateral", "pase avanzado", "penalti", "pase alto lateral", "tiro"]
    }
  ];

  const getPositionName = (position) => {
    switch (position) {
      case 1.0:
        return "PT";
      case 1.1:
      case 1.2:
      case 1.3:
        return "DFC";
      case 1.4:
        return "LD";
      case 3.0:
        return "CAI";
      case 3.1:
        return "II"; 
      case 3.2:
        return "MC"; 
      case 3.3:
        return "ID"; 
      case 3.4:
        return "CAI";
      case 5.0:
        return "EI"; 
      case 5.1:
      case 5.2:
      case 5.3:
        return "DC";
      case 5.4:
        return "ED";
      default:
        return "Unknown";
    }
  };
  
  
  return (
    <section className='section-starters'>

    <div className='court-container'>

    </div>

    <div className='card-starter_container'>
      {arrayPlayers.map((player, index) => (
        <div key={index} className='card-starter'>
          <h4 className='card-starter_name color-purewhite'>{player.name}</h4>
          <h5 className='card-starter_position color-purewhite'>
            {player.position.map(pos => getPositionName(pos)).join(', ')}
          </h5>
          <div className='card-starter_stats'>
            {Object.entries(player.stats).map(([key, value]) => (
              <div key={key} className='stat-content'>
                <p className='color-purewhite'>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                <p className='color-purewhite'>{value}</p>
              </div>
            ))}
          </div>
          <div className='point-skill'>
            <p className='card-starter_skills color-purewhite'>Skill: {player.skills.join(', ')}</p>  
          </div>
          <div className='masked-card'></div>
          <div className='masked-bg-card'>
            <img src={player.avatar} className='card-starter_avatar' />
          </div>
        </div>
      ))}
    </div>

    </section>
  );
}

export default CardStarter
