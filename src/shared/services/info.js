import axios from 'axios';
import * as endpoints from '../constants/api-constants'

class InfoService {
    static all() {
        return axios.get(endpoints.MockConst).then(resp => resp.data)
    }
}

export default InfoService;