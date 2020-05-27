/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import RecordDetailComponent from '@/entities/record/record-details.vue';
import RecordClass from '@/entities/record/record-details.component';
import RecordService from '@/entities/record/record.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('Record Management Detail Component', () => {
    let wrapper: Wrapper<RecordClass>;
    let comp: RecordClass;
    let recordServiceStub: SinonStubbedInstance<RecordService>;

    beforeEach(() => {
      recordServiceStub = sinon.createStubInstance<RecordService>(RecordService);

      wrapper = shallowMount<RecordClass>(RecordDetailComponent, { store, localVue, provide: { recordService: () => recordServiceStub } });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundRecord = { id: 123 };
        recordServiceStub.find.resolves(foundRecord);

        // WHEN
        comp.retrieveRecord(123);
        await comp.$nextTick();

        // THEN
        expect(comp.record).toBe(foundRecord);
      });
    });
  });
});
