import Base from '../Base';
import NotificationsMixin from '../mixins/Notifications.mixin';
import SchedulesMixin from '../mixins/Schedules.mixin';

const Mixins = SchedulesMixin(NotificationsMixin(Base));

class SystemJobTemplates extends Mixins {
  constructor(http) {
    super(http);
<<<<<<< HEAD:awx/ui/src/api/models/SystemJobTemplates.js
<<<<<<< HEAD:awx/ui/src/api/models/SystemJobTemplates.js
    this.baseUrl = '/api/v2/system_job_templates/';
=======
    this.baseUrl = 'api/v2/system_job_templates/';
>>>>>>> upstream/devel:awx/ui_next/src/api/models/SystemJobTemplates.js
=======
    this.baseUrl = 'api/v2/system_job_templates/';
>>>>>>> upstream/devel:awx/ui_next/src/api/models/SystemJobTemplates.js
  }

  launch(id, data) {
    return this.http.post(`${this.baseUrl}${id}/launch/`, data);
  }
}

export default SystemJobTemplates;
