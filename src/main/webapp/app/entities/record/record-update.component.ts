import { Component, Vue, Inject } from 'vue-property-decorator';

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators';

import AlertService from '@/shared/alert/alert.service';
import { IRecord, Record } from '@/shared/model/record.model';
import RecordService from './record.service';

const validations: any = {
  record: {
    date: {
      required
    },
    title: {
      required,
      maxLength: maxLength(100)
    },
    detail: {}
  }
};

@Component({
  validations
})
export default class RecordUpdate extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('recordService') private recordService: () => RecordService;
  public record: IRecord = new Record();
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.recordId) {
        vm.retrieveRecord(to.params.recordId);
      }
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.record.id) {
      this.recordService()
        .update(this.record)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A Record is updated with identifier ' + param.id;
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.recordService()
        .create(this.record)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A Record is created with identifier ' + param.id;
          this.alertService().showAlert(message, 'success');
        });
    }
  }

  public retrieveRecord(recordId): void {
    this.recordService()
      .find(recordId)
      .then(res => {
        this.record = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {}
}
