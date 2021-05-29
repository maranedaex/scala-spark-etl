import http from "../http-common";

const getAll = (params) => {
  return http.get("/propuestas", { params });
};

const get = (id) => {
  return http.get(`/propuestas/${id}`);
};

const create = (data) => {
  return http.post("/propuestas", data);
};

const update = (id, data) => {
  return http.put(`/propuestas/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/propuestas/${id}`);
};

const removeAll = () => {
  return http.delete(`/propuestas`);
};

const findByTitle = (titulo) => {
  return http.get(`/propuestas?titulo=${titulo}`);
};

const PropuestaService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default PropuestaService;
