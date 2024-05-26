import { getAxios } from "../helpers/axios-helper";

class DashboardService {


    async getEstadisticas() {
        return await getAxios('dashboard/estadistica')
    }
}

export default DashboardService