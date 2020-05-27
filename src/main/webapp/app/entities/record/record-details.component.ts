import { Component, Vue, Inject } from 'vue-property-decorator';

import { IRecord } from '@/shared/model/record.model';
import RecordService from './record.service';

@Component
export default class RecordDetails extends Vue {
  @Inject('recordService') private recordService: () => RecordService;
  public record: IRecord = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.recordId) {
        vm.retrieveRecord(to.params.recordId);
      }
    });
  }

  public retrieveRecord(recordId) {
    this.recordService()
      .find(recordId)
      .then(res => {
        this.record = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
