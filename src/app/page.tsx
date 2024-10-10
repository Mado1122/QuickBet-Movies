'use client'

import HeaderComponent  from "./Componentes/header"
import BannerComponent from "./Componentes/Banner";
import FiltrosComponent from "./Componentes/Filtros";
import PeliculasComponent from "./Componentes/Peliculas";
import "./css/Global.css"
import React,{useEffect} from 'react';


interface CountryGraph {
  [country: string]: { [connectedCountry: string]: number };
}

const graph: CountryGraph = {
  A: { B: 10, C: 25 },
  B: { A: 10, C: 15 },
  C: { A: 25, B: 15 }
};


function ValidarDistanciaMasCorta(graph: CountryGraph, start: string, end: string): { path: string[], distance: number } | null {
  // Verificar si el país de inicio y de fin existen en el grafo
  if (!graph[start] || !graph[end]) {
      console.error("Uno de los países no existe en el grafo.");
      return null;
  }

  const distances: { [key: string]: number } = {};
  const previous: { [key: string]: string | null } = {};
  const visited: Set<string> = new Set();

  // Inicializar las distancias y el camino previo
  for (const country in graph) {
      distances[country] = Infinity; // Asignar distancia infinita inicialmente
      previous[country] = null; // No hay país previo inicialmente
  }
  
  distances[start] = 0; // La distancia al país de inicio es 0

  while (true) {
      // Buscar el país con la distancia mínima que no haya sido visitado
      let minDistanceCountry: string | null = null;
      for (const country in graph) {
          if (!visited.has(country) && (minDistanceCountry === null || distances[country] < distances[minDistanceCountry])) {
              minDistanceCountry = country;
          }
      }

      // Si no hay más países por visitar o la distancia es infinita, se detiene la búsqueda
      if (minDistanceCountry === null || distances[minDistanceCountry] === Infinity) {
          break;
      }

      visited.add(minDistanceCountry);

      // Actualizar las distancias de los países vecinos
      for (const neighbor in graph[minDistanceCountry]) {
          const newDistance = distances[minDistanceCountry] + graph[minDistanceCountry][neighbor];
          if (newDistance < distances[neighbor]) {
              distances[neighbor] = newDistance;
              previous[neighbor] = minDistanceCountry;
          }
      }
  }

  // Reconstruir el camino más corto
  const path: string[] = [];
  let current: string | null = end;
  while (current) {
      path.unshift(current); // Agregar el país actual al inicio del camino
      current = previous[current];
  }

  // Si el camino comienza con el país de inicio, retornamos el camino y la distancia
  if (path[0] === start) {
      return { path, distance: distances[end] };
  } else {
      return null; // No hay camino disponible
  }
}



export default function Home() {

  useEffect(() => {

    let result = ValidarDistanciaMasCorta(graph, 'A', 'C');
    if (result) {
      console.log(`El camino más corto de A a C es: ${result.path.join(' -> ')} con una distancia de ${result.distance} km.`);
  } else {
      console.log("No hay un camino disponible entre los países.");}

     
        document.title = "QuickBet Movies"; 
      

  }, []); 

  return (
    <>

    <HeaderComponent/>
   <BannerComponent/>
   <div className="ContainerBody">
   <FiltrosComponent/>
   <PeliculasComponent/>
   </div>
   
    </>
   
  );
}
