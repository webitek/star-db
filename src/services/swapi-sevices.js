export default class SwapiService {

  _apiBase = 'https://swapi.co/api';

  async getResource (url) {
    const res = await fetch(`${this._apiBase}${url}`)
    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }
    return await res.json()
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`)
    return res.results
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}`)
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`)
    return res.results
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}`)
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`)
    return res.results
  }

  getPerson(id) {
    return this.getResource(`/people/${id}`)
  }
}

const swapi = new SwapiService();
swapi.getAllPeople().then(people => {
  console.log(people);
})

/*
const getResource =async (url) => {
  const res = await fetch(url)

  if(!res.ok) {
    throw new Error(`Could not fetch ${url}, received ${res.status}`)
  }

  const body = await res.json()
  return body
}


getResource('https://swapi.co/api/people/1/')
  .then(body => {
    console.log(body);
  })
.catch(err => {
  console.log('catch', err);
})*/
