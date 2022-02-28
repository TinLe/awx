import Base from '../Base';

class Instances extends Base {
  constructor(http) {
    super(http);
<<<<<<< HEAD
<<<<<<< HEAD
    this.baseUrl = '/api/v2/instances/';
=======
    this.baseUrl = 'api/v2/instances/';
>>>>>>> upstream/devel
=======
    this.baseUrl = 'api/v2/instances/';
>>>>>>> upstream/devel

    this.readHealthCheckDetail = this.readHealthCheckDetail.bind(this);
    this.healthCheck = this.healthCheck.bind(this);
  }

  healthCheck(instanceId) {
    return this.http.post(`${this.baseUrl}${instanceId}/health_check/`);
  }

  readHealthCheckDetail(instanceId) {
    return this.http.get(`${this.baseUrl}${instanceId}/health_check/`);
  }
}

export default Instances;
