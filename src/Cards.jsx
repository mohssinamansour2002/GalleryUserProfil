import React from 'react'
import Card from './Card';
import styles from "./styles.module.css";


export default function Cards() {
      const userData = [ 
  { 

    id: 1, 

    name: "Mohssin Amansour", 

    description: "Full stack .Net/React developer", 

    imageUrl: "../public/images/p.jpg", 

    age: "22 ans", 

    mobilite: "national", 

    disponibilité: "immédiate", 

    location: "Rabat, Maroc", 

    interests: ["Musique", "Voyage", "Lecture"] 

  }, 
  { 

    id: 2, 

    name: "Lina Al-Farsi", 

    description: "Mobile developer", 

    imageUrl: "../public/images/p.jpg", 

    age: "32 ans", 

    mobilite: "international", 

    disponibilité: "1 mois", 

    location: "Dubaï, Émirats Arabes Unis", 

    interests: ["Technologie", "Cinéma", "Yoga"] 

  }, 
  { 

    id: 3, 

    name: "Youssef Amrani", 

    description: "Data scientist", 

    imageUrl: "../public/images/p.jpg", 

    age: "30 ans", 

    mobilite: "national", 

    disponibilité: "immédiate", 

    location: "Casablance, Maroc", 

    interests: ["Programmation", "Jeux vidéo", "Voyage"] 

  }, 
  { 

    id: 4, 

    name: "Sara Khoury", 

    description: "Full stack .Net/React developer", 

    imageUrl: "../public/images/p.jpg", 

    age: "26 ans", 

    mobilite: "international", 

    disponibilité: "3 mois", 

    location: "Meknes, Maroc", 

    interests: ["AI", "Robotique", "Lecture"] 

  }, 
  { 

    id: 5, 

    name: "Amal Salim", 

    description: "Full stack JEE/Angular developer", 

    imageUrl: "../public/images/p.jpg", 

    age: "35 ans", 

    mobilite: "national", 

    disponibilité: "immédiate", 

    location: "Casablanca, Maroc", 

    interests: ["Musique", "Sports", "Technologie"] 

  } 

]; 
  return (
 <div className={styles.usPro}>
    {userData.map((user) => (
        <Card
        key={user.id}
          id={user.id}
          name={user.name}
          description={user.description}
          imageUrl={user.imageUrl}
          age={user.age}
          mobilite={user.mobilite}
          disponibilité={user.disponibilité}
          location={user.location}
          interests={user.interests}
        />
    ))}
</div>

  )
}
