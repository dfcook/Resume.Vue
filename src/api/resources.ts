import axios from 'axios'

export default function getResume() { return axios.get('http://46.101.94.208:8080/api/resume/dfcook') }
