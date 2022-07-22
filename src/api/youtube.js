import axios from 'axios'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResult:10,
        key:'AIzaSyD7yu-Fq2bkG127AIzkjyN0GH43cnEEDsM'
    }
})