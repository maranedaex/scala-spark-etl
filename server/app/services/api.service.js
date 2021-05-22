import http from "../http-common";

class PropuestasDataService {
  getAll(params) {
    return http.get("/api", { params });
  }

  getAll() {
    return http.get("/propuestas");
  }

  create(data) {
    return http.post("/addpropuestas", data);
  }
}

export default new PropuestasDataService();